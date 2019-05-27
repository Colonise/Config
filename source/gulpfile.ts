import { TestRunner, TestSet } from 'alsatian';
import RootPath from 'app-root-path';
import del from 'del';
import * as fs from 'fs';
import { default as glob } from 'glob';
import GulpClient from 'gulp';
import GulpIstanbul from 'gulp-istanbul';
import tslintPlugin from 'gulp-tslint';
import * as gulpTypescript from 'gulp-typescript';
import merge from 'merge-stream';
import * as path from 'path';
import streamToPromise from 'stream-to-promise';
import { TapBark } from 'tap-bark';
import * as TSlint from 'tslint';

enum TestOutput {
    None,
    Result,
    Coverage
}

const packageJsonPath = './package.json';

const relativeSourceDirectory = './source';
const relativeBuildDirectory = './build';
const relativeDefaultDirectory = './default';
const relativeCoverageDirectory = './coverage';
const relativeDistributeDirectory = './distribute';

const absoluteSourceDirectory = RootPath.resolve(relativeSourceDirectory);
const absoluteBuildDirectory = RootPath.resolve(relativeBuildDirectory);
const absoluteDefaultDirectory = RootPath.resolve(relativeDefaultDirectory);
const absoluteDistributeDirectory = RootPath.resolve(relativeDistributeDirectory);

const declarationFiles = RootPath.resolve(`${absoluteSourceDirectory}/**/*.d.ts`);

const tsProject = gulpTypescript.createProject(`${absoluteSourceDirectory}/tsconfig.json`);
const tsLintProgram = TSlint.Linter.createProgram(`${absoluteSourceDirectory}/tsconfig.json`);

const coverableFiles = [`${absoluteBuildDirectory}/**/*.js`, `!${absoluteBuildDirectory}/**/*.spec.*`];
const testFiles = `${absoluteBuildDirectory}/**/*.spec.js`;
const debugTestFiles = `${absoluteSourceDirectory}/**/*.spec.ts`;

const distributeBuildFiles = [
    `${absoluteBuildDirectory}/**/*.*`,
    `!${absoluteBuildDirectory}/**/*.spec.*`

];
const distributeDefaultFiles = [
    `${absoluteDefaultDirectory}/**/*.*`

];
const distributeEssentialFiles = [
    './package.json',
    './tsconfig.json',
    './tslint.json',
    './LICENSE',
    './README.md'

];
const distributeBuildDirectory = absoluteDistributeDirectory;
const distributeDefaultDirectory = path.join(absoluteDistributeDirectory, relativeDefaultDirectory);
const distributeEssentialDirectory = absoluteDistributeDirectory;
const distributePackageJsonPath = path.join(absoluteDistributeDirectory, packageJsonPath);

async function runAlsatian(output: TestOutput) {
    const testRunner = new TestRunner();

    switch (output) {
        case TestOutput.Result:
            testRunner.outputStream.pipe(TapBark.create().getPipeable()).pipe(process.stdout);
            break;

        case TestOutput.Coverage:
            await streamToPromise(
                GulpClient
                    .src(coverableFiles)
                    .pipe(GulpIstanbul({ includeUntested: true }))
                    .pipe(GulpIstanbul.hookRequire())
            );
            testRunner.outputStream.pipe(GulpIstanbul.writeReports({ dir: relativeCoverageDirectory }));
            break;

        default:
    }

    const testSet = TestSet.create();

    testSet.addTestsFromFiles(testFiles);

    return testRunner.run(testSet);
}

function typescriptBuild() {
    return merge(
        tsProject
            .src()
            .pipe(tsProject())
            .pipe(GulpClient.dest(absoluteBuildDirectory)),
        GulpClient.src(declarationFiles).pipe(GulpClient.dest(absoluteBuildDirectory))
    );
}

function typescriptLint() {
    return tsProject
        .src()
        .pipe(
            tslintPlugin({
                fix: true,
                formatter: 'stylish',
                program: tsLintProgram
            })
        )
        .pipe(tslintPlugin.report());
}

async function typescriptTestOutputNone() {
    return runAlsatian(TestOutput.None);
}

async function typescriptTestOutputResult() {
    return runAlsatian(TestOutput.Result);
}

async function typescriptTestOutputCoverage() {
    return runAlsatian(TestOutput.Coverage);
}

async function typescriptTestDebug() {
    const testRunner = new TestRunner();

    testRunner.outputStream.pipe(TapBark.create().getPipeable()).pipe(process.stdout);

    const testSet = TestSet.create();

    testSet.addTestsFromFiles(debugTestFiles);

    return testRunner.run(testSet);
}

function copyFilesToDistributeDirectory() {
    return merge(
        GulpClient.src(distributeBuildFiles).pipe(GulpClient.dest(distributeBuildDirectory)),
        GulpClient.src(distributeDefaultFiles).pipe(GulpClient.dest(distributeDefaultDirectory)),
        GulpClient.src(distributeEssentialFiles).pipe(GulpClient.dest(distributeEssentialDirectory))
    );
}

async function packageJsonModifyProperties() {
    const packageJsonString = fs.readFileSync(distributePackageJsonPath, 'utf8');
    const packageJsonData = JSON.parse(packageJsonString);

    packageJsonData.scripts.postinstall = 'gulp install';

    const modifiedPackageJsonString = JSON.stringify(packageJsonData, undefined, 4);

    fs.writeFileSync(packageJsonPath, modifiedPackageJsonString);
}

async function cleanBuildDirectory() {
    return del(absoluteBuildDirectory);
}

async function cleanDistributeDirectory() {
    return del(absoluteDistributeDirectory);
}

async function copyDefaultFiles() {
    const baseDirectory = __filename.includes('node_modules')
        ? path.join(RootPath.path, '/node_modules/@colonise/config')
        : RootPath.path;

    const defaultFolderPath = path.join(baseDirectory, relativeDefaultDirectory);

    if (!fs.existsSync(defaultFolderPath)) {
        throw new Error(`Could not find default configuration path '${defaultFolderPath}'.`);
    }

    const defaultFilesGlob = path.join(defaultFolderPath, '/**/*.*');

    const defaultFilePaths = await new Promise<string[]>((resolve, reject) => {
        glob(defaultFilesGlob, (error, matches) => {
            if (error) {
                reject(error);
            } else {
                resolve(matches.map(filePath => path.resolve(filePath)));
            }
        });
    });

    for (const defaultFilePath of defaultFilePaths) {
        const relativeFilePath = defaultFilePath.replace(defaultFolderPath, '');
        const absoluteFilePath = path.join(RootPath.path, relativeFilePath);

        if (!fs.existsSync(absoluteFilePath)) {
            fs.copyFileSync(defaultFilePath, absoluteFilePath);
            // tslint:disable-next-line: no-console
            console.log(`Successfully copied file '${relativeFilePath}'.`);
        } else {
            // tslint:disable-next-line: no-console
            console.warn(`Failed to copy file '${relativeFilePath}', because it already exists. A manual update may be required.`);
        }
    }
}

async function copyModifiedFiles() {
    fs.copyFileSync(distributePackageJsonPath, packageJsonPath);
}

export const install = copyDefaultFiles;

export const clean = GulpClient.parallel(cleanBuildDirectory, cleanDistributeDirectory);

export const build = GulpClient.series(clean, typescriptBuild);

export const distribute = GulpClient.series(build, copyFilesToDistributeDirectory, packageJsonModifyProperties);

export const publish = copyModifiedFiles;

export const lint = typescriptLint;

export const test = GulpClient.series(build, typescriptTestOutputResult);

export const coverage = GulpClient.series(build, typescriptTestOutputCoverage);

export const debug = typescriptTestDebug;

export const all = GulpClient.series(
    GulpClient.parallel(
        lint,
        clean
    ),
    typescriptBuild,
    typescriptTestOutputNone,
    copyFilesToDistributeDirectory
);

export default all;
