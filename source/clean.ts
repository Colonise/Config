import del from 'del';
import {
    absoluteBuildDirectory,
    absoluteCoverageDirectory,
    absoluteDistributeDirectory
} from './variables';
import {
    log,
    wasCalledFromCLI
} from './helpers';

function cleanDirectory(directoryPath: string): string[] {
    log(`Cleaning directory '${directoryPath}'.`);

    const result = del.sync(directoryPath);

    return result;
}

export function cleanBuildDirectory(): string[] {
    return cleanDirectory(absoluteBuildDirectory);
}

export function cleanDistributeDirectory(): string[] {
    return cleanDirectory(absoluteDistributeDirectory);
}

export function cleanCoverageDirectory(): string[] {
    return cleanDirectory(absoluteCoverageDirectory);
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
