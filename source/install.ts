import * as fs from 'fs';
import * as path from 'path';
import { default as rootPath } from 'app-root-path';
import {
    absoluteCurrentDefaultDirectory,
    absoluteCurrentDefaultFilesGlob,
    absoluteRootForceOverwriteFilePaths,
    renamedPrefix
} from './variables';
import {
    getFilePaths,
    log,
    warn,
    wasCalledFromCLI
} from './helpers';

function unrenameDistributeDefaultFiles(): void {
    if (!fs.existsSync(absoluteCurrentDefaultDirectory)) {
        throw new Error(`Could not find default configuration path '${absoluteCurrentDefaultDirectory}'.`);
    }

    const defaultFilePaths = getFilePaths(absoluteCurrentDefaultFilesGlob);

    for (const defaultFilePath of defaultFilePaths) {
        const parsedPath = path.parse(defaultFilePath);
        const unrenamedFileName = parsedPath.base.replace(renamedPrefix, '');
        const unrenamedFilePath = path.join(parsedPath.dir, unrenamedFileName);

        log(`Unrenaming file '${defaultFilePath}'.`);

        fs.renameSync(defaultFilePath, unrenamedFilePath);
    }
}

function copyDefaultFilesToRoot(): void {
    if (!fs.existsSync(absoluteCurrentDefaultDirectory)) {
        throw new Error(`Could not find default configuration path '${absoluteCurrentDefaultDirectory}'.`);
    }

    const absoluteDefaultFilePaths = getFilePaths(absoluteCurrentDefaultFilesGlob);

    for (const absoluteDefaultFilePath of absoluteDefaultFilePaths) {
        const relativeFilePath = absoluteDefaultFilePath.replace(absoluteCurrentDefaultDirectory, '');

        const absoluteFilePath = path.join(rootPath.path, relativeFilePath);

        if (fs.existsSync(absoluteFilePath)) {
            if (absoluteRootForceOverwriteFilePaths.includes(absoluteFilePath)) {
                log(`Copying and overwriting file '${relativeFilePath}' to '${absoluteFilePath}'.`);

                fs.copyFileSync(absoluteDefaultFilePath, absoluteFilePath);
            }
            else {
                warn(`Failed to copy file '${relativeFilePath}' because it already exists. A manual update may be required.`);
            }
        }
        else {
            const directoryPath = path.dirname(absoluteFilePath);

            fs.mkdirSync(directoryPath, { recursive: true });

            log(`Copying file '${relativeFilePath}' to '${absoluteFilePath}'.`);

            fs.copyFileSync(absoluteDefaultFilePath, absoluteFilePath, fs.constants.COPYFILE_EXCL);
        }
    }
}

export function install(): void {
    unrenameDistributeDefaultFiles();
    copyDefaultFilesToRoot();
}

if (wasCalledFromCLI(module)) {
    install();
}
