import * as fs from 'fs';
import * as path from 'path';
import { buildTypeScriptDistribute } from './build';
import { cleanDistributeDirectory } from './clean';
import { getFilePaths, log, wasCalledFromCLI } from './helpers';
import {
    absoluteRootBuildDirectory,
    absoluteRootBuildFilesGlobs,
    absoluteRootDefaultDirectory,
    absoluteRootDefaultFilesGlob,
    absoluteRootDistributeBuildDirectory,
    absoluteRootDistributeDefaultDirectory,
    absoluteRootDistributeDefaultFilesGlob,
    absoluteRootDistributeEssentialDirectory,
    absoluteRootDistributePackageJsonPath,
    absoluteRootDirectory,
    absoluteRootEssentialFilesGlobs,
    renamedPrefix
} from './variables';

function copyFiles(targetPattern: string, originDirectory: string, destinationDirectory: string): void;
function copyFiles(targetPatterns: string[], originDirectory: string, destinationDirectory: string): void;
function copyFiles(
    targetPatternOrTargetPatterns: string | string[],
    originDirectory: string,
    destinationDirectory: string
): void {
    const filePaths = getFilePaths(<string[]>targetPatternOrTargetPatterns);

    for (const filePath of filePaths) {
        const relativeFilePath = path.relative(originDirectory, filePath);
        const destinationFilePath = path.join(destinationDirectory, relativeFilePath);
        const directory = path.dirname(destinationFilePath);

        fs.mkdirSync(directory, { recursive: true });

        log(`Copying file '${filePath}' to '${destinationFilePath}'.`);

        fs.copyFileSync(filePath, destinationFilePath);
    }
}

function copyFilesToDistributeDirectory() {
    copyFiles(absoluteRootBuildFilesGlobs, absoluteRootBuildDirectory, absoluteRootDistributeBuildDirectory);
    copyFiles(absoluteRootDefaultFilesGlob, absoluteRootDefaultDirectory, absoluteRootDistributeDefaultDirectory);
    copyFiles(
        absoluteRootEssentialFilesGlobs,
        absoluteRootDirectory,
        absoluteRootDistributeEssentialDirectory
    );
}

/**
 * Rename all default files because NPM ignores some files by default and cannot be overrided.
 */
function renameDistributeDefaultFiles() {
    const distributeDefaultFilePaths = getFilePaths(absoluteRootDistributeDefaultFilesGlob);

    for (const defaultFilePath of distributeDefaultFilePaths) {
        const parsedPath = path.parse(defaultFilePath);
        const renamedFileName = renamedPrefix + parsedPath.base;
        const renamedFilePath = path.join(parsedPath.dir, renamedFileName);

        log(`Renaming file '${defaultFilePath}'.`);

        fs.renameSync(defaultFilePath, renamedFilePath);
    }
}

function packageJsonAddInstallScriptToDistribute() {
    // Only add install script to Config package
    if (process.env.COLONISE_PACKAGE === 'Config') {
        const packageJsonString = fs.readFileSync(absoluteRootDistributePackageJsonPath, 'utf8');
        const packageJsonData = JSON.parse(packageJsonString);

        packageJsonData.scripts.postinstall = 'colonise-config install';

        const modifiedPackageJsonString = JSON.stringify(packageJsonData, undefined, 4);

        fs.writeFileSync(absoluteRootDistributePackageJsonPath, modifiedPackageJsonString);
    }
}

export function distributeFiles() {
    copyFilesToDistributeDirectory();
    renameDistributeDefaultFiles();
    packageJsonAddInstallScriptToDistribute();
}

export function distribute() {
    buildTypeScriptDistribute();
    cleanDistributeDirectory();
    distributeFiles();
}

if (wasCalledFromCLI(module)) {
    distribute();
}
