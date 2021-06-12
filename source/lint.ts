import { CLIEngine } from 'eslint';
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

export function reportMissingLintRules(cliOptions: CLIEngine.Options): void {
    const options = { ...cliOptions };

    delete options.globals;

    if (options.rules === undefined) {
        return;
    }

    const cliEngine = new CLIEngine(options);

    const rules = cliEngine.getRules();

    const ruleNames = Array.from(rules.keys());

    const missingRuleNames: string[] = [];

    for (const ruleName of ruleNames) {
        if (!(ruleName in options.rules)) {
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
    const eslintConfig = <CLIEngine.Options>require(absoluteRootESLintRCPath);

    reportMissingLintRules(eslintConfig);

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
