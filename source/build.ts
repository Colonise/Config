import * as fs from 'fs';
import * as path from 'path';
import { cleanBuildDirectory } from './clean';
import {
    absoluteRootDirectory,
    absoluteRootGeneratedTsconfigJsonPath,
    absoluteRootSourceDeclarationFilesGlob,
    absoluteRootSourceDirectory,
    absoluteRootSourceTestFilesGlob,
    absoluteRootSourceTypeScriptFilesGlob,
    absoluteRootTsconfigJsonPath
} from './variables';
import {
    copyFiles,
    executeCommand,
    getFilePaths,
    log,
    wasCalledFromCLI
} from './helpers';

interface TSConfig {
    files?: string[];
}

function generateTsconfig(includeTestFiles = false): void {
    const tsconfigString = fs.readFileSync(absoluteRootTsconfigJsonPath, 'utf8');
    const tsconfigData = <TSConfig>JSON.parse(tsconfigString);

    const filesGlob = includeTestFiles
        ? [
            absoluteRootSourceTypeScriptFilesGlob
        ]
        : [
            absoluteRootSourceTypeScriptFilesGlob,
            `!${absoluteRootSourceTestFilesGlob}`
        ];

    const files = getFilePaths(filesGlob);

    if (Array.isArray(tsconfigData.files)) {
        tsconfigData.files = tsconfigData.files.map(file => path.join(absoluteRootDirectory, file));
    }
    else {
        tsconfigData.files = [];
    }

    tsconfigData.files = tsconfigData.files.concat(files);

    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    const modifiedTsconfigData = JSON.stringify(tsconfigData, undefined, 4);

    fs.writeFileSync(absoluteRootGeneratedTsconfigJsonPath, modifiedTsconfigData);
}

function buildTypeScript(outputDirectoryPath: string, includeTestFiles = false): void {
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
