import { TestRunner, TestSet } from 'alsatian';
import del from 'del';
import GulpClient from 'gulp';
import GulpIstanbul from 'gulp-istanbul';
import tslintPlugin from 'gulp-tslint';
import * as typescript from 'gulp-typescript';
import merge from 'merge-stream';
import streamToPromise from 'stream-to-promise';
import { TapBark } from 'tap-bark';
import { Default, Dependencies, Name, Project } from 'tsgulp';
import * as TSlint from 'tslint';

enum TestOutput {
    None,
    Result,
    Coverage
}

const dir = __dirname.indexOf('\\node_modules') === -1 ? __dirname : __dirname.split('\\node_modules')[0];

// tslint:disable-next-line:no-var-requires
const projectName = require(`${dir}/package.json`).name;

@Project(projectName)
// @ts-ignore: Allow unused class
export class GulpFile {
    public readonly tsProject = typescript.createProject('./src/tsconfig.json');
    public readonly tsLintProgram = TSlint.Linter.createProgram('./src/tsconfig.json');

    public readonly declarationFiles = './src/**/*.d.ts';
    public readonly buildDirectiory = './build/';

    public readonly coverableFiles = ['./build/**/*.js', '!./build/**/*.spec.s*'];
    public readonly testFiles = './build/**/*.spec.js';
    public readonly debugTestFiles = './src/**/*.spec.ts';

    public readonly distributeFiles = ['./build/**/*.*', '!./build/**/*.spec.*'];
    public readonly distributeDirectiory = './dist/';

    public async clean() {
        await del(this.buildDirectiory);
        await del(this.distributeDirectiory);
    }

    @Dependencies('clean')
    public build(): unknown {
        return merge(
            this.tsProject
                .src()
                .pipe(this.tsProject())
                .pipe(GulpClient.dest(this.buildDirectiory)),
            GulpClient.src(this.declarationFiles).pipe(GulpClient.dest(this.buildDirectiory))
        );
    }

    @Dependencies('clean', 'build')
    public distribute() {
        return GulpClient.src(this.distributeFiles).pipe(GulpClient.dest(this.distributeDirectiory));
    }

    public lint() {
        return this.tsProject
            .src()
            .pipe(
                tslintPlugin({
                    fix: true,
                    formatter: 'stylish',
                    program: this.tsLintProgram
                })
            )
            .pipe(tslintPlugin.report());
    }

    @Dependencies('build')
    public async test() {
        return this.runAlsatian(TestOutput.Result);
    }

    @Dependencies('build')
    @Name('test-no-output')
    public async testNoOutput() {
        return this.runAlsatian(TestOutput.None);
    }

    @Dependencies('build')
    public async coverage() {
        return this.runAlsatian(TestOutput.Coverage);
    }

    public async debug() {
        const testRunner = new TestRunner();

        testRunner.outputStream.pipe(TapBark.create().getPipeable()).pipe(process.stdout);

        const testSet = TestSet.create();

        testSet.addTestsFromFiles(this.debugTestFiles);

        return testRunner.run(testSet);
    }

    @Default()
    @Dependencies('lint', 'build', 'test-no-output', 'coverage', 'distribute')
    // tslint:disable-next-line:no-empty
    public all() {}

    private async runAlsatian(output: TestOutput) {
        const testRunner = new TestRunner();

        switch (output) {
            case TestOutput.Result:
                testRunner.outputStream.pipe(TapBark.create().getPipeable()).pipe(process.stdout);
                break;

            case TestOutput.Coverage:
                await streamToPromise(
                    GulpClient.src(this.coverableFiles)
                        .pipe(GulpIstanbul({ includeUntested: true }))
                        .pipe(GulpIstanbul.hookRequire())
                );
                testRunner.outputStream.pipe(GulpIstanbul.writeReports({ dir: './coverage' }));
                break;
            default:
        }

        const testSet = TestSet.create();

        testSet.addTestsFromFiles(this.testFiles);

        return testRunner.run(testSet);
    }
}
