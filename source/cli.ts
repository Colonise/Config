#!/usr/bin/env node

import { build } from './build';
import { clean } from './clean';
import { coverage } from './coverage';
import { distribute } from './distribute';
import { install } from './install';
import { lint } from './lint';
import { migrateToLatestVersion } from './migrate';
// eslint-disable-next-line @typescript-eslint/no-shadow
import { test } from './test';
import { wasCalledFromCLI } from './helpers';
import { watch } from './watch';

if (wasCalledFromCLI(module)) {
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

        case 'watch':
            watch();
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

        case 'migrate':
            migrateToLatestVersion();
            break;

        default:
    }
}
