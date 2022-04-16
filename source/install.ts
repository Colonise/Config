import * as fs from 'fs';
import * as path from 'path';
import { migrateToLatestVersion } from './migrate';
import {
    absoluteCurrentDefaultDirectory,
    absoluteCurrentDefaultFilesGlob,
    renamedPrefix
} from './variables';
import {
    getFilePaths,
    log,
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

        if (defaultFilePath !== unrenamedFilePath && fs.existsSync(defaultFilePath)) {
            log(`Unrenaming file '${defaultFilePath}'.`);

            fs.renameSync(defaultFilePath, unrenamedFilePath);
        }
    }
}

export function install(): void {
    unrenameDistributeDefaultFiles();
    migrateToLatestVersion();
}

if (wasCalledFromCLI(module)) {
    install();
}
