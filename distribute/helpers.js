"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeCommand = exports.copyFiles = exports.getFilePaths = exports.wasCalledFromCLI = exports.error = exports.warn = exports.log = void 0;
const tslib_1 = require("tslib");
const fs = tslib_1.__importStar(require("fs"));
const path = tslib_1.__importStar(require("path"));
const globby_1 = tslib_1.__importDefault(require("globby"));
const cross_spawn_1 = tslib_1.__importDefault(require("cross-spawn"));
function log(message) {
    // eslint-disable-next-line no-console
    console.log(message);
}
exports.log = log;
function warn(message) {
    // eslint-disable-next-line no-console
    console.warn(message);
}
exports.warn = warn;
function error(message) {
    // eslint-disable-next-line no-console
    console.error(message);
}
exports.error = error;
function wasCalledFromCLI(otherModule) {
    return require.main === otherModule;
}
exports.wasCalledFromCLI = wasCalledFromCLI;
function getFilePaths(patternOrPatterns) {
    const patterns = Array.isArray(patternOrPatterns)
        ? patternOrPatterns
        : [
            patternOrPatterns
        ];
    // https://github.com/mrmlnc/fast-glob#pattern-syntax
    const fixedPatterns = patterns.map(pattern => pattern.replace(/\\/gu, '/'));
    const filePaths = globby_1.default.sync(fixedPatterns, { dot: true });
    const normalizedFilePaths = filePaths.map(filePath => path.normalize(filePath));
    return normalizedFilePaths;
}
exports.getFilePaths = getFilePaths;
function copyFiles(targetPatternOrTargetPatterns, originDirectory, destinationDirectory) {
    const filePaths = getFilePaths(targetPatternOrTargetPatterns);
    for (const filePath of filePaths) {
        const relativeFilePath = path.relative(originDirectory, filePath);
        const destinationFilePath = path.join(destinationDirectory, relativeFilePath);
        const directory = path.dirname(destinationFilePath);
        fs.mkdirSync(directory, { recursive: true });
        log(`Copying file '${filePath}' to '${destinationFilePath}'.`);
        fs.copyFileSync(filePath, destinationFilePath);
    }
}
exports.copyFiles = copyFiles;
function executeCommand(command, parameters) {
    cross_spawn_1.default.sync(command, parameters, {
        shell: true,
        stdio: 'inherit'
    });
}
exports.executeCommand = executeCommand;
