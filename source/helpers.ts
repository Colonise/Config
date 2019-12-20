import spawn from 'cross-spawn';
import { default as glob, IOptions } from 'glob';

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
    return (<(pattern: string, options: IOptions) => string[]>(<unknown>glob))(pattern, {
        dot: true,
        nodir: true,
        sync: true
    });
}

export function executeCommand(command: string, parameters: string[]) {
    spawn.sync(command, parameters, {
        shell: true,
        stdio: 'inherit'
    });
}
