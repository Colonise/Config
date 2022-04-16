import * as fs from 'fs';
import * as path from 'path';
import globby from 'globby';
import { default as rootPath } from 'app-root-path';
import spawn from 'cross-spawn';
import {
    absoluteCurrentDefaultDirectory, absoluteCurrentDefaultFilesGlob, relativeForceOverwriteFilePaths
} from './variables';

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
    try {
        return process.env.COLONISE_PACKAGE_NAME === 'Config';
    }
    catch {
        return true;
    }
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

export function readJSON<T>(filePath: string): T {
    const jsonString = fs.readFileSync(filePath).toString();

    const json = <T>JSON.parse(jsonString);

    return json;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function writeJSON(filePath: string, json: object): void {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    const jsonString = JSON.stringify(json, undefined, 4);

    fs.writeFileSync(filePath, jsonString);
}

export function copyDefaultFilesToRoot(): void {
    if (!fs.existsSync(absoluteCurrentDefaultDirectory)) {
        throw new Error(`Could not find default configuration path '${absoluteCurrentDefaultDirectory}'.`);
    }

    const absoluteDefaultFilePaths = getFilePaths(absoluteCurrentDefaultFilesGlob);

    for (const absoluteDefaultFilePath of absoluteDefaultFilePaths) {
        const relativeFilePath = absoluteDefaultFilePath.replace(`${absoluteCurrentDefaultDirectory}\\`, '');

        const absoluteFilePath = path.join(rootPath.path, relativeFilePath);

        if (fs.existsSync(absoluteFilePath)) {
            const existingContent = fs.readFileSync(absoluteFilePath).toString();
            const defaultFileContent = fs.readFileSync(absoluteDefaultFilePath).toString();

            if (existingContent !== defaultFileContent) {
                if (relativeForceOverwriteFilePaths.includes(relativeFilePath)) {
                    log(`Copying and overwriting file '${relativeFilePath}' to '${absoluteFilePath}'.`);

                    fs.copyFileSync(absoluteDefaultFilePath, absoluteFilePath);
                }
                else {
                    warn(`Failed to copy file '${relativeFilePath}' because it already exists. A manual update may be required.`);
                }
            }
        }
        else {
            const directoryPath = path.dirname(absoluteFilePath);

            fs.mkdirSync(directoryPath, { recursive: true });

            log(`Copying file '${relativeFilePath}' to '${absoluteFilePath}'.`);

            fs.copyFileSync(absoluteDefaultFilePath, absoluteFilePath, fs.constants.COPYFILE_EXCL);
        }
    }
}
