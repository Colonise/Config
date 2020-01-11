import spawn from 'cross-spawn';
import globby from 'globby';
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

export function getFilePaths(pattern: string): string[];
export function getFilePaths(patterns: string[]): string[];
export function getFilePaths(patternOrPatterns: string | string[]): string[] {
    const patterns = Array.isArray(patternOrPatterns)
        ? patternOrPatterns
        : [
              patternOrPatterns
          ];

    // https://github.com/mrmlnc/fast-glob#pattern-syntax
    const fixedPatterns = patterns.map(pattern => pattern.replace(/\\/g, '/'));

    const filePaths = globby.sync(fixedPatterns);

    const normalizedFilePaths = filePaths.map(filePath => path.normalize(filePath));

    return normalizedFilePaths;
}

export function executeCommand(command: string, parameters: string[]) {
    spawn.sync(command, parameters, {
        shell: true,
        stdio: 'inherit'
    });
}
