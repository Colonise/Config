import * as fs from 'fs';
import { absoluteRootColoniseJsonPath } from './variables';
import {
    copyDefaultFilesToRoot,
    error,
    log,
    readJSON,
    wasCalledFromCLI,
    writeJSON
} from './helpers';

interface ColoniseJSON {
    version: number;
}

type Migration = () => boolean;

const latestVersion = 1;

const migrations: { [key: number]: Migration; } = {
    1: () => {
        copyDefaultFilesToRoot();

        return true;
    }
};

export function migrate(fromVersion: number, toVersion: number): void {
    log(`Migrating from ${fromVersion} to ${toVersion}.`);

    let previousVersion = fromVersion;

    for (let currentVersion = fromVersion + 1; currentVersion <= toVersion; currentVersion++) {
        if (!(currentVersion in migrations)) {
            error(`Migration ${currentVersion} doesn't exist.`);

            return;
        }

        try {
            const result = migrations[currentVersion]();

            if (result) {
                log(`Successfully migrated from ${previousVersion} to ${currentVersion}.`);

                previousVersion = currentVersion;
            }
            else {
                throw new Error();
            }
        }
        catch (_error: unknown) {
            error(`Failed to migrate from ${previousVersion} to ${currentVersion}. Exiting.`);

            return;
        }
    }

    const coloniseJson: ColoniseJSON = {
        version: toVersion
    };

    writeJSON(absoluteRootColoniseJsonPath, coloniseJson);
}

export function migrateToLatestVersion(): void {
    let coloniseJson: ColoniseJSON;

    try {
        if (fs.existsSync(absoluteRootColoniseJsonPath)) {
            coloniseJson = readJSON(absoluteRootColoniseJsonPath);
        }
        else {
            log('Detected new installation. If this was a mistake, manually run \'colonise-config migrate\'.');

            copyDefaultFilesToRoot();

            coloniseJson = {
                version: latestVersion
            };

            writeJSON(absoluteRootColoniseJsonPath, coloniseJson);

            return;
        }
    }
    catch (_error: unknown) {
        error('Failed to start migrations.');

        return;
    }

    if (coloniseJson.version === latestVersion) {
        log('No need to migrate, already on latest version.');
    }
    else {
        migrate(coloniseJson.version, latestVersion);
    }
}

if (wasCalledFromCLI(module)) {
    migrateToLatestVersion();
}
