import * as fs from 'fs';
import * as path from 'path';
import { buildTypeScriptDistribute } from './build';
import { cleanDistributeDirectory } from './clean';
import { copyFiles, getFilePaths, log, wasCalledFromCLI } from './helpers';
import {
    absoluteRootDefaultDirectory,
    absoluteRootDefaultFilesGlob,
    absoluteRootDirectory,
    absoluteRootDistributeDefaultDirectory,
    absoluteRootDistributeDefaultFilesGlob,
    absoluteRootDistributeEssentialDirectory,
    absoluteRootDistributePackageJsonPath,
    absoluteRootEssentialFilesGlobs,
    renamedPrefix
} from './variables';

function copyFilesToDistributeDirectory() {
    copyFiles(absoluteRootDefaultFilesGlob, absoluteRootDefaultDirectory, absoluteRootDistributeDefaultDirectory);
    copyFiles(absoluteRootEssentialFilesGlobs, absoluteRootDirectory, absoluteRootDistributeEssentialDirectory);
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
    cleanDistributeDirectory();
    buildTypeScriptDistribute();
    distributeFiles();
}

if (wasCalledFromCLI(module)) {
    distribute();
}
