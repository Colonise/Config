#!/usr/bin/env node

import { build } from './build.js';
import { clean } from './clean.js';
import { coverage } from './coverage.js';
import { distribute } from './distribute.js';
import { install } from './install.js';
import { lint } from './lint.js';
// eslint-disable-next-line @typescript-eslint/no-shadow
import { test } from './test.js';
import { wasCalledFromCLI } from './helpers.js';

if (wasCalledFromCLI(import.meta.url)) {
    const [
        ,
        ,
        command
    ] = process.argv;

    switch (command) {
        case 'clean':
            clean();
            break;

        case 'build':
            build();
            break;

        case 'lint':
            lint();
            break;

        case 'test':
            test();
            break;

        case 'coverage':
            coverage();
            break;

        case 'distribute':
            distribute();
            break;

        case 'install':
            install();
            break;

        default:
    }
}
