import { build } from './build.js';
import { cleanCoverageDirectory } from './clean.js';
import {
    executeCommand,
    log,
    wasCalledFromCLI
} from './helpers.js';

export function coverageTypeScriptBuild(): void {
    cleanCoverageDirectory();

    log('Checking coverage of TypeScript unit tests.');

    executeCommand('nyc', [
        'mocha',
        '--recursive',
        '"./build/**/*.spec.js"'
    ]);
}

export function coverage(): void {
    build();
    coverageTypeScriptBuild();
}

if (wasCalledFromCLI(import.meta.url)) {
    coverage();
}
