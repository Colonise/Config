"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distribute = exports.distributeFiles = void 0;
const tslib_1 = require("tslib");
const fs = tslib_1.__importStar(require("fs"));
const path = tslib_1.__importStar(require("path"));
const build_1 = require("./build");
const clean_1 = require("./clean");
const variables_1 = require("./variables");
const helpers_1 = require("./helpers");
function copyFilesToDistributeDirectory() {
    helpers_1.copyFiles(variables_1.absoluteRootDefaultFilesGlob, variables_1.absoluteRootDefaultDirectory, variables_1.absoluteRootDistributeDefaultDirectory);
    helpers_1.copyFiles(variables_1.absoluteRootEssentialFilesGlobs, variables_1.absoluteRootDirectory, variables_1.absoluteRootDistributeEssentialDirectory);
}
/**
 * Rename all default files because NPM ignores some files by default and cannot be overrided.
 */
function renameDistributeDefaultFiles() {
    const distributeDefaultFilePaths = helpers_1.getFilePaths(variables_1.absoluteRootDistributeDefaultFilesGlob);
    for (const defaultFilePath of distributeDefaultFilePaths) {
        const parsedPath = path.parse(defaultFilePath);
        const renamedFileName = variables_1.renamedPrefix + parsedPath.base;
        const renamedFilePath = path.join(parsedPath.dir, renamedFileName);
        helpers_1.log(`Renaming file '${defaultFilePath}'.`);
        fs.renameSync(defaultFilePath, renamedFilePath);
    }
}
function packageJsonAddInstallScriptToDistribute() {
    var _a;
    // Only add install script to Config package
    if (process.env.COLONISE_PACKAGE_NAME === 'Config') {
        const packageJsonString = fs.readFileSync(variables_1.absoluteRootDistributePackageJsonPath, 'utf8');
        const packageJsonData = JSON.parse(packageJsonString);
        packageJsonData.scripts = (_a = packageJsonData.scripts) !== null && _a !== void 0 ? _a : {};
        packageJsonData.scripts.postinstall = 'colonise-config install';
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        const modifiedPackageJsonString = JSON.stringify(packageJsonData, undefined, 4);
        fs.writeFileSync(variables_1.absoluteRootDistributePackageJsonPath, modifiedPackageJsonString);
    }
}
function distributeFiles() {
    copyFilesToDistributeDirectory();
    renameDistributeDefaultFiles();
    packageJsonAddInstallScriptToDistribute();
}
exports.distributeFiles = distributeFiles;
function distribute() {
    clean_1.cleanDistributeDirectory();
    build_1.buildTypeScriptDistribute();
    distributeFiles();
}
exports.distribute = distribute;
if (helpers_1.wasCalledFromCLI(module)) {
    distribute();
}
