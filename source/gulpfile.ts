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

const relativePackageJsonPath = './package.json';
const relativeTsconfigJsonPath = './tsconfig.json';
const relativeTslintJsonPath = './tslint.json';
const relativeLicensePath = './LICENSE';
const relativeReadmeMarkdownPath = './README.md';

const relativeSourceDirectory = './source';
const relativeBuildDirectory = './build';
const relativeDefaultDirectory = './default';
const relativeCoverageDirectory = './coverage';
const relativeDistributeDirectory = './distribute';

const absoluteCurrentDirectory = __dirname.includes('node_modules')
    ? path.join(RootPath.path, '/node_modules/@colonise/config')
    : RootPath.path;

const absoluteRootSourceDirectory = RootPath.resolve(relativeSourceDirectory);
const absoluteRootBuildDirectory = RootPath.resolve(relativeBuildDirectory);
const absoluteRootDefaultDirectory = RootPath.resolve(relativeDefaultDirectory);
const absoluteRootDistributeDirectory = RootPath.resolve(relativeDistributeDirectory);

const absoluteRootPackageJsonPath = RootPath.resolve(relativePackageJsonPath);
const absoluteRootTsconfigJsonPath = RootPath.resolve(relativeTsconfigJsonPath);
const absoluteRootTslintJsonPath = RootPath.resolve(relativeTslintJsonPath);
const absoluteRootLicensePath = RootPath.resolve(relativeLicensePath);
const absoluteRootReadmeMarkdownPath = RootPath.resolve(relativeReadmeMarkdownPath);

const absoluteRootDeclarationFileGlob = `${absoluteRootSourceDirectory}/**/*.d.ts`;

const absoluteRootCoverableFilesGlobs = [
    `${absoluteRootBuildDirectory}/**/*.js`,
    `!${absoluteRootBuildDirectory}/**/*.spec.*`
];
const absoluteRootTestFilesGlob = `${absoluteRootBuildDirectory}/**/*.spec.js`;
const absoluteRootDebugTestFilesGlob = `${absoluteRootSourceDirectory}/**/*.spec.ts`;

const absoluteRootBuildFilesGlobs = [
    `${absoluteRootBuildDirectory}/**/*`,
    `!${absoluteRootBuildDirectory}/**/*.spec.*`

];
const absoluteRootDefaultFilesGlob = `${absoluteRootDefaultDirectory}/**/*`;
const absoluteRootEssentialFilesGlobs = [
    absoluteRootPackageJsonPath,
    absoluteRootTsconfigJsonPath,
    absoluteRootTslintJsonPath,
    absoluteRootLicensePath,
    absoluteRootReadmeMarkdownPath

];
const absoluteRootDistributeBuildDirectory = absoluteRootDistributeDirectory;
const absoluteRootDistributeDefaultDirectory = path.join(absoluteRootDistributeDirectory, relativeDefaultDirectory);
const absoluteRootDistributeEssentialDirectory = absoluteRootDistributeDirectory;
const absoluteRootDistributePackageJsonPath = path.join(absoluteRootDistributeDirectory, relativePackageJsonPath);

async function getFilePaths(pattern: string): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
        glob(pattern, { dot: true, nodir: true }, (error, matches) => {
            if (error) {
                reject(error);
            } else {
                resolve(matches.map(filePath => path.resolve(filePath)));
            }
        });
    });
}

async function runAlsatian(output: TestOutput) {
    const testRunner = new TestRunner();

    switch (output) {
        case TestOutput.Result:
            testRunner.outputStream.pipe(TapBark.create().getPipeable()).pipe(process.stdout);
            break;

        case TestOutput.Coverage:
            await streamToPromise(
                GulpClient
                    .src(absoluteRootCoverableFilesGlobs)
                    .pipe(GulpIstanbul({ includeUntested: true }))
                    .pipe(GulpIstanbul.hookRequire())
            );
            testRunner.outputStream.pipe(GulpIstanbul.writeReports({ dir: relativeCoverageDirectory }));
            break;

        default:
    }

    const testSet = TestSet.create();

    testSet.addTestsFromFiles(absoluteRootTestFilesGlob);

    return testRunner.run(testSet);
}

function typescriptBuild() {
    const tsProject = gulpTypescript.createProject(`${absoluteRootSourceDirectory}/tsconfig.json`);

    return merge(
        tsProject
            .src()
            .pipe(tsProject())
            .pipe(GulpClient.dest(absoluteRootBuildDirectory)),
        GulpClient.src(absoluteRootDeclarationFileGlob).pipe(GulpClient.dest(absoluteRootBuildDirectory))
    );
}

function typescriptLint() {
    const tsProject = gulpTypescript.createProject(`${absoluteRootSourceDirectory}/tsconfig.json`);
    const tsLintProgram = TSlint.Linter.createProgram(`${absoluteRootSourceDirectory}/tsconfig.json`);

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

    testSet.addTestsFromFiles(absoluteRootDebugTestFilesGlob);

    return testRunner.run(testSet);
}

function copyFilesToDistributeDirectory() {
    return merge(
        GulpClient.src(
            absoluteRootBuildFilesGlobs,
            { dot: true }
        ).pipe(
            GulpClient.dest(absoluteRootDistributeBuildDirectory)
        ),
        GulpClient.src(
            absoluteRootDefaultFilesGlob,
            { dot: true }
        ).pipe(
            GulpClient.dest(absoluteRootDistributeDefaultDirectory)
        ),
        GulpClient.src(
            absoluteRootEssentialFilesGlobs,
            { dot: true }
        ).pipe(
            GulpClient.dest(absoluteRootDistributeEssentialDirectory)
        )
    );
}

async function packageJsonAddInstallScriptToDistribute() {
    const packageJsonString = fs.readFileSync(absoluteRootDistributePackageJsonPath, 'utf8');
    const packageJsonData = JSON.parse(packageJsonString);

    packageJsonData.scripts.postinstall = 'gulp install';

    const modifiedPackageJsonString = JSON.stringify(packageJsonData, undefined, 4);

    fs.writeFileSync(absoluteRootDistributePackageJsonPath, modifiedPackageJsonString);
}

async function cleanBuildDirectory() {
    return del(absoluteRootBuildDirectory);
}

async function cleanDistributeDirectory() {
    return del(absoluteRootDistributeDirectory);
}

async function copyDefaultFilesToRoot() {
    const currentDefaultDirectory = path.join(absoluteCurrentDirectory, relativeDefaultDirectory);

    if (!fs.existsSync(currentDefaultDirectory)) {
        throw new Error(`Could not find default configuration path '${currentDefaultDirectory}'.`);
    }

    const currentDefaultFilesGlob = path.join(currentDefaultDirectory, '/**/*');

    const absoluteDefaultFilePaths = await getFilePaths(currentDefaultFilesGlob);

    for (const absoluteDefaultFilePath of absoluteDefaultFilePaths) {
        const relativeFilePath = absoluteDefaultFilePath.replace(currentDefaultDirectory, '');
        const absoluteFilePath = path.join(RootPath.path, relativeFilePath);

        if (!fs.existsSync(absoluteFilePath)) {
            const directoryPath = path.dirname(absoluteFilePath);

            fs.mkdirSync(directoryPath, { recursive: true });
            fs.copyFileSync(absoluteDefaultFilePath, absoluteFilePath);
            // tslint:disable-next-line: no-console
            console.log(`Successfully copied file '${relativeFilePath}'.`);
        } else {
            // tslint:disable-next-line: no-console
            console.warn(`Failed to copy file '${relativeFilePath}', because it already exists. A manual update may be required.`);
        }
    }
}

async function packageJsonCopyModifiedDistributeToRoot() {
    fs.copyFileSync(absoluteRootDistributePackageJsonPath, absoluteRootPackageJsonPath);
}

export const clean = GulpClient.parallel(cleanBuildDirectory, cleanDistributeDirectory);

export const build = GulpClient.series(clean, typescriptBuild);

export const distribute = GulpClient.series(
    build,
    copyFilesToDistributeDirectory,
    packageJsonAddInstallScriptToDistribute
);

export const lint = typescriptLint;

export const test = GulpClient.series(build, typescriptTestOutputResult);

export const coverage = GulpClient.series(build, typescriptTestOutputCoverage);

export const debug = typescriptTestDebug;

export const publish = packageJsonCopyModifiedDistributeToRoot;

export const install = copyDefaultFilesToRoot;

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
