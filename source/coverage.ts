import { build } from './build';
import { cleanCoverageDirectory } from './clean';
import {
    executeCommand,
    log,
    wasCalledFromCLI
} from './helpers';

export function coverageTypeScriptBuild(): void {
    log('Checking coverage of TypeScript unit tests.');

    executeCommand('nyc', [
        'mocha',
        '--recursive',
        '"./build/**/*.spec.js"'
    ]);
}

export function coverage(): void {
    cleanCoverageDirectory();
    build();
    coverageTypeScriptBuild();
}

if (wasCalledFromCLI(module)) {
    coverage();
}
