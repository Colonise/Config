import * as fs from 'fs';
import * as path from 'path';
import {
    absoluteGeneratedDeclarationFilesGlob,
    absoluteGeneratedDirectory,
    absoluteGeneratedTestFilesGlob,
    absoluteGeneratedTSConfigJsonPath,
    absoluteGeneratedTypeScriptFilesGlob,
    absoluteRootDirectory,
    absoluteSourceDirectory,
    absoluteSourceTestFilesGlob,
    absoluteSourceTSConfigJsonPath,
    absoluteSourceTypeScriptFilesGlob
} from './variables';
import {
    cleanBuildDirectory,
    cleanGeneratedDirectory
} from './clean';
import {
    copyFiles,
    executeCommand,
    getFilePaths,
    log,
    wasCalledFromCLI
} from './helpers';

function generateCode(includeTestFiles = false): void {
    interface TSConfig {
        files?: string[];
        include?: string[];
    }

    cleanGeneratedDirectory();

    const baseSourceFilesGlob = [
        absoluteSourceTypeScriptFilesGlob
    ];

    const sourceFilesGlobs = includeTestFiles
        ? [
            ...baseSourceFilesGlob
        ]
        : [
            ...baseSourceFilesGlob,
            `!${absoluteSourceTestFilesGlob}`
        ];

    copyFiles(sourceFilesGlobs, absoluteSourceDirectory, absoluteGeneratedDirectory);

    const declarationFilePaths = getFilePaths(absoluteGeneratedDeclarationFilesGlob);

    for (const declarationFilePath of declarationFilePaths) {
        const renamedFilePath = declarationFilePath.replace(/\.d\.ts$/u, '.ts');

        fs.renameSync(declarationFilePath, renamedFilePath);
    }

    const tsconfigString = fs.readFileSync(absoluteSourceTSConfigJsonPath, 'utf8');
    const tsconfigData = <TSConfig>JSON.parse(tsconfigString);

    const baseGeneratedFilesGlob = [
        absoluteGeneratedTypeScriptFilesGlob
    ];

    const generatedFilesGlobs = includeTestFiles
        ? [
            ...baseGeneratedFilesGlob
        ]
        : [
            ...baseGeneratedFilesGlob,
            `!${absoluteGeneratedTestFilesGlob}`
        ];

    const generatedFilePaths = getFilePaths(generatedFilesGlobs);

    if (Array.isArray(tsconfigData.files)) {
        tsconfigData.files = tsconfigData.files.map(file => path.join(absoluteRootDirectory, file));
    }
    else {
        tsconfigData.files = [];
    }

    tsconfigData.files = tsconfigData.files.concat(generatedFilePaths);
    tsconfigData.include = undefined;

    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    const modifiedTsconfigData = JSON.stringify(tsconfigData, undefined, 4);

    fs.writeFileSync(absoluteGeneratedTSConfigJsonPath, modifiedTsconfigData);
}

function buildTypeScript(outputDirectoryPath: string, includeTestFiles = false): void {
    log(`Generating TSConfig file to '${absoluteGeneratedTSConfigJsonPath}'.`);

    generateCode(includeTestFiles);

    log(`Building TypeScript files to '${outputDirectoryPath}' directory.`);

    executeCommand('tsc', [
        '--project',
        absoluteGeneratedTSConfigJsonPath,
        '--outDir',
        outputDirectoryPath
    ]);
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
