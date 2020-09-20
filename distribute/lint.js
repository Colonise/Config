"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lint = exports.lintTypeScript = exports.reportMissingLintRules = void 0;
const eslint_1 = require("eslint");
const variables_1 = require("./variables");
const helpers_1 = require("./helpers");
function reportMissingLintRules(cliOptions) {
    const options = Object.assign({}, cliOptions);
    delete options.globals;
    if (options.rules === undefined) {
        return;
    }
    const cliEngine = new eslint_1.CLIEngine(options);
    const rules = cliEngine.getRules();
    const ruleNames = Array.from(rules.keys());
    const missingRuleNames = [];
    for (const ruleName of ruleNames) {
        if (!(ruleName in options.rules)) {
            missingRuleNames.push(ruleName);
        }
    }
    if (missingRuleNames.length > 0) {
        helpers_1.log('');
        missingRuleNames.forEach(missingRuleName => {
            helpers_1.warn(`Missing rule '${missingRuleName}'`);
        });
    }
}
exports.reportMissingLintRules = reportMissingLintRules;
function lintTypeScript() {
    helpers_1.log('Linting TypeScript files.');
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const eslintConfig = require(variables_1.absoluteRootEslintRCPath);
    reportMissingLintRules(eslintConfig);
    helpers_1.executeCommand('eslint', [
        // '--fix',
        '--cache',
        variables_1.absoluteRootSourceTypeScriptFilesGlob
    ]);
}
exports.lintTypeScript = lintTypeScript;
function lint() {
    lintTypeScript();
}
exports.lint = lint;
if (helpers_1.wasCalledFromCLI(module)) {
    lint();
}
