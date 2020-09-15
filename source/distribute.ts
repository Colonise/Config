import * as fs from 'fs';
import * as path from 'path';
import { buildTypeScriptDistribute } from './build';
import { cleanDistributeDirectory } from './clean';
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
import {
    copyFiles,
    getFilePaths,
    log,
    wasCalledFromCLI
} from './helpers';

interface PackageJson {
    scripts?: { [key: string]: string; };
}

function copyFilesToDistributeDirectory(): void {
    copyFiles(absoluteRootDefaultFilesGlob, absoluteRootDefaultDirectory, absoluteRootDistributeDefaultDirectory);
    copyFiles(absoluteRootEssentialFilesGlobs, absoluteRootDirectory, absoluteRootDistributeEssentialDirectory);
}

/**
 * Rename all default files because NPM ignores some files by default and cannot be overrided.
 */
function renameDistributeDefaultFiles(): void {
    const distributeDefaultFilePaths = getFilePaths(absoluteRootDistributeDefaultFilesGlob);

    for (const defaultFilePath of distributeDefaultFilePaths) {
        const parsedPath = path.parse(defaultFilePath);
        const renamedFileName = renamedPrefix + parsedPath.base;
        const renamedFilePath = path.join(parsedPath.dir, renamedFileName);

        log(`Renaming file '${defaultFilePath}'.`);

        fs.renameSync(defaultFilePath, renamedFilePath);
    }
}

function packageJsonAddInstallScriptToDistribute(): void {
    // Only add install script to Config package
    if (process.env.COLONISE_PACKAGE_NAME === 'Config') {
        const packageJsonString = fs.readFileSync(absoluteRootDistributePackageJsonPath, 'utf8');
        const packageJsonData = <PackageJson>JSON.parse(packageJsonString);

        packageJsonData.scripts = packageJsonData.scripts ?? {};
        packageJsonData.scripts.postinstall = 'colonise-config install';

        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        const modifiedPackageJsonString = JSON.stringify(packageJsonData, undefined, 4);

        fs.writeFileSync(absoluteRootDistributePackageJsonPath, modifiedPackageJsonString);
    }
}

export function distributeFiles(): void {
    copyFilesToDistributeDirectory();
    renameDistributeDefaultFiles();
    packageJsonAddInstallScriptToDistribute();
}

export function distribute(): void {
    cleanDistributeDirectory();
    buildTypeScriptDistribute();
    distributeFiles();
}

if (wasCalledFromCLI(module)) {
    distribute();
}
