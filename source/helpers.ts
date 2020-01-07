import spawn from 'cross-spawn';
import { default as glob, IOptions } from 'glob';
import * as path from 'path';

export function log(message: string): void {
    // tslint:disable-next-line: no-console
    console.log(message);
}

export function warn(message: string): void {
    // tslint:disable-next-line: no-console
    console.warn(message);
}

export function wasCalledFromCLI(otherModule: NodeModule): boolean {
    return require.main === otherModule;
}

export function getFilePaths(pattern: string): string[] {
    const filePaths = (<(pattern: string, options: IOptions) => string[]>(<unknown>glob))(pattern, {
        dot: true,
        nodir: true,
        sync: true
    });

    const normalizedFilePaths = filePaths.map(filePath => path.normalize(filePath));

    return normalizedFilePaths;
}

export function executeCommand(command: string, parameters: string[]) {
    spawn.sync(command, parameters, {
        shell: true,
        stdio: 'inherit'
    });
}
