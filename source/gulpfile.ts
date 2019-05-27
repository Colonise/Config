import { TestRunner, TestSet } from 'alsatian';
import del from 'del';
import * as fs from 'fs';
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

const tsProject = gulpTypescript.createProject('./source/tsconfig.json');
const tsLintProgram = TSlint.Linter.createProgram('./source/tsconfig.json');

const declarationFiles = './source/**/*.d.ts';
const buildDirectiory = './build/';

const coverableFiles = ['./build/**/*.js', '!./build/**/*.spec.*'];
const testFiles = './build/**/*.spec.js';
const debugTestFiles = './source/**/*.spec.ts';

const distributeBuildFiles = [
    './build/**/*.*',
    '!./build/**/*.spec.*'

];
const distributeDefaultFiles = [
    './default/**/*.*'

];
const distributeEssentialFiles = [
    './package.json',
    './tsconfig.json',
    './tslint.json',
    './LICENSE',
    './README.md'

];
const distributeDirectory = './distribute/';
const distributeBuildDirectory = distributeDirectory;
const distributeDefaultDirectory = path.join(distributeDirectory, '/default');
const distributeEssentialDirectory = distributeDirectory;

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
            testRunner.outputStream.pipe(GulpIstanbul.writeReports({ dir: './coverage' }));
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
            .pipe(GulpClient.dest(buildDirectiory)),
        GulpClient.src(declarationFiles).pipe(GulpClient.dest(buildDirectiory))
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

function packageJsonModifyProperties() {
    const packageJsonPath = path.join(distributeDirectory, '/package.json');
    const packageJsonString = fs.readFileSync(packageJsonPath, 'utf8');
    const packageJsonData = JSON.parse(packageJsonString);

    packageJsonData.scripts.postinstall = 'node install.js';

    const modifiedPackageJsonString = JSON.stringify(packageJsonData);

    fs.writeFileSync(packageJsonPath, modifiedPackageJsonString);
}

async function cleanBuildDirectory() {
    return del(distributeDirectory);
}

async function cleanDistributeDirectory() {
    return del(distributeDirectory);
}

export const clean = GulpClient.parallel(cleanBuildDirectory, cleanDistributeDirectory);

export const build = GulpClient.series(clean, typescriptBuild);

export const distribute = GulpClient.series(build, copyFilesToDistributeDirectory, packageJsonModifyProperties);

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
