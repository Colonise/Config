import { cleanBuildDirectory } from './clean';
import { executeCommand, log, wasCalledFromCLI } from './helpers';

function buildTypeScript(outputDirectoryPath: string): void {
    log(`Building TypeScript files to '${outputDirectoryPath}' directory.`);

    executeCommand('tsc', [
        '--outDir',
        outputDirectoryPath
    ]);
}

export function buildTypeScriptBuild(): void {
    buildTypeScript('./build');
}

export function buildTypeScriptDistribute(): void {
    buildTypeScript('./distribute');
}

export function build(): void {
    cleanBuildDirectory();
    buildTypeScriptBuild();
}

if (wasCalledFromCLI(module)) {
    build();
}
