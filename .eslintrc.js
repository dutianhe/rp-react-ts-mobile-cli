module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
    plugins: ['@typescript-eslint', 'react-hooks', 'prettier'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true
    },
    rules: {
        '@typescript-eslint/naming-convention': [
            'warn',
            {
                selector: 'default',
                format: ['camelCase','PascalCase']
            },
            {
                selector: 'parameter',
                format: ['camelCase'],
                trailingUnderscore: 'allowSingleOrDouble'
            },
            {
                selector: 'class',
                format: ['PascalCase']
            },
            {
                selector: 'enum',
                format: ['PascalCase', 'UPPER_CASE']
            },
            {
                selector: 'enumMember',
                format: ['PascalCase', 'UPPER_CASE']
            },
            {
                selector: 'interface',
                format: ['PascalCase']
            },
            {
                selector: 'typeAlias',
                format: ['PascalCase']
            },
            {
                selector: 'typeParameter',
                format: ['PascalCase']
            }
        ],
        'react-hooks/rules-of-hooks': 'warn',
        'react-hooks/exhaustive-deps': 'warn',
        '@typescript-eslint/no-explicit-any': ['off'],
        'eqeqeq': 'warn',
        "new-cap":'warn',
        "no-redeclare":"error",
        "no-await-in-loop":"error",
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
}
