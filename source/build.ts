import * as fs from 'fs';
import { cleanBuildDirectory } from './clean';
import { copyFiles, executeCommand, getFilePaths, log, wasCalledFromCLI } from './helpers';
import {
    absoluteRootGeneratedTsconfigJsonPath,
    absoluteRootSourceDeclarationFilesGlob,
    absoluteRootSourceDirectory,
    absoluteRootSourceTestFilesGlob,
    absoluteRootSourceTypescriptFilesGlob,
    absoluteRootTsconfigJsonPath
} from './variables';

function generateTsconfig(includeTestFiles: boolean = false) {
    const tsconfigString = fs.readFileSync(absoluteRootTsconfigJsonPath, 'utf8');
    const tsconfigData = JSON.parse(tsconfigString);

    const filesGlob = includeTestFiles
        ? [
              absoluteRootSourceTypescriptFilesGlob
          ]
        : [
              absoluteRootSourceTypescriptFilesGlob,
              `!${absoluteRootSourceTestFilesGlob}`
          ];

    const files = getFilePaths(filesGlob);

    tsconfigData.files = files;

    const modifiedTsconfigData = JSON.stringify(tsconfigData, undefined, 4);

    fs.writeFileSync(absoluteRootGeneratedTsconfigJsonPath, modifiedTsconfigData);
}

function buildTypeScript(outputDirectoryPath: string, includeTestFiles: boolean = false): void {
    log(`Generating TSConfig file to '${absoluteRootGeneratedTsconfigJsonPath}'.`);

    generateTsconfig(includeTestFiles);

    log(`Building TypeScript files to '${outputDirectoryPath}' directory.`);

    executeCommand('tsc', [
        '--project',
        absoluteRootGeneratedTsconfigJsonPath,
        '--outDir',
        outputDirectoryPath
    ]);

    copyFiles(absoluteRootSourceDeclarationFilesGlob, absoluteRootSourceDirectory, outputDirectoryPath);
}

export function buildTypeScriptBuild(): void {
    buildTypeScript('./build', true);
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
