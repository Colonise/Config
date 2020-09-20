#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const build_1 = require("./build");
const clean_1 = require("./clean");
const coverage_1 = require("./coverage");
const distribute_1 = require("./distribute");
const install_1 = require("./install");
const lint_1 = require("./lint");
// eslint-disable-next-line @typescript-eslint/no-shadow
const test_1 = require("./test");
const helpers_1 = require("./helpers");
if (helpers_1.wasCalledFromCLI(module)) {
    const [, , command] = process.argv;
    switch (command) {
        case 'clean':
            clean_1.clean();
            break;
        case 'build':
            build_1.build();
            break;
        case 'lint':
            lint_1.lint();
            break;
        case 'test':
            test_1.test();
            break;
        case 'coverage':
            coverage_1.coverage();
            break;
        case 'distribute':
            distribute_1.distribute();
            break;
        case 'install':
            install_1.install();
            break;
        default:
    }
}
