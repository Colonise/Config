import * as fs from 'node:fs';
import * as path from 'node:path';
import {
    absoluteGeneratedDeclarationFilesGlob,
    absoluteGeneratedDirectory,
    absoluteGeneratedTestFilesGlob,
    absoluteGeneratedTSConfigJsonPath,
    absoluteGeneratedTypeScriptFilesGlob,
    absoluteRootDirectory,
    absoluteSourceDirectory,
    absoluteSourceTestFilesGlob,
    absoluteSourceTSConfigGeneratedJsonPath,
    absoluteSourceTSConfigJsonPath,
    absoluteSourceTypeScriptFilesGlob
} from './variables.js';
import {
    cleanBuildDirectory,
    cleanDistributeDirectory,
    cleanGeneratedDirectory
} from './clean.js';
import {
    copyFiles,
    executeCommand,
    getFilePaths,
    log,
    warn,
    wasCalledFromCLI
} from './helpers.js';

interface TSConfig {
    files?: string[];
    include?: string[];
}

function getSourceTypeScriptFileGlobs(includeTestFiles: boolean = false): string[] {
    const sourceFilesGlobs = includeTestFiles
        ? [
            absoluteSourceTypeScriptFilesGlob
        ]
        : [
            absoluteSourceTypeScriptFilesGlob,
            `!${absoluteSourceTestFilesGlob}`
        ];

    return sourceFilesGlobs;
}

function getGeneratedTypeScriptFileGlobs(includeTestFiles: boolean = false): string[] {
    const generatedFilesGlobs = includeTestFiles
        ? [
            absoluteGeneratedTypeScriptFilesGlob
        ]
        : [
            absoluteGeneratedTypeScriptFilesGlob,
            `!${absoluteGeneratedTestFilesGlob}`
        ];

    return generatedFilesGlobs;
}

function generateTSConfigFile(typeScriptfilePaths: string[], outputFilePath: string): void {
    log('Generating TSConfig file.');

    const tsconfigString = fs.readFileSync(absoluteSourceTSConfigJsonPath, 'utf8');
    const tsconfigData = <TSConfig>JSON.parse(tsconfigString);

    if (Array.isArray(tsconfigData.files)) {
        tsconfigData.files = tsconfigData.files.map(file => path.join(absoluteRootDirectory, file));
    }
    else {
        tsconfigData.files = [];
    }

    tsconfigData.files = tsconfigData.files.concat(typeScriptfilePaths);
    tsconfigData.include = undefined;

    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    const modifiedTsconfigData = JSON.stringify(tsconfigData, undefined, 4);

    fs.writeFileSync(outputFilePath, modifiedTsconfigData);
}

function defaultStrategy(sourceFilesGlobs: string[], outputDirectoryPath: string): void {
    log('Running Default Strategy.');

    // Remove the Generated folder if we have converted to the default strategy
    if (fs.existsSync(absoluteGeneratedDirectory)) {
        cleanGeneratedDirectory();
    }

    const typeScriptfilePaths = getFilePaths(sourceFilesGlobs);

    generateTSConfigFile(typeScriptfilePaths, absoluteSourceTSConfigGeneratedJsonPath);

    log(`Building TypeScript files to '${outputDirectoryPath}' directory.`);

    executeCommand('tsc', [
        '--project',
        absoluteSourceTSConfigGeneratedJsonPath,
        '--outDir',
        outputDirectoryPath
    ]);
}

function renameStrategy(sourceFilesGlobs: string[], outputDirectoryPath: string, includeTestFiles: boolean = false): void {
    log('Running Rename Strategy.');
    warn('The Rename Strategy outputs incorrect file path references for build errors.');

    cleanGeneratedDirectory();

    log('Copying files to generated folder.');

    copyFiles(sourceFilesGlobs, absoluteSourceDirectory, absoluteGeneratedDirectory);

    const declarationFilePaths = getFilePaths(absoluteGeneratedDeclarationFilesGlob);

    log('Renaming declaration files.');

    for (const declarationFilePath of declarationFilePaths) {
        const renamedFilePath = declarationFilePath.replace(/\.d\.ts$/u, '.ts');

        fs.renameSync(declarationFilePath, renamedFilePath);
    }

    const generatedFilesGlobs = getGeneratedTypeScriptFileGlobs(includeTestFiles);

    const generatedTypeScriptFilePaths = getFilePaths(generatedFilesGlobs);

    generateTSConfigFile(generatedTypeScriptFilePaths, absoluteGeneratedTSConfigJsonPath);

    log(`Building TypeScript files to '${outputDirectoryPath}' directory.`);

    executeCommand('tsc', [
        '--project',
        absoluteGeneratedTSConfigJsonPath,
        '--outDir',
        outputDirectoryPath
    ]);
}

function buildTypeScript(outputDirectoryPath: string, includeTestFiles: boolean = false): void {
    log('Building TypeScript files.');

    const sourceFilesGlobs = getSourceTypeScriptFileGlobs(includeTestFiles);

    const declarationFiles = getFilePaths(sourceFilesGlobs).filter(filePath => filePath.endsWith('.d.ts'));

    if (declarationFiles.length > 0) {
        warn('TypeScript declaration files detected. Switching to renaming strategy.');

        for (const declarationFile of declarationFiles) {
            warn(`Declaration file: ${declarationFile}`);
        }

        renameStrategy(sourceFilesGlobs, outputDirectoryPath, includeTestFiles);
    }
    else {
        defaultStrategy(sourceFilesGlobs, outputDirectoryPath);
    }
}

export function buildTypeScriptBuild(): void {
    cleanBuildDirectory();
    buildTypeScript('./build', true);
}

export function buildTypeScriptDistribute(): void {
    cleanDistributeDirectory();
    buildTypeScript('./distribute');
}

export function build(): void {
    buildTypeScriptBuild();
}

if (wasCalledFromCLI(import.meta.url)) {
    build();
}
