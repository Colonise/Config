import * as fs from 'fs';
import * as path from 'path';
import { buildTypeScriptDistribute } from './build';
import {
    absoluteDefaultDirectory,
    absoluteDefaultFilesGlob,
    absoluteDefaultForceOverwriteFilePaths,
    absoluteDistributeDefaultDirectory,
    absoluteDistributeDefaultFilesGlob,
    absoluteDistributeEssentialDirectory,
    absoluteDistributePackageJsonPath,
    absoluteRootDirectory,
    absoluteRootEssentialColoniseConfigFilePaths,
    absoluteRootEssentialFilePaths,
    absoluteRootForceOverwriteDefaultFilePaths,
    renamedPrefix
} from './variables';
import {
    copyFiles,
    getFilePaths,
    isColoniseConfig,
    log,
    wasCalledFromCLI
} from './helpers';

function copyOverwritableFilesToDefaultDirectory(): void {
    if (isColoniseConfig()) {
        copyFiles(absoluteRootForceOverwriteDefaultFilePaths, absoluteRootDirectory, absoluteDefaultDirectory);
    }
}

function copyFilesToDistributeDirectory(): void {
    if (isColoniseConfig()) {
        copyFiles(absoluteDefaultFilesGlob, absoluteDefaultDirectory, absoluteDistributeDefaultDirectory);
        copyFiles(absoluteDefaultForceOverwriteFilePaths, absoluteDefaultDirectory, absoluteDistributeDefaultDirectory);
        copyFiles(absoluteRootEssentialColoniseConfigFilePaths, absoluteRootDirectory, absoluteDistributeEssentialDirectory);
    }

    copyFiles(absoluteRootEssentialFilePaths, absoluteRootDirectory, absoluteDistributeEssentialDirectory);
}

/**
 * Rename all default files because NPM ignores some files by default and cannot be overrided.
 */
function renameDistributeDefaultFiles(): void {
    const distributeDefaultFilePaths = getFilePaths(absoluteDistributeDefaultFilesGlob);

    for (const defaultFilePath of distributeDefaultFilePaths) {
        const parsedPath = path.parse(defaultFilePath);
        const renamedFileName = renamedPrefix + parsedPath.base;
        const renamedFilePath = path.join(parsedPath.dir, renamedFileName);

        log(`Renaming file '${defaultFilePath}'.`);

        fs.renameSync(defaultFilePath, renamedFilePath);
    }
}

function packageJsonAddInstallScriptToDistribute(): void {
    interface PackageJson {
        scripts?: { [key: string]: string; };
    }

    // Only add install script to Config package
    if (isColoniseConfig()) {
        const packageJsonString = fs.readFileSync(absoluteDistributePackageJsonPath, 'utf8');
        const packageJsonData = <PackageJson>JSON.parse(packageJsonString);

        packageJsonData.scripts = packageJsonData.scripts ?? {};
        packageJsonData.scripts.postinstall = 'colonise-config install';

        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        const modifiedPackageJsonString = JSON.stringify(packageJsonData, undefined, 4);

        fs.writeFileSync(absoluteDistributePackageJsonPath, modifiedPackageJsonString);
    }
}

export function distributeFiles(): void {
    copyOverwritableFilesToDefaultDirectory();
    copyFilesToDistributeDirectory();
    renameDistributeDefaultFiles();
    packageJsonAddInstallScriptToDistribute();
}

export function distribute(): void {
    buildTypeScriptDistribute();
    distributeFiles();
}

if (wasCalledFromCLI(module)) {
    distribute();
}
