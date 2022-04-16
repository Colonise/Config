import { CLIEngine } from 'eslint';
import {
    absoluteRootESLintRCPath,
    absoluteSourceTypeScriptFilesGlob
} from './variables.js';
import {
    error,
    executeCommand,
    log,
    warn,
    wasCalledFromCLI
} from './helpers.js';

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

export async function lintTypeScript(): Promise<void> {
    log('Linting TypeScript files.');

    // eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports
    const eslintConfig = await <Promise<CLIEngine.Options>>import(`file://${absoluteRootESLintRCPath}`);

    reportMissingLintRules(eslintConfig);

    executeCommand('node ./node_modules/eslint/bin/eslint.js', [
        '--cache',
        absoluteSourceTypeScriptFilesGlob
    ]);
}

export function lint(): void {
    lintTypeScript().catch(error);
}

if (wasCalledFromCLI(import.meta.url)) {
    lint();
}
