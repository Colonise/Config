"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = exports.testTypeScriptBuild = void 0;
const build_1 = require("./build");
const helpers_1 = require("./helpers");
function testTypeScriptBuild() {
    helpers_1.log('Running TypeScript unit tests.');
    helpers_1.executeCommand('mocha', [
        '--recursive',
        '"./build/**/*.spec.js"'
    ]);
}
exports.testTypeScriptBuild = testTypeScriptBuild;
// eslint-disable-next-line @typescript-eslint/no-shadow
function test() {
    build_1.build();
    testTypeScriptBuild();
}
exports.test = test;
if (helpers_1.wasCalledFromCLI(module)) {
    test();
}
