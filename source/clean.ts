import del from 'del';
import {
    absoluteBuildDirectory,
    absoluteCoverageDirectory,
    absoluteDistributeDirectory,
    absoluteGeneratedDirectory
} from './variables.js';
import {
    log,
    wasCalledFromCLI
} from './helpers.js';

function cleanDirectory(directoryPath: string): string[] {
    log(`Cleaning directory '${directoryPath}'.`);

    const result = del.sync(directoryPath);

    return result;
}

export function cleanGeneratedDirectory(): string[] {
    return cleanDirectory(absoluteGeneratedDirectory);
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
        ...cleanGeneratedDirectory(),
        ...cleanBuildDirectory(),
        ...cleanDistributeDirectory(),
        ...cleanCoverageDirectory()
    ];
}

if (wasCalledFromCLI(import.meta.url)) {
    clean();
}
