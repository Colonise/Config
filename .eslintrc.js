/* eslint-disable @typescript-eslint/no-magic-numbers, spaced-comment */

const { CLIEngine } = require('eslint');

const eslintRules = {
    'accessor-pairs': [
        'warn',
        {
            setWithoutGet: true,
            getWithoutSet: false,
            enforceForClassMembers: true
        }
    ],
    'array-bracket-newline': [
        'error',
        {
            multiline: true,
            minItems: 1
        }
    ],
    'array-bracket-spacing': [
        'error',
        'never'
    ],
    'array-callback-return': [
        'error',
        {
            allowImplicit: false,
            checkForEach: true
        }
    ],
    'array-element-newline': [
        'error',
        {
            multiline: true,
            minItems: 1
        }
    ],
    'arrow-body-style': [
        'error',
        'as-needed',
        {
            requireReturnForObjectLiteral: false
        }
    ],
    'arrow-parens': [
        'error',
        'as-needed'
    ],
    'arrow-spacing': [
        'error',
        {
            before: true,
            after: true
        }
    ],
    'block-scoped-var': [
        'error'
    ],
    'block-spacing': [
        'error',
        'always'
    ],
    // Replaced by @typescript-eslint/brace-style
    'brace-style': [
        'off'
    ],
    'callback-return': [
        'off'
    ],
    'camelcase': [
        'error',
        {
            properties: 'always',
            ignoreDestructuring: false,
            ignoreImports: false,
            ignoreGlobals: true
        }
    ],
    'capitalized-comments': [
        'error',
        'always',
        {
            ignorePattern: undefined,
            ignoreInlineComments: false,
            ignoreConsecutiveComments: true
        }
    ],
    'class-methods-use-this': [
        'off'
    ],
    'comma-dangle': [
        'error',
        {
            arrays: 'never',
            objects: 'never',
            imports: 'never',
            exports: 'never',
            functions: 'never'
        }
    ],
    // Replaced by @typescript-eslint/comma-spacing
    'comma-spacing': [
        'off'
    ],
    'comma-style': [
        'error',
        'last'
    ],
    'complexity': [
        'error',
        {
            max: 16
        }
    ],
    'computed-property-spacing': [
        'error',
        'never',
        {
            enforceForClassMembers: true
        }
    ],
    'consistent-return': [
        'error',
        {
            treatUndefinedAsUnspecified: false
        }
    ],
    'consistent-this': [
        'error',
        '_this'
    ],
    'constructor-super': [
        'error'
    ],
    'curly': [
        'error',
        'all'
    ],
    'default-case': [
        'error',
        {
            commentPattern: '^no default( case)?$'
        }
    ],
    'default-case-last': [
        'error'
    ],
    // Replaced by @typescript-eslint/default-param-last
    'default-param-last': [
        'off'
    ],
    'dot-location': [
        'error',
        'property'
    ],
    // Replaced by @typescript-eslint/dot-notation
    'dot-notation': [
        'off'
    ],
    'eol-last': [
        'error',
        'always'
    ],
    'eqeqeq': [
        'error',
        'always',
        {
            null: 'always'
        }
    ],
    'for-direction': [
        'error'
    ],
    // Replaced by @typescript-eslint/func-call-spacing
    'func-call-spacing': [
        'off'
    ],
    'func-name-matching': [
        'error',
        'always',
        {
            considerPropertyDescriptor: true,
            includeCommonJSModuleExports: true
        }
    ],
    'func-names': [
        'error',
        'as-needed'
    ],
    'func-style': [
        'error',
        'declaration',
        {
            allowArrowFunctions: true
        }
    ],
    'function-call-argument-newline': [
        'error',
        'consistent'
    ],
    'function-paren-newline': [
        'error',
        'multiline-arguments'
    ],
    'generator-star-spacing': [
        'error',
        {
            before: true,
            after: false
        }
    ],
    'getter-return': [
        'error',
        {
            allowImplicit: false
        }
    ],
    // Replaced by node/global-require
    'global-require': [
        'off'
    ],
    'grouped-accessor-pairs': [
        'error',
        'getBeforeSet'
    ],
    'guard-for-in': [
        'error'
    ],
    // Replaced by node/handle-callback-err
    'handle-callback-err': [
        'off'
    ],
    // Replaced by id-denylist
    'id-blacklist': [
        'off'
    ],
    'id-denylist': [
        'error',
        'foo',
        'bar',
        'baz',
        'err',
        'cb',
        'func',
        'len',
        'data',
        'prom'
    ],
    'id-length': [
        'error',
        {
            min: 3,
            max: 64,
            properties: 'always',
            exceptions: [
                'i',
                'x',
                'y'
            ]
        }
    ],
    // Replaced by @typescript-eslint/naming-convention
    'id-match': [
        'off'
    ],
    'implicit-arrow-linebreak': [
        'error',
        'beside'
    ],
    // Replaced by @typescript-eslint/indent
    'indent': [
        'off'
    ],
    // Replaced by @typescript-eslint/indent
    'indent-legacy': [
        'off'
    ],
    // Replaced by @typescript-eslint/init-declarations
    'init-declarations': [
        'off'
    ],
    // We do not use JSX
    'jsx-quotes': [
        'off'
    ],
    'key-spacing': [
        'error',
        {
            beforeColon: false,
            afterColon: true,
            mode: 'strict'
        }
    ],
    // Replaced by @typescript-eslint/keyword-spacing
    'keyword-spacing': [
        'off'
    ],
    'line-comment-position': [
        'error',
        'above'
    ],
    'linebreak-style': [
        'error',
        'windows'
    ],
    'lines-around-comment': [
        'error',
        {
            beforeBlockComment: true,
            afterBlockComment: false,
            beforeLineComment: true,
            afterLineComment: false,
            allowBlockStart: true,
            allowBlockEnd: true,
            allowObjectStart: true,
            allowObjectEnd: true,
            allowArrayStart: true,
            allowArrayEnd: true,
            allowClassStart: true,
            allowClassEnd: true,
            applyDefaultIgnorePatterns: true
        }
    ],
    // Replaced by padding-line-between-statements
    'lines-around-directive': [
        'off'
    ],
    // Replaced by @typescript-eslint/lines-between-class-members
    'lines-between-class-members': [
        'off'
    ],
    'max-classes-per-file': [
        'error',
        1
    ],
    'max-depth': [
        'error',
        {
            max: 4
        }
    ],
    'max-len': [
        'warn',
        {
            code: 160,
            tabWidth: 4,
            comments: 160,
            ignoreComments: false,
            ignoreTrailingComments: false,
            ignoreUrls: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreRegExpLiterals: true
        }
    ],
    'max-lines': [
        'warn',
        {
            max: 500,
            skipBlankLines: true,
            skipComments: true
        }
    ],
    'max-lines-per-function': [
        'error',
        {
            max: 50,
            skipBlankLines: true,
            skipComments: true,
            IIFEs: true
        }
    ],
    'max-nested-callbacks': [
        'error',
        {
            max: 10
        }
    ],
    'max-params': [
        'error',
        {
            max: 4
        }
    ],
    'max-statements': [
        'error',
        {
            max: 25
        },
        {
            ignoreTopLevelFunctions: false
        }
    ],
    'max-statements-per-line': [
        'error',
        {
            max: 1
        }
    ],
    'multiline-comment-style': [
        'error',
        'starred-block'
    ],
    'multiline-ternary': [
        'error',
        'always-multiline'
    ],
    // Replaced by padding-line-between-statements
    'newline-after-var': [
        'off'
    ],
    // Replaced by padding-line-between-statements
    'newline-before-return': [
        'off'
    ],
    'new-cap': [
        'error',
        {
            newIsCap: true,
            capIsNew: true,
            properties: false
        }
    ],
    'new-parens': [
        'error',
        'always'
    ],
    'newline-per-chained-call': [
        'error',
        {
            ignoreChainWithDepth: 2
        }
    ],
    'no-alert': [
        'error'
    ],
    // Replaced by @typescript-eslint/no-array-constructor
    'no-array-constructor': [
        'off'
    ],
    'no-async-promise-executor': [
        'error'
    ],
    'no-await-in-loop': [
        'warn'
    ],
    'no-bitwise': [
        'warn'
    ],
    // Replaced by node/no-deprecated-api
    'no-buffer-constructor': [
        'off'
    ],
    'no-caller': [
        'error'
    ],
    'no-case-declarations': [
        'error'
    ],
    // Replaced by no-shadow
    'no-catch-shadow': [
        'off'
    ],
    'no-class-assign': [
        'error'
    ],
    'no-compare-neg-zero': [
        'error'
    ],
    'no-cond-assign': [
        'error',
        'except-parens'
    ],
    'no-confusing-arrow': [
        'error',
        {
            allowParens: true
        }
    ],
    'no-console': [
        'error',
        {
            // allow: []
        }
    ],
    'no-const-assign': [
        'error'
    ],
    'no-constant-condition': [
        'error',
        {
            checkLoops: true
        }
    ],
    'no-constructor-return': [
        'error'
    ],
    'no-continue': [
        'warn'
    ],
    'no-control-regex': [
        'warn'
    ],
    'no-debugger': [
        'error'
    ],
    // We often use delete to remove properties
    'no-delete-var': [
        'off'
    ],
    'no-div-regex': [
        'error'
    ],
    'no-dupe-args': [
        'error'
    ],
    // Replaced by @typescript-eslint/no-dupe-class-members
    'no-dupe-class-members': [
        'off'
    ],
    'no-dupe-else-if': [
        'error'
    ],
    'no-dupe-keys': [
        'error'
    ],
    'no-duplicate-case': [
        'error'
    ],
    // This fails on import and import type from same file
    'no-duplicate-imports': [
        'off'
    ],
    'no-else-return': [
        'error',
        {
            allowElseIf: false
        }
    ],
    'no-empty': [
        'error',
        {
            allowEmptyCatch: false
        }
    ],
    'no-empty-character-class': [
        'error'
    ],
    // Replaced by @typescript-eslint/no-empty-function
    'no-empty-function': [
        'off'
    ],
    'no-empty-pattern': [
        'error'
    ],
    'no-eq-null': [
        'error'
    ],
    'no-eval': [
        'error',
        {
            allowIndirect: false
        }
    ],
    'no-ex-assign': [
        'error'
    ],
    'no-extend-native': [
        'error',
        {
            exceptions: []
        }
    ],
    'no-extra-bind': [
        'error'
    ],
    'no-extra-boolean-cast': [
        'error',
        {
            enforceForLogicalOperands: true
        }
    ],
    'no-extra-label': [
        'error'
    ],
    // Replaced by @typescript-eslint/no-extra-parens
    'no-extra-parens': [
        'off'
    ],
    // Replaced by @typescript-eslint/no-extra-semi
    'no-extra-semi': [
        'off'
    ],
    'no-fallthrough': [
        'error'
    ],
    'no-floating-decimal': [
        'error'
    ],
    'no-func-assign': [
        'error'
    ],
    'no-global-assign': [
        'error',
        {
            exceptions: []
        }
    ],
    'no-implicit-coercion': [
        'error',
        {
            boolean: true,
            number: true,
            string: true,
            allow: []
        }
    ],
    'no-implicit-globals': [
        'error',
        {
            lexicalBindings: true
        }
    ],
    'no-implied-eval': [
        'error'
    ],
    'no-import-assign': [
        'error'
    ],
    'no-inline-comments': [
        'error'
    ],
    'no-inner-declarations': [
        'error',
        'both'
    ],
    'no-invalid-regexp': [
        'error',
        {
            allowConstructorFlags: []
        }
    ],
    // Replaced by @typescript-eslint/no-invalid-this
    'no-invalid-this': [
        'off'
    ],
    'no-irregular-whitespace': [
        'error',
        {
            skipStrings: true,
            skipComments: false,
            skipRegExps: true,
            skipTemplates: true
        }
    ],
    'no-iterator': [
        'error'
    ],
    'no-label-var': [
        'error'
    ],
    'no-labels': [
        'error',
        {
            allowLoop: false,
            allowSwitch: false
        }
    ],
    'no-lone-blocks': [
        'error'
    ],
    'no-lonely-if': [
        'error'
    ],
    'no-loop-func': [
        'error'
    ],
    // Replaced by @typescript-eslint/no-loss-of-precision
    'no-loss-of-precision': [
        'off'
    ],
    // Replaced by @typescript-eslint/no-magic-numbers
    'no-magic-numbers': [
        'off'
    ],
    'no-misleading-character-class': [
        'error'
    ],
    'no-mixed-operators': [
        'error',
        {
            groups: [
                ['+', '-', '*', '/', '%', '**'],
                ['&', '|', '^', '~', '<<', '>>', '>>>'],
                ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                ['&&', '||', '??', '?:'],
                ['in', 'instanceof']
            ],
            allowSamePrecedence: true
        }
    ],
    // Replaced by node/no-mixed-requires
    'no-mixed-requires': [
        'off'
    ],
    'no-mixed-spaces-and-tabs': [
        'error'
    ],
    'no-multi-assign': [
        'error'
    ],
    'no-multi-spaces': [
        'error',
        {
            ignoreEOLComments: false,
            exceptions: {}
        }
    ],
    'no-multi-str': [
        'error'
    ],
    'no-multiple-empty-lines': [
        'error',
        {
            max: 1,
            maxEOF: 1,
            maxBOF: 0
        }
    ],
    // Replaced by no-global-assign
    'no-native-reassign': [
        'off'
    ],
    'no-negated-condition': [
        'error'
    ],
    // Replaced by no-unsafe-negation
    'no-negated-in-lhs': [
        'off'
    ],
    'no-nested-ternary': [
        'error'
    ],
    'no-new': [
        'error'
    ],
    'no-new-func': [
        'error'
    ],
    'no-new-object': [
        'error'
    ],
    // Replaced by node/no-new-require
    'no-new-require': [
        'off'
    ],
    'no-new-symbol': [
        'error'
    ],
    'no-new-wrappers': [
        'error'
    ],
    'no-obj-calls': [
        'error'
    ],
    'no-octal': [
        'error'
    ],
    'no-octal-escape': [
        'error'
    ],
    'no-param-reassign': [
        'error',
        {
            props: false
        }
    ],
    // Replaced by node/no-path-concat
    'no-path-concat': [
        'off'
    ],
    'no-plusplus': [
        'error',
        {
            allowForLoopAfterthoughts: true
        }
    ],
    // Replaced by node/no-process-env
    'no-process-env': [
        'off'
    ],
    // Replaced by node/no-process-exit
    'no-process-exit': [
        'off'
    ],
    'no-promise-executor-return': [
        'error'
    ],
    'no-proto': [
        'error'
    ],
    'no-prototype-builtins': [
        'error'
    ],
    // Replaced by @typescript-eslint/no-redeclare
    'no-redeclare': [
        'off'
    ],
    'no-regex-spaces': [
        'error'
    ],
    'no-restricted-exports': [
        'error',
        {
            restrictedNamedExports: []
        }
    ],
    'no-restricted-globals': [
        'error',
        {
            name: 'this',
            message: 'Identify the global variable and assign it to a variable instead.'
        },
        {
            name: 'window',
            message: 'Identify the global variable and assign it to a variable instead.'
        },
        {
            name: 'global',
            message: 'Identify the global variable and assign it to a variable instead.'
        }
    ],
    'no-restricted-imports': [
        'error'
    ],
    // Replaced by node/no-restricted-import and node/no-restricted-require
    'no-restricted-modules': [
        'off'
    ],
    'no-restricted-properties': [
        'error'
    ],
    'no-restricted-syntax': [
        'error'
    ],
    'no-return-assign': [
        'error',
        'always'
    ],
    // Replaced by @typescript-eslint/return-await
    'no-return-await': [
        'off'
    ],
    'no-script-url': [
        'error'
    ],
    'no-self-assign': [
        'error',
        {
            props: true
        }
    ],
    'no-self-compare': [
        'error'
    ],
    'no-sequences': [
        'error'
    ],
    'no-setter-return': [
        'error'
    ],
    // Replaced by @typescript-eslint/no-shadow
    'no-shadow': [
        'off'
    ],
    'no-shadow-restricted-names': [
        'error'
    ],
    // Replaced by func-call-spacing
    'no-spaced-func': [
        'off'
    ],
    'no-sparse-arrays': [
        'error'
    ],
    // Replaced by node/no-sync
    'no-sync': [
        'off'
    ],
    'no-tabs': [
        'error',
        {
            allowIndentationTabs: false
        }
    ],
    'no-template-curly-in-string': [
        'error'
    ],
    'no-ternary': [
        'off'
    ],
    'no-this-before-super': [
        'error'
    ],
    'no-throw-literal': [
        'error'
    ],
    'no-trailing-spaces': [
        'error',
        {
            skipBlankLines: false,
            ignoreComments: false
        }
    ],
    // TypeScript handles this
    'no-undef': [
        'off'
    ],
    // We prefer initialisation
    'no-undef-init': [
        'off'
    ],
    // We prefer undefined
    'no-undefined': [
        'off'
    ],
    'no-underscore-dangle': [
        'error',
        {
            allow: [],
            allowAfterThis: false,
            allowAfterSuper: false,
            allowAfterThisConstructor: false,
            enforceInMethodNames: false,
            allowFunctionParams: true
        }
    ],
    'no-unexpected-multiline': [
        'error'
    ],
    'no-unmodified-loop-condition': [
        'error'
    ],
    'no-unneeded-ternary': [
        'error',
        {
            defaultAssignment: false
        }
    ],
    'no-unreachable': [
        'error'
    ],
    'no-unreachable-loop': [
        'error',
        {
            ignore: []
        }
    ],
    'no-unsafe-finally': [
        'error'
    ],
    'no-unsafe-negation': [
        'error',
        {
            enforceForOrderingRelations: true
        }
    ],
    // Replaced by @typescript-eslint/no-unused-expressions
    'no-unused-expressions': [
        'off'
    ],
    'no-unused-labels': [
        'error'
    ],
    // Replaced by @typescript-eslint/no-unused-vars
    'no-unused-vars': [
        'off'
    ],
    // Replaced by @typescript-eslint/no-use-before-define
    'no-use-before-define': [
        'off'
    ],
    'no-useless-backreference': [
        'error'
    ],
    'no-useless-call': [
        'error'
    ],
    'no-useless-catch': [
        'error'
    ],
    'no-useless-computed-key': [
        'error',
        {
            enforceForClassMembers: true
        }
    ],
    'no-useless-concat': [
        'error'
    ],
    // Replaced by @typescript-eslint/no-useless-constructor
    'no-useless-constructor': [
        'off'
    ],
    'no-useless-escape': [
        'error'
    ],
    'no-useless-rename': [
        'error',
        {
            ignoreImport: false,
            ignoreExport: false,
            ignoreDestructuring: false
        }
    ],
    'no-useless-return': [
        'error'
    ],
    'no-var': [
        'error'
    ],
    'no-void': [
        'error',
        {
            allowAsStatement: false
        }
    ],
    'no-warning-comments': [
        'warn',
        {
            terms: ['todo'],
            location: 'anywhere'
        }
    ],
    'no-whitespace-before-property': [
        'error'
    ],
    'no-with': [
        'error'
    ],
    'nonblock-statement-body-position': [
        'error',
        'beside',
        {
            overrides: {}
        }
    ],
    'object-curly-newline': [
        'error',
        {
            multiline: true,
            minProperties: 2,
            consistent: true
        }
    ],
    'object-curly-spacing': [
        'error',
        'always',
        {
            arraysInObjects: false,
            objectsInObjects: false
        }
    ],
    'object-property-newline': [
        'error',
        {
            allowAllPropertiesOnSameLine: false
        }
    ],
    'object-shorthand': [
        'error',
        'always',
        {
            avoidQuotes: true,
            ignoreConstructors: false,
            avoidExplicitReturnArrows: false
        }
    ],
    'one-var': [
        'error',
        'never'
    ],
    'one-var-declaration-per-line': [
        'error',
        'always'
    ],
    'operator-assignment': [
        'error',
        'always'
    ],
    'operator-linebreak': [
        'error',
        'before'
    ],
    'padded-blocks': [
        'error',
        'never'
    ],
    // TODO: Look into using this and being very specific
    'padding-line-between-statements': [
        'off',
        // {
        //     blankLine: 'always',
        //     prev: '*',
        //     next: 'class'
        // },
        // {
        //     blankLine: 'always',
        //     prev: '*',
        //     next: 'function'
        // },
        // {
        //     blankLine: 'always',
        //     prev: '*',
        //     next: 'if'
        // },
        // {
        //     blankLine: 'always',
        //     prev: '*',
        //     next: 'for'
        // },
        // {
        //     blankLine: 'always',
        //     prev: '*',
        //     next: 'while'
        // },
        // {
        //     blankLine: 'always',
        //     prev: '*',
        //     next: 'do'
        // },
        // {
        //     blankLine: 'always',
        //     prev: '*',
        //     next: 'switch'
        // },
        // {
        //     blankLine: 'always',
        //     prev: '*',
        //     next: 'block'
        // },
        // {
        //     blankLine: 'always',
        //     prev: 'block',
        //     next: '*'
        // },
        // TODO: Causes problems with function overloads
        // {
        //     blankLine: 'always',
        //     prev: '*',
        //     next: 'block-like'
        // },
        // {
        //     blankLine: 'always',
        //     prev: 'block-like',
        //     next: '*'
        // },
        // {
        //     blankLine: 'always',
        //     prev: '*',
        //     next: 'case'
        // },
        // {
        //     blankLine: 'always',
        //     prev: 'break',
        //     next: '*'
        // },
        // {
        //     blankLine: 'always',
        //     prev: 'continue',
        //     next: '*'
        // },
        // {
        //     blankLine: 'always',
        //     prev: '*',
        //     next: 'default'
        // },
        // {
        //     blankLine: 'always',
        //     prev: '*',
        //     next: 'throw'
        // },
        // {
        //     blankLine: 'always',
        //     prev: '*',
        //     next: 'return'
        // },
        // {
        //     blankLine: 'always',
        //     prev: 'return',
        //     next: '*'
        // }
    ],
    'prefer-arrow-callback': [
        'error',
        {
            allowNamedFunctions: false
        }
    ],
    'prefer-const': [
        'error',
        {
            destructuring: 'any',
            ignoreReadBeforeAssign: true
        }
    ],
    'prefer-destructuring': [
        'error',
        {
            array: true,
            object: false
        },
        {
            enforceForRenamedProperties: false
        }
    ],
    'prefer-exponentiation-operator': [
        'error'
    ],
    // TODO: Enable when we can use ECMAScript 2018 which support named capture groups
    'prefer-named-capture-group': [
        'off'
    ],
    'prefer-numeric-literals': [
        'error'
    ],
    'prefer-object-spread': [
        'error'
    ],
    'prefer-promise-reject-errors': [
        'error',
        {
            allowEmptyReject: false
        }
    ],
    // We prefer the functions on Object over Reflect
    'prefer-reflect': [
        'off'
    ],
    'prefer-regex-literals': [
        'error',
        {
            disallowRedundantWrapping: true
        }
    ],
    'prefer-rest-params': [
        'error'
    ],
    'prefer-spread': [
        'error'
    ],
    'prefer-template': [
        'error'
    ],
    'quote-props': [
        'error',
        'as-needed',
        {
            keywords: true,
            unnecessary: true,
            numbers: false
        }
    ],
    // Replaced by @typescript-eslint/quotes
    'quotes': [
        'off'
    ],
    'radix': [
        'error',
        'always'
    ],
    'require-atomic-updates': [
        'error'
    ],
    // Replaced by @typescript-eslint/require-await
    'require-await': [
        'off'
    ],
    // TODO: Look into replacing with a plugin
    'require-jsdoc': [
        'off'
    ],
    'require-unicode-regexp': [
        'error'
    ],
    'require-yield': [
        'error'
    ],
    'rest-spread-spacing': [
        'error',
        'never'
    ],
    // Replaced by @typescript-eslint/semi
    'semi': [
        'off'
    ],
    'semi-spacing': [
        'error',
        {
            before: false,
            after: true
        }
    ],
    'semi-style': [
        'error',
        'last'
    ],
    'sort-imports': [
        'error',
        {
            ignoreCase: true,
            ignoreDeclarationSort: false,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: [
                'none',
                'all',
                'single',
                'multiple'
            ],
            allowSeparatedGroups: false
        }
    ],
    // Do not sort keys
    'sort-keys': [
        'off'
    ],
    'sort-vars': [
        'error',
        {
            ignoreCase: false
        }
    ],
    'space-before-blocks': [
        'error',
        {
            functions: 'always',
            keywords: 'always',
            classes: 'always'
        }
    ],
    // Replaced by @typescript-eslint/space-before-function-paren
    'space-before-function-paren': [
        'off'
    ],
    'space-in-parens': [
        'error',
        'never'
    ],
    'space-infix-ops': [
        'error',
        {
            int32Hint: false
        }
    ],
    'space-unary-ops': [
        'error',
        {
            words: true,
            nonwords: false
        }
    ],
    'spaced-comment': [
        'error',
        'always'
    ],
    'strict': [
        'error',
        'safe'
    ],
    'switch-colon-spacing': [
        'error',
        {
            before: false,
            after: true
        }
    ],
    'symbol-description': [
        'error'
    ],
    'template-curly-spacing': [
        'error',
        'never'
    ],
    'template-tag-spacing': [
        'error',
        'always'
    ],
    'unicode-bom': [
        'error',
        'never'
    ],
    'use-isnan': [
        'error',
        {
            enforceForSwitchCase: true,
            enforceForIndexOf: true
        }
    ],
    // TODO: Look into replacing with a plugin
    'valid-jsdoc': [
        'off'
    ],
    'valid-typeof': [
        'error'
    ],
    'vars-on-top': [
        'error'
    ],
    'wrap-iife': [
        'error',
        'inside'
    ],
    // We do not wrap Regular Expressions
    'wrap-regex': [
        'off'
    ],
    'yield-star-spacing': [
        'error',
        {
            before: false,
            after: true
        }
    ],
    'yoda': [
        'error',
        'never'
    ]
};

const typescriptEslintRules = {
    '@typescript-eslint/adjacent-overload-signatures': [
        'error'
    ],
    '@typescript-eslint/array-type': [
        'error',
        {
            default: 'array',
            readonly: 'array'
        }
    ],
    '@typescript-eslint/await-thenable': [
        'error'
    ],
    '@typescript-eslint/ban-ts-comment': [
        'error',
        {
            minimumDescriptionLength: 8,
            'ts-check': true,
            'ts-expect-error': 'allow-with-description',
            'ts-ignore': true,
            'ts-nocheck': true
        }
    ],
    '@typescript-eslint/ban-tslint-comment': [
        'error'
    ],
    '@typescript-eslint/ban-types': [
        'error',
        {
            extendDefaults: true,
            types: {
                'null': `Use 'undefined' instead of 'null'`
            }
        }
    ],
    '@typescript-eslint/brace-style': [
        'error',
        'stroustrup'
    ],
    '@typescript-eslint/class-literal-property-style': [
        'error',
        'getters'
    ],
    '@typescript-eslint/comma-spacing': [
        'error',
        {
            after: true,
            before: false
        }
    ],
    '@typescript-eslint/consistent-type-assertions': [
        'error',
        {
            assertionStyle: 'angle-bracket',
            objectLiteralTypeAssertions: 'allow-as-parameter'
        }
    ],
    '@typescript-eslint/consistent-type-definitions': [
        'error',
        'interface'
    ],
    '@typescript-eslint/consistent-type-imports': [
        'error',
        {
            disallowTypeAnnotations: true,
            prefer: 'type-imports'
        }
    ],
    '@typescript-eslint/default-param-last': [
        'error'
    ],
    '@typescript-eslint/dot-notation': [
        'error',
        {
            allowKeywords: true,
            allowPattern: '',
            allowPrivateClassPropertyAccess: false
        }
    ],
    '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
            allowExpressions: true,
            allowHigherOrderFunctions: true,
            allowTypedFunctionExpressions: true
        }
    ],
    '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
            accessibility: 'explicit',
            overrides: {
                accessors: 'explicit',
                constructors: 'explicit',
                methods: 'explicit',
                parameterProperties: 'explicit',
                properties: 'explicit'
            }
        }
    ],
    '@typescript-eslint/explicit-module-boundary-types': [
        'error',
        {
            allowArgumentsExplicitlyTypedAsAny: false,
            allowDirectConstAssertionInArrowFunctions: true,
            allowHigherOrderFunctions: true,
            allowTypedFunctionExpressions: true,
            allowedNames: []
        }
    ],
    '@typescript-eslint/func-call-spacing': [
        'error',
        'never'
    ],
    '@typescript-eslint/indent': [
        'error',
        4
    ],
    // Strict mode let's us struct if/else chains will set the variable
    '@typescript-eslint/init-declarations': [
        'off'
    ],
    '@typescript-eslint/keyword-spacing': [
        'error',
        {
            after: true,
            before: true,
            overrides: {
                'this': {
                    before: false
                }
            }
        }
    ],
    '@typescript-eslint/lines-between-class-members': [
        'error',
        {
            exceptAfterOverload: true
        }
    ],
    '@typescript-eslint/member-delimiter-style': [
        'error',
        {
            multiline: {
                delimiter: 'semi',
                requireLast: true
            },
            singleline: {
                delimiter: 'semi',
                requireLast: true
            }
        }
    ],
    '@typescript-eslint/member-ordering': [
        'error',
        {
            default: [
                'public-static-field',
                'protected-static-field',
                'private-static-field',
                'public-static-method',
                'protected-static-method',
                'private-static-method',
                'public-abstract-field',
                'public-instance-field',
                'protected-abstract-field',
                'protected-instance-field',
                'private-abstract-field',
                'private-instance-field',
                'public-constructor',
                'protected-constructor',
                'private-constructor',
                'public-abstract-method',
                'public-instance-method',
                'protected-abstract-method',
                'protected-instance-method',
                'private-abstract-method',
                'private-instance-method'
            ]
        }
    ],
    '@typescript-eslint/method-signature-style': [
        'error',
        'method'
    ],
    '@typescript-eslint/naming-convention': [
        'error',
        {
            selector: 'default',
            format: [
                'camelCase'
            ],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid'
        },
        {
            selector: 'variable',
            format: [
                'camelCase'
            ],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid'
        },
        {
            selector: 'variable',
            format: [
                'PascalCase'
            ],
            prefix: [
                'is',
                'should',
                'has',
                'can',
                'did',
                'will',
                'result'
            ],
            types: [
                'boolean'
            ]
        },
        {
            selector: 'function',
            format: [
                'camelCase'
            ],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid'
        },
        {
            selector: 'parameter',
            format: [
                'camelCase'
            ],
            custom: {
                regex: '^_?',
                match: true
            },
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid'
        },
        {
            selector: 'property',
            format: [
                'camelCase'
            ],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid'
        },
        {
            selector: 'property',
            format: [
                'camelCase'
            ],
            leadingUnderscore: 'allow',
            modifiers: [
                'private',
                'protected'
            ],
            trailingUnderscore: 'forbid'
        },
        {
            selector: 'parameterProperty',
            format: [
                'camelCase'
            ],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid'
        },
        {
            selector: 'parameterProperty',
            format: [
                'camelCase'
            ],
            leadingUnderscore: 'allow',
            modifiers: [
                'private',
                'protected'
            ],
            trailingUnderscore: 'forbid'
        },
        {
            selector: 'method',
            format: [
                'camelCase'
            ],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid'
        },
        {
            selector: 'accessor',
            format: [
                'camelCase'
            ],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid'
        },
        {
            selector: 'enumMember',
            format: [
                'PascalCase'
            ],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid'
        },
        {
            selector: 'class',
            format: [
                'PascalCase'
            ],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid'
        },
        {
            selector: 'interface',
            custom: {
                regex: '^I[A-Z]',
                match: false
            },
            format: [
                'PascalCase'
            ],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid'
        },
        {
            selector: 'typeAlias',
            format: [
                'PascalCase'
            ],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid'
        },
        {
            selector: 'enum',
            format: [
                'PascalCase'
            ],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid'
        },
        {
            selector: 'typeParameter',
            format: [
                'PascalCase'
            ],
            leadingUnderscore: 'forbid',
            prefix: [
                'T'
            ],
            trailingUnderscore: 'forbid'
        }
    ],
    '@typescript-eslint/no-array-constructor': [
        'error'
    ],
    '@typescript-eslint/no-base-to-string': [
        'error',
        {
            ignoredTypeNames: [
                'RegExp'
            ]
        }
    ],
    '@typescript-eslint/no-confusing-non-null-assertion': [
        'error'
    ],
    '@typescript-eslint/no-dupe-class-members': [
        'error'
    ],
    '@typescript-eslint/no-dynamic-delete': [
        'error'
    ],
    '@typescript-eslint/no-empty-function': [
        'error',
        {
            allow: [
                'arrowFunctions',
                'constructors',
                'private-constructors',
                'protected-constructors',
                'decoratedFunctions'
            ]
        }
    ],
    '@typescript-eslint/no-empty-interface': [
        'error',
        {
            allowSingleExtends: false
        }
    ],
    '@typescript-eslint/no-explicit-any': [
        'error',
        {
            fixToUnknown: true,
            ignoreRestArgs: false
        }
    ],
    '@typescript-eslint/no-extra-non-null-assertion': [
        'error'
    ],
    '@typescript-eslint/no-extra-parens': [
        'error',
        'all',
        {
            conditionalAssign: true,
            enforceForArrowConditionals: true,
            enforceForFunctionPrototypeMethods: true,
            enforceForNewInMemberExpressions: true,
            enforceForSequenceExpressions: true,
            ignoreJSX: 'none',
            nestedBinaryExpressions: false,
            returnAssign: true
        }
    ],
    '@typescript-eslint/no-extra-semi': [
        'error'
    ],
    '@typescript-eslint/no-extraneous-class': [
        'warn',
        {
            allowConstructorOnly: false,
            allowEmpty: false,
            allowStaticOnly: false,
            allowWithDecorator: true
        }
    ],
    '@typescript-eslint/no-floating-promises': [
        'error',
        {
            ignoreIIFE: false,
            ignoreVoid: false
        }
    ],
    '@typescript-eslint/no-for-in-array': [
        'error'
    ],
    '@typescript-eslint/no-implicit-any-catch': [
        'error',
        {
            allowExplicitAny: false
        }
    ],
    '@typescript-eslint/no-implied-eval': [
        'error'
    ],
    // Allow inferable types for readability
    '@typescript-eslint/no-inferrable-types': [
        'off'
    ],
    '@typescript-eslint/no-invalid-this': [
        'error',
        {
            capIsConstructor: false
        }
    ],
    '@typescript-eslint/no-invalid-void-type': [
        'error',
        {
            allowInGenericTypeArguments: true
        }
    ],
    '@typescript-eslint/no-loss-of-precision': [
        'error'
    ],
    '@typescript-eslint/no-magic-numbers': [
        'error',
        {
            detectObjects: true,
            enforceConst: true,
            ignore: [
                -1,
                0,
                1
            ],
            ignoreArrayIndexes: false,
            ignoreEnums: true,
            ignoreNumericLiteralTypes: true,
            ignoreReadonlyClassProperties: true
        }
    ],
    '@typescript-eslint/no-misused-new': [
        'error'
    ],
    '@typescript-eslint/no-misused-promises': [
        'error',
        {
            checksConditionals: true,
            checksVoidReturn: true
        }
    ],
    '@typescript-eslint/no-namespace': [
        'error',
        {
            allowDeclarations: false,
            allowDefinitionFiles: false
        }
    ],
    '@typescript-eslint/no-non-null-asserted-optional-chain': [
        'error'
    ],
    '@typescript-eslint/no-non-null-assertion': [
        'error'
    ],
    '@typescript-eslint/no-parameter-properties': [
        'error',
        {
            allows: [
                'readonly',
                'private',
                'protected',
                'public',
                'private readonly',
                'protected readonly',
                'public readonly'
            ]
        }
    ],
    '@typescript-eslint/no-redeclare': [
        'error',
        {
            builtinGlobals: true,
            ignoreDeclarationMerge: true
        }
    ],
    '@typescript-eslint/no-require-imports': [
        'error'
    ],
    '@typescript-eslint/no-shadow': [
        'error',
        {
            allow: [],
            builtinGlobals: true,
            hoist: 'all',
            ignoreTypeValueShadow: false
        }
    ],
    '@typescript-eslint/no-this-alias': [
        'error',
        {
            allowDestructuring: false,
            allowedNames: []
        }
    ],
    '@typescript-eslint/no-throw-literal': [
        'error'
    ],
    '@typescript-eslint/no-type-alias': [
        'error',
        {
            allowAliases: 'always',
            allowCallbacks: 'always',
            allowConditionalTypes: 'always',
            allowConstructors: 'always',
            allowLiterals: 'in-unions-and-intersections',
            allowMappedTypes: 'always',
            allowTupleTypes: 'always'
        }
    ],
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': [
        'error',
        {
            allowComparingNullableBooleansToFalse: true,
            allowComparingNullableBooleansToTrue: true
        }
    ],
    '@typescript-eslint/no-unnecessary-condition': [
        'error',
        {
            allowConstantLoopConditions: false
        }
    ],
    '@typescript-eslint/no-unnecessary-qualifier': [
        'error'
    ],
    '@typescript-eslint/no-unnecessary-type-arguments': [
        'error'
    ],
    '@typescript-eslint/no-unnecessary-type-assertion': [
        'error',
        {
            typesToIgnore: []
        }
    ],
    '@typescript-eslint/no-unsafe-assignment': [
        'error'
    ],
    '@typescript-eslint/no-unsafe-call': [
        'error'
    ],
    '@typescript-eslint/no-unsafe-member-access': [
        'error'
    ],
    '@typescript-eslint/no-unsafe-return': [
        'error'
    ],
    '@typescript-eslint/no-unused-expressions': [
        'error',
        {
            allowShortCircuit: true,
            allowTaggedTemplates: true,
            allowTernary: true
        }
    ],
    '@typescript-eslint/no-unused-vars': [
        'error',
        {
            args: 'all',
            argsIgnorePattern: '^_',
            caughtErrors: 'all',
            caughtErrorsIgnorePattern: '^_',
            ignoreRestSiblings: true,
            vars: 'all',
            varsIgnorePattern: '^_'
        }
    ],
    '@typescript-eslint/no-unused-vars-experimental': [
        'error',
        {
            ignoreArgsIfArgsAfterAreUsed: true,
            ignoredNamesRegex: '^_'
        }
    ],
    '@typescript-eslint/no-use-before-define': [
        'error',
        {
            classes: true,
            enums: true,
            functions: true,
            typedefs: true,
            variables: true
        }
    ],
    '@typescript-eslint/no-useless-constructor': [
        'error'
    ],
    '@typescript-eslint/no-var-requires': [
        'error'
    ],
    '@typescript-eslint/prefer-as-const': [
        'error'
    ],
    '@typescript-eslint/prefer-enum-initializers': [
        'error'
    ],
    '@typescript-eslint/prefer-for-of': [
        'error'
    ],
    '@typescript-eslint/prefer-function-type': [
        'error'
    ],
    '@typescript-eslint/prefer-includes': [
        'error'
    ],
    '@typescript-eslint/prefer-literal-enum-member': [
        'error'
    ],
    '@typescript-eslint/prefer-namespace-keyword': [
        'error'
    ],
    '@typescript-eslint/prefer-nullish-coalescing': [
        'error',
        {
            ignoreConditionalTests: true,
            ignoreMixedLogicalExpressions: true
        }
    ],
    '@typescript-eslint/prefer-optional-chain': [
        'error'
    ],
    '@typescript-eslint/prefer-readonly': [
        'error',
        {
            onlyInlineLambdas: false
        }
    ],
    '@typescript-eslint/prefer-readonly-parameter-types': [
        'off'
    ],
    '@typescript-eslint/prefer-reduce-type-parameter': [
        'error'
    ],
    '@typescript-eslint/prefer-regexp-exec': [
        'error'
    ],
    '@typescript-eslint/prefer-string-starts-ends-with': [
        'error'
    ],
    '@typescript-eslint/prefer-ts-expect-error': [
        'error'
    ],
    '@typescript-eslint/promise-function-async': [
        'error',
        {
            allowedPromiseNames: [],
            checkArrowFunctions: true,
            checkFunctionDeclarations: true,
            checkFunctionExpressions: true,
            checkMethodDeclarations: true
        }
    ],
    '@typescript-eslint/quotes': [
        'error',
        'single',
        {
            avoidEscape: false
        }
    ],
    '@typescript-eslint/require-array-sort-compare': [
        'error',
        {
            ignoreStringArrays: true
        }
    ],
    '@typescript-eslint/require-await': [
        'error'
    ],
    '@typescript-eslint/restrict-plus-operands': [
        'error',
        {
            checkCompoundAssignments: true
        }
    ],
    '@typescript-eslint/restrict-template-expressions': [
        'error',
        {
            allowAny: false,
            allowBoolean: true,
            allowNullish: true,
            allowNumber: true
        }
    ],
    '@typescript-eslint/return-await': [
        'error',
        'in-try-catch'
    ],
    '@typescript-eslint/semi': [
        'error',
        'always'
    ],
    '@typescript-eslint/space-before-function-paren': [
        'error',
        {
            anonymous: 'always',
            asyncArrow: 'always',
            named: 'never'
        }
    ],
    '@typescript-eslint/strict-boolean-expressions': [
        'error',
        {
            allowAny: false,
            allowNullableBoolean: true,
            allowNullableNumber: false,
            allowNullableObject: true,
            allowNullableString: true,
            allowNumber: false,
            allowString: true
        }
    ],
    '@typescript-eslint/switch-exhaustiveness-check': [
        'error'
    ],
    '@typescript-eslint/triple-slash-reference': [
        'error',
        {
            lib: 'never',
            path: 'never',
            types: 'never'
        }
    ],
    '@typescript-eslint/type-annotation-spacing': [
        'error',
        {
            after: true,
            before: false,
            overrides: {
                arrow: {
                    before: true,
                    after: true
                }
            }
        }
    ],
    '@typescript-eslint/typedef': [
        'off'
    ],
    '@typescript-eslint/unbound-method': [
        'error',
        {
            ignoreStatic: false
        }
    ],
    '@typescript-eslint/unified-signatures': [
        'off'
    ]
};

const eslintPluginNodeRules = {
    // TODO: Look into using this rule
    'node/callback-return': [
        'off'
    ],
    'node/exports-style': [
        'error',
        'module.exports',
        {
            allowBatchAssign: false
        }
    ],
    'node/file-extension-in-import': [
        'off'
    ],
    // TODO: Look into using this rule
    'node/global-require': [
        'off'
    ],
    // TODO: Look into using this rule
    'node/handle-callback-err': [
        'off'
    ],
    // TODO: Look into using this rule
    'node/no-callback-literal': [
        'off'
    ],
    'node/no-deprecated-api': [
        'error'
    ],
    // TODO: Look into using this rule
    'node/no-exports-assign': [
        'off'
    ],
    // TODO: Look into using this rule
    'node/no-extraneous-import': [
        'off'
    ],
    // TODO: Look into using this rule
    'node/no-extraneous-require': [
        'off'
    ],
    // TODO: Look into using this rule
    'node/no-hide-core-modules': [
        'off'
    ],
    // Unsupported with TypeScript
    'node/no-missing-import': [
        'off'
    ],
    // TODO: Look into using this rule
    'node/no-missing-require': [
        'off'
    ],
    // TODO: Look into using this rule
    'node/no-mixed-requires': [
        'off'
    ],
    // TODO: Look into using this rule
    'node/no-new-require': [
        'off'
    ],
    // TODO: Look into using this rule
    'node/no-path-concat': [
        'off'
    ],
    // TODO: Look into using this rule
    'node/no-process-env': [
        'off'
    ],
    // TODO: Look into using this rule
    'node/no-process-exit': [
        'off'
    ],
    // TODO: Look into using this rule
    'node/no-restricted-import': [
        'off'
    ],
    // TODO: Look into using this rule
    'node/no-restricted-require': [
        'off'
    ],
    // We use sync
    'node/no-sync': [
        'off'
    ],
    // TODO: Look into using this rule
    'node/no-unpublished-bin': [
        'off'
    ],
    // TODO: Look into using this rule
    'node/no-unpublished-import': [
        'off'
    ],
    // TODO: Look into using this rule
    'node/no-unpublished-require': [
        'off'
    ],
    // Replaced by node/no-unsupported-features/*
    'node/no-unsupported-features': [
        'off'
    ],
    // TODO: Look into using this rule
    'node/no-unsupported-features/es-builtins': [
        'off'
    ],
    // Unsupported with TypeScript
    'node/no-unsupported-features/es-syntax': [
        'off'
    ],
    // TODO: Look into using this rule
    'node/no-unsupported-features/node-builtins': [
        'off'
    ],
    // TODO: Look into using this rule
    'node/prefer-global/buffer': [
        'off'
    ],
    // TODO: Look into using this rule
    'node/prefer-global/console': [
        'off'
    ],
    // TODO: Look into using this rule
    'node/prefer-global/process': [
        'off'
    ],
    // TODO: Look into using this rule
    'node/prefer-global/text-decoder': [
        'off'
    ],
    // TODO: Look into using this rule
    'node/prefer-global/text-encoder': [
        'off'
    ],
    // TODO: Look into using this rule
    'node/prefer-global/url': [
        'off'
    ],
    // TODO: Look into using this rule
    'node/prefer-global/url-search-params': [
        'off'
    ],
    // TODO: Look into using this rule
    'node/prefer-promises/dns': [
        'off'
    ],
    // TODO: Look into using this rule
    'node/prefer-promises/fs': [
        'off'
    ],
    // TODO: Look into using this rule
    'node/process-exit-as-throw': [
        'off'
    ],
    // TODO: Look into using this rule
    'node/shebang': [
        'off'
    ]
}

const config = {
    env: {
        es6: true,
        node: true,
        mocha: true
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './source/tsconfig.json',
        sourceType: 'module',
        warnOnUnsupportedTypeScriptVersion: true
    },
    plugins: [
        '@typescript-eslint',
        'eslint-plugin-node'
    ],
    reportUnusedDisableDirectives: true,
    root: true,
    // globals: {
    //     describe: 'readonly',
    //     it: 'readonly'
    // },
    ignorePatterns: [
        '**/*.spec.*',
        '**/*.test.*'
    ],
    rules: {
        ...eslintRules,
        ...typescriptEslintRules,
        ...eslintPluginNodeRules
    }
};

module.exports = config;
