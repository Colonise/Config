import spawn from 'cross-spawn';
import * as fs from 'fs';
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

export function copyFiles(targetPattern: string, originDirectory: string, destinationDirectory: string): void;
export function copyFiles(targetPatterns: string[], originDirectory: string, destinationDirectory: string): void;
export function copyFiles(
    targetPatternOrTargetPatterns: string | string[],
    originDirectory: string,
    destinationDirectory: string
): void {
    const filePaths = getFilePaths(<string[]>targetPatternOrTargetPatterns);

    for (const filePath of filePaths) {
        const relativeFilePath = path.relative(originDirectory, filePath);
        const destinationFilePath = path.join(destinationDirectory, relativeFilePath);
        const directory = path.dirname(destinationFilePath);

        fs.mkdirSync(directory, { recursive: true });

        log(`Copying file '${filePath}' to '${destinationFilePath}'.`);

        fs.copyFileSync(filePath, destinationFilePath);
    }
}

export function executeCommand(command: string, parameters: string[]) {
    spawn.sync(command, parameters, {
        shell: true,
        stdio: 'inherit'
    });
}
