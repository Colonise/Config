import * as fs from 'fs';
import {
    absoluteRootColoniseJsonPath, absoluteRootReadmeMarkdownPath
} from './variables';
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

const latestVersion = 2;

const migrations: Migration[] = [
    () => true,
    () => {
        copyDefaultFilesToRoot();

        return true;
    },
    () => {
        if (fs.existsSync(absoluteRootReadmeMarkdownPath)) {
            const rootReadmeMarkdownContents = fs.readFileSync(absoluteRootReadmeMarkdownPath).toString();

            const newRootReadmMarkdowneContents = rootReadmeMarkdownContents
                .replace(/\[build-badge\]: https:\/\/img.shields.io\/github\/workflow\/status\/colonise\/(\w+)\/Node.js%20CI/gu, '[build-badge]: https://img.shields.io/github/actions/workflow/status/colonise/$1/nodejs-master.yml?branch=master')
                .replace(/\[build-url\]: https:\/\/github.com\/Colonise\/(\w+)\/actions\?query=workflow%3A%22Node.js\+CI%22/gu, '[build-url]: https://github.com/Colonise/$1/actions/workflows/nodejs-master.yml?query=workflow%3A%22Node.js+CI%22');

            fs.writeFileSync(absoluteRootReadmeMarkdownPath, newRootReadmMarkdowneContents);
        }

        return true;
    }
];

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

                const coloniseJson: ColoniseJSON = {
                    version: toVersion
                };

                writeJSON(absoluteRootColoniseJsonPath, coloniseJson);
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
}

export function migrateToLatestVersion(): void {
    let coloniseJson: ColoniseJSON | undefined;

    if (fs.existsSync(absoluteRootColoniseJsonPath)) {
        coloniseJson = readJSON(absoluteRootColoniseJsonPath);
    }

    const currentVersion = coloniseJson?.version ?? 0;

    if (currentVersion === latestVersion) {
        log('No need to migrate, already on latest version.');
    }
    else {
        migrate(currentVersion, latestVersion);
    }
}

if (wasCalledFromCLI(module)) {
    migrateToLatestVersion();
}
