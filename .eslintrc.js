module.exports = {
    // Specifies the ESLint parser
    parser: '@typescript-eslint/parser',
    extends: [
        // Uses the recommended rules from @eslint-plugin-react
        'plugin:react/recommended',
        // Uses the recommended rules from @typescript-eslint/eslint-plugin
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint'
    ],
    parserOptions: {
        // Allows for the parsing of modern ECMAScript features
        ecmaVersion: 2018,
        // Allows for the use of imports
        sourceType: 'module',
        ecmaFeatures: {
            // Allows for the parsing of JSX
            jsx: true
        }
    },
    rules: {
        'prettier/prettier': 'error',
        // 函数必须有返回类型，包括void
        '@typescript-eslint/explicit-function-return-type': 'off',
        // 不允许通过以下形式导出函数
        // export function test() {
        //     return;
        //   }
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        // 不进行改变的变量尽量使用const
        'prefer-const': 'error',
        // 不准使用var
        'no-var': 'error',
        // 不允许拖尾都好
        'comma-dangle': 'off',
        // 箭头函数单个参数必须带括号
        'arrow-parens': 'off',
        // 不允许多行空格
        'no-multiple-empty-lines': 'error',
        // 不允许显式的any
        '@typescript-eslint/no-explicit-any': 'off',
        // require的时候不要使用var
        '@typescript-eslint/no-var-requires': 'off',
        // 不允许没有使用的变量, 这里的off表示不使用eslint，利用tsconfig配置来进行报错
        '@typescript-eslint/no-unused-vars': 'off',
        // 不记得了
        '@typescript-eslint/explicit-member-accessibility': 'off',
        // interface定义必须使用I开头
        '@typescript-eslint/interface-name-prefix': 'off',
        // 不允许有空的interface
        '@typescript-eslint/no-empty-interface': 'off',
        'react/prop-types': 'off',
        'react/display-name': 'off'
    },
    settings: {
        react: {
            // Tells eslint-plugin-react to automatically detect the version of React to use
            version: 'detect'
        }
    },
    env: {
        browser: true
    }
}
