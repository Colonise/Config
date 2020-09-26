import * as fs from 'fs';
import * as path from 'path';
import globby from 'globby';
import spawn from 'cross-spawn';

export function log(message: string): void {
    // eslint-disable-next-line no-console
    console.log(message);
}

export function warn(message: string): void {
    // eslint-disable-next-line no-console
    console.warn(message);
}

export function error(message: string): void {
    // eslint-disable-next-line no-console
    console.error(message);
}

export function wasCalledFromCLI(otherModule: NodeModule): boolean {
    return require.main === otherModule;
}

export function isColoniseConfig(): boolean {
    return process.env.COLONISE_PACKAGE_NAME === 'Config';
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
    const fixedPatterns = patterns.map(pattern => pattern.replace(/\\/gu, '/'));

    const filePaths = globby.sync(fixedPatterns, { dot: true });

    const normalizedFilePaths = filePaths.map(filePath => path.normalize(filePath));

    return normalizedFilePaths;
}

export function copyFiles(targetPattern: string, originDirectory: string, destinationDirectory: string): void;
export function copyFiles(
    targetPatterns: string[],
    originDirectory: string,
    destinationDirectory: string
): void;
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

export function executeCommand(command: string, parameters: string[]): void {
    spawn.sync(command, parameters, {
        shell: true,
        stdio: 'inherit'
    });
}
