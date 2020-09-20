"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coverage = exports.coverageTypeScriptBuild = void 0;
const build_1 = require("./build");
const clean_1 = require("./clean");
const helpers_1 = require("./helpers");
function coverageTypeScriptBuild() {
    helpers_1.log('Checking coverage of TypeScript unit tests.');
    helpers_1.executeCommand('nyc', [
        'mocha',
        '--recursive',
        '"./build/**/*.spec.js"'
    ]);
}
exports.coverageTypeScriptBuild = coverageTypeScriptBuild;
function coverage() {
    clean_1.cleanCoverageDirectory();
    build_1.build();
    coverageTypeScriptBuild();
}
exports.coverage = coverage;
if (helpers_1.wasCalledFromCLI(module)) {
    coverage();
}
