import * as fs from 'fs';
import * as path from 'path';
import { cleanBuildDirectory } from './clean';
import {
    absoluteRootDirectory,
    absoluteRootGeneratedTsconfigJsonPath,
    absoluteRootTSConfigJsonPath,
    absoluteSourceDeclarationFilesGlob,
    absoluteSourceDirectory,
    absoluteSourceTestFilesGlob,
    absoluteSourceTypeScriptFilesGlob
} from './variables';
import {
    copyFiles,
    executeCommand,
    getFilePaths,
    log,
    wasCalledFromCLI
} from './helpers';

function generateTsconfig(includeTestFiles = false): void {
    interface TSConfig {
        files?: string[];
    }

    const tsconfigString = fs.readFileSync(absoluteRootTSConfigJsonPath, 'utf8');
    const tsconfigData = <TSConfig>JSON.parse(tsconfigString);

    const filesGlob = includeTestFiles
        ? [
            absoluteSourceTypeScriptFilesGlob
        ]
        : [
            absoluteSourceTypeScriptFilesGlob,
            `!${absoluteSourceTestFilesGlob}`
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

    copyFiles(absoluteSourceDeclarationFilesGlob, absoluteSourceDirectory, outputDirectoryPath);
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
