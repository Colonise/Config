import { build } from './build';
import { executeCommand, log, wasCalledFromCLI } from './helpers';

export function testTypescriptBuild() {
    log(`Running TypeScript unit tests.`);

    executeCommand('mocha', [
        '--recursive',
        '"./build/**/*.spec.js"'
    ]);
}

export function test() {
    build();
    testTypescriptBuild();
}

if (wasCalledFromCLI(module)) {
    test();
}
