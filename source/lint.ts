import type { ESLint } from 'eslint';
import { Linter } from 'eslint';
import { rules as typescriptESLintRules } from '@typescript-eslint/eslint-plugin';
import {
    absoluteRootESLintRCPath,
    absoluteSourceTypeScriptFilesGlob
} from './variables';
import {
    executeCommand,
    log,
    warn,
    wasCalledFromCLI
} from './helpers';

export function reportMissingAndUnknownRules(eslintOptions: ESLint.Options & {rules: Record<string, unknown>;}): void {
    const linter = new Linter(eslintOptions);

    const eslintRuleNames = linter.getRules().keys();

    const knownRuleNames = [
        ...Array.from(eslintRuleNames),
        ...Object.keys(typescriptESLintRules).map(typescriptESLintRuleName => `@typescript-eslint/${typescriptESLintRuleName}`)
    ];

    const unknownRuleNames: string[] = [];

    for (const ruleName in eslintOptions.rules) {
        if (!knownRuleNames.includes(ruleName)) {
            unknownRuleNames.push(ruleName);
        }
    }

    if (unknownRuleNames.length > 0) {
        log('');

        unknownRuleNames.forEach(unknownRuleName => {
            warn(`Unknown rule '${unknownRuleName}'`);
        });
    }

    const missingRuleNames: string[] = [];

    for (const ruleName of knownRuleNames) {
        if (!(ruleName in eslintOptions.rules)) {
            missingRuleNames.push(ruleName);
        }
    }

    if (missingRuleNames.length > 0) {
        log('');

        missingRuleNames.forEach(missingRuleName => {
            warn(`Missing rule '${missingRuleName}'`);
        });
    }
}

export function lintTypeScript(): void {
    log('Linting TypeScript files.');

    // eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports
    const eslintConfig = <ESLint.Options & {rules: Record<string, unknown>;}>require(absoluteRootESLintRCPath);

    reportMissingAndUnknownRules(eslintConfig);

    executeCommand('eslint', [
        '--cache',
        absoluteSourceTypeScriptFilesGlob
    ]);
}

export function lint(): void {
    lintTypeScript();
}

if (wasCalledFromCLI(module)) {
    lint();
}
