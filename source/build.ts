import * as fs from 'fs';
import { cleanBuildDirectory } from './clean';
import { executeCommand, getFilePaths, log, wasCalledFromCLI } from './helpers';
import {
    absoluteRootGeneratedTsconfigJsonPath,
    absoluteRootSourceTypescriptFilesGlob,
    absoluteRootTsconfigJsonPath
} from './variables';

function generateTsconfig() {
    const tsconfigString = fs.readFileSync(absoluteRootTsconfigJsonPath, 'utf8');
    const tsconfigData = JSON.parse(tsconfigString);

    const files = getFilePaths(absoluteRootSourceTypescriptFilesGlob);

    tsconfigData.files = files;

    const modifiedTsconfigData = JSON.stringify(tsconfigData, undefined, 4);

    fs.writeFileSync(absoluteRootGeneratedTsconfigJsonPath, modifiedTsconfigData);
}

function buildTypeScript(outputDirectoryPath: string): void {
    log(`Generating TSConfig file to '${absoluteRootGeneratedTsconfigJsonPath}'.`);

    generateTsconfig();

    log(`Building TypeScript files to '${outputDirectoryPath}' directory.`);

    executeCommand('tsc', [
        '--project',
        absoluteRootGeneratedTsconfigJsonPath,
        '--outDir',
        outputDirectoryPath
    ]);
}

export function buildTypeScriptBuild(): void {
    buildTypeScript('./build');
}

export function buildTypeScriptDistribute(): void {
    buildTypeScript('./distribute');
}

export function build(): void {
    cleanBuildDirectory();
    buildTypeScriptBuild();
}

if (wasCalledFromCLI(module)) {
    build();
}
