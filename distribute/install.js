"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.install = void 0;
const tslib_1 = require("tslib");
const fs = tslib_1.__importStar(require("fs"));
const path = tslib_1.__importStar(require("path"));
const app_root_path_1 = tslib_1.__importDefault(require("app-root-path"));
const variables_1 = require("./variables");
const helpers_1 = require("./helpers");
function unrenameDistributeDefaultFiles() {
    const currentDefaultDirectory = path.join(variables_1.absoluteCurrentDirectory, variables_1.relativeDefaultDirectory);
    if (!fs.existsSync(currentDefaultDirectory)) {
        throw new Error(`Could not find default configuration path '${currentDefaultDirectory}'.`);
    }
    const currentDefaultFilesGlob = path.join(currentDefaultDirectory, '/**/*');
    const defaultFilePaths = helpers_1.getFilePaths(currentDefaultFilesGlob);
    for (const defaultFilePath of defaultFilePaths) {
        const parsedPath = path.parse(defaultFilePath);
        const unrenamedFileName = parsedPath.base.replace(variables_1.renamedPrefix, '');
        const unrenamedFilePath = path.join(parsedPath.dir, unrenamedFileName);
        helpers_1.log(`Unrenaming file '${defaultFilePath}'.`);
        fs.renameSync(defaultFilePath, unrenamedFilePath);
    }
}
function copyDefaultFilesToRoot() {
    const currentDefaultDirectory = path.join(variables_1.absoluteCurrentDirectory, variables_1.relativeDefaultDirectory);
    if (!fs.existsSync(currentDefaultDirectory)) {
        throw new Error(`Could not find default configuration path '${currentDefaultDirectory}'.`);
    }
    const currentDefaultFilesGlob = path.join(currentDefaultDirectory, '/**/*');
    const absoluteDefaultFilePaths = helpers_1.getFilePaths(currentDefaultFilesGlob);
    for (const absoluteDefaultFilePath of absoluteDefaultFilePaths) {
        const relativeFilePath = absoluteDefaultFilePath.replace(currentDefaultDirectory, '');
        const absoluteFilePath = path.join(app_root_path_1.default.path, relativeFilePath);
        if (fs.existsSync(absoluteFilePath)) {
            helpers_1.warn(`Failed to copy file '${relativeFilePath}' because it already exists. A manual update may be required.`);
        }
        else {
            const directoryPath = path.dirname(absoluteFilePath);
            fs.mkdirSync(directoryPath, { recursive: true });
            helpers_1.log(`Copying file '${relativeFilePath}' to '${absoluteFilePath}'.`);
            fs.copyFileSync(absoluteDefaultFilePath, absoluteFilePath);
        }
    }
}
function install() {
    unrenameDistributeDefaultFiles();
    copyDefaultFilesToRoot();
}
exports.install = install;
if (helpers_1.wasCalledFromCLI(module)) {
    install();
}
