"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = exports.buildTypeScriptDistribute = exports.buildTypeScriptBuild = void 0;
const tslib_1 = require("tslib");
const fs = tslib_1.__importStar(require("fs"));
const path = tslib_1.__importStar(require("path"));
const clean_1 = require("./clean");
const variables_1 = require("./variables");
const helpers_1 = require("./helpers");
function generateTsconfig(includeTestFiles = false) {
    const tsconfigString = fs.readFileSync(variables_1.absoluteRootTsconfigJsonPath, 'utf8');
    const tsconfigData = JSON.parse(tsconfigString);
    const filesGlob = includeTestFiles
        ? [
            variables_1.absoluteRootSourceTypeScriptFilesGlob
        ]
        : [
            variables_1.absoluteRootSourceTypeScriptFilesGlob,
            `!${variables_1.absoluteRootSourceTestFilesGlob}`
        ];
    const files = helpers_1.getFilePaths(filesGlob);
    if (Array.isArray(tsconfigData.files)) {
        tsconfigData.files = tsconfigData.files.map(file => path.join(variables_1.absoluteRootDirectory, file));
    }
    else {
        tsconfigData.files = [];
    }
    tsconfigData.files = tsconfigData.files.concat(files);
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    const modifiedTsconfigData = JSON.stringify(tsconfigData, undefined, 4);
    fs.writeFileSync(variables_1.absoluteRootGeneratedTsconfigJsonPath, modifiedTsconfigData);
}
function buildTypeScript(outputDirectoryPath, includeTestFiles = false) {
    helpers_1.log(`Generating TSConfig file to '${variables_1.absoluteRootGeneratedTsconfigJsonPath}'.`);
    generateTsconfig(includeTestFiles);
    helpers_1.log(`Building TypeScript files to '${outputDirectoryPath}' directory.`);
    helpers_1.executeCommand('tsc', [
        '--project',
        variables_1.absoluteRootGeneratedTsconfigJsonPath,
        '--outDir',
        outputDirectoryPath
    ]);
    helpers_1.copyFiles(variables_1.absoluteRootSourceDeclarationFilesGlob, variables_1.absoluteRootSourceDirectory, outputDirectoryPath);
}
function buildTypeScriptBuild() {
    buildTypeScript('./build', true);
}
exports.buildTypeScriptBuild = buildTypeScriptBuild;
function buildTypeScriptDistribute() {
    buildTypeScript('./distribute');
}
exports.buildTypeScriptDistribute = buildTypeScriptDistribute;
function build() {
    clean_1.cleanBuildDirectory();
    buildTypeScriptBuild();
}
exports.build = build;
if (helpers_1.wasCalledFromCLI(module)) {
    build();
}
