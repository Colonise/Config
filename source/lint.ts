import { executeCommand, log, wasCalledFromCLI } from './helpers';

export function lintTypeScript() {
    log(`Linting TypeScript files.`);

    executeCommand('tslint', [
        '--project',
        './tsconfig.json'
    ]);
}

export function lint() {
    lintTypeScript();
}

if (wasCalledFromCLI(module)) {
    lint();
}
