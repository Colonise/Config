import { build } from './build.js';
import {
    executeCommand,
    log,
    wasCalledFromCLI
} from './helpers.js';

export function testTypeScriptBuild(): void {
    log('Running TypeScript unit tests.');

    executeCommand('mocha', [
        '--recursive',
        '"./build/**/*.spec.js"'
    ]);
}

// eslint-disable-next-line @typescript-eslint/no-shadow
export function test(): void {
    build();
    testTypeScriptBuild();
}

if (wasCalledFromCLI(import.meta.url)) {
    test();
}
