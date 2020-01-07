import RootPath from 'app-root-path';
import * as fs from 'fs';
import * as path from 'path';
import { getFilePaths, log, warn, wasCalledFromCLI } from './helpers';
import { absoluteCurrentDirectory, relativeDefaultDirectory, renamedPrefix } from './variables';

function unrenameDistributeDefaultFiles() {
    const currentDefaultDirectory = path.join(absoluteCurrentDirectory, relativeDefaultDirectory);

    if (!fs.existsSync(currentDefaultDirectory)) {
        throw new Error(`Could not find default configuration path '${currentDefaultDirectory}'.`);
    }

    const currentDefaultFilesGlob = path.join(currentDefaultDirectory, '/**/*');

    const defaultFilePaths = getFilePaths(currentDefaultFilesGlob);

    for (const defaultFilePath of defaultFilePaths) {
        const parsedPath = path.parse(defaultFilePath);
        const unrenamedFileName = parsedPath.base.replace(renamedPrefix, '');
        const unrenamedFilePath = path.join(parsedPath.dir, unrenamedFileName);

        log(`Unrenaming file '${defaultFilePath}'.`);

        fs.renameSync(defaultFilePath, unrenamedFilePath);
    }
}

function copyDefaultFilesToRoot() {
    const currentDefaultDirectory = path.join(absoluteCurrentDirectory, relativeDefaultDirectory);

    if (!fs.existsSync(currentDefaultDirectory)) {
        throw new Error(`Could not find default configuration path '${currentDefaultDirectory}'.`);
    }

    const currentDefaultFilesGlob = path.join(currentDefaultDirectory, '/**/*');

    const absoluteDefaultFilePaths = getFilePaths(currentDefaultFilesGlob);

    for (const absoluteDefaultFilePath of absoluteDefaultFilePaths) {
        const relativeFilePath = absoluteDefaultFilePath.replace(currentDefaultDirectory, '');

        const absoluteFilePath = path.join(RootPath.path, relativeFilePath);

        if (!fs.existsSync(absoluteFilePath)) {
            const directoryPath = path.dirname(absoluteFilePath);

            fs.mkdirSync(directoryPath, { recursive: true });

            log(`Copying file '${relativeFilePath}' to '${absoluteFilePath}'.`);

            fs.copyFileSync(absoluteDefaultFilePath, absoluteFilePath);
        }
        else {
            warn(
                `Failed to copy file '${relativeFilePath}' because it already exists. A manual update may be required.`
            );
        }
    }
}

export function install() {
    unrenameDistributeDefaultFiles();
    copyDefaultFilesToRoot();
}

if (wasCalledFromCLI(module)) {
    install();
}
