/// <reference types="node" />
export declare function log(message: string): void;
export declare function warn(message: string): void;
export declare function error(message: string): void;
export declare function wasCalledFromCLI(otherModule: NodeModule): boolean;
export declare function getFilePaths(pattern: string): string[];
export declare function getFilePaths(patterns: string[]): string[];
export declare function copyFiles(targetPattern: string, originDirectory: string, destinationDirectory: string): void;
export declare function copyFiles(targetPatterns: string[], originDirectory: string, destinationDirectory: string): void;
export declare function executeCommand(command: string, parameters: string[]): void;
