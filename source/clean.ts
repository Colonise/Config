import del from 'del';
import { log, wasCalledFromCLI } from './helpers';
import {
    absoluteRootBuildDirectory,
    absoluteRootCoverageDirectory,
    absoluteRootDistributeDirectory
} from './variables';

function cleanDirectory(directoryPath: string) {
    log(`Cleaning directory '${directoryPath}'.`);

    const result = del.sync(directoryPath);

    return result;
}

export function cleanBuildDirectory(): string[] {
    return cleanDirectory(absoluteRootBuildDirectory);
}

export function cleanDistributeDirectory(): string[] {
    return cleanDirectory(absoluteRootDistributeDirectory);
}

export function cleanCoverageDirectory(): string[] {
    return cleanDirectory(absoluteRootCoverageDirectory);
}

export function clean(): string[] {
    return [
        ...cleanBuildDirectory(),
        ...cleanDistributeDirectory(),
        ...cleanCoverageDirectory()
    ];
}

if (wasCalledFromCLI(module)) {
    clean();
}
