"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clean = exports.cleanCoverageDirectory = exports.cleanDistributeDirectory = exports.cleanBuildDirectory = void 0;
const tslib_1 = require("tslib");
const del_1 = tslib_1.__importDefault(require("del"));
const variables_1 = require("./variables");
const helpers_1 = require("./helpers");
function cleanDirectory(directoryPath) {
    helpers_1.log(`Cleaning directory '${directoryPath}'.`);
    const result = del_1.default.sync(directoryPath);
    return result;
}
function cleanBuildDirectory() {
    return cleanDirectory(variables_1.absoluteRootBuildDirectory);
}
exports.cleanBuildDirectory = cleanBuildDirectory;
function cleanDistributeDirectory() {
    return cleanDirectory(variables_1.absoluteRootDistributeDirectory);
}
exports.cleanDistributeDirectory = cleanDistributeDirectory;
function cleanCoverageDirectory() {
    return cleanDirectory(variables_1.absoluteRootCoverageDirectory);
}
exports.cleanCoverageDirectory = cleanCoverageDirectory;
function clean() {
    return [
        ...cleanBuildDirectory(),
        ...cleanDistributeDirectory(),
        ...cleanCoverageDirectory()
    ];
}
exports.clean = clean;
if (helpers_1.wasCalledFromCLI(module)) {
    clean();
}
