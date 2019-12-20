#!/usr/bin/env node

import { build } from './build';
import { clean } from './clean';
import { coverage } from './coverage';
import { distribute } from './distribute';
import { wasCalledFromCLI } from './helpers';
import { install } from './install';
import { lint } from './lint';
import { test } from './test';

if (wasCalledFromCLI(module)) {
    const command = process.argv[2];

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
