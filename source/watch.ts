import { absoluteSourceTSConfigJsonPath } from './variables';
import { cleanBuildDirectory } from './clean';
import {
    executeCommand,
    log,
    wasCalledFromCLI
} from './helpers';

function watchTypeScript(outputDirectoryPath: string): void {
    log('Watching TypeScript files!.');

    executeCommand('tsc', [
        '--project',
        absoluteSourceTSConfigJsonPath,
        '--outDir',
        outputDirectoryPath,
        '--watch'
    ]);
}

export function watchTypeScriptBuild(): void {
    cleanBuildDirectory();
    watchTypeScript('./build');
}

export function watch(): void {
    watchTypeScriptBuild();
}

if (wasCalledFromCLI(module)) {
    watch();
}
