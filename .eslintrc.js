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
        'for-direction': 2, // 禁止for无限循环
        'no-compare-neg-zero': 2, // 禁止与-0进行比较
        'no-cond-assign': 2, // 禁止条件语句中出现赋值语句
        'no-control-regex': 2, // 在 ASCII 中，0-31 范围内的控制字符是特殊的、不可见的字符。这些字符很少被用在 JavaScript 字符串中，所以一个正则表达式如果包含这些字符的，很有可能一个错误。
        'no-dupe-args': 2, // 禁止在函数定义或表达中出现重名参数
        'no-dupe-keys': 2, // 禁止在对象字面量中出现重复的键
        'no-duplicate-case': 2, // 禁止重复 case 标签
        'no-empty': 2, // 禁止空块语句
        'no-empty-character-class': 2, // 禁止在正则表达式中出现空字符集
        'no-ex-assign': 2, // 禁止对 catch 子句中的异常重新赋值。因为catch出来的都是错误信息，不需要重新赋值
        'no-extra-boolean-cast': 2, // 禁止不必要的布尔类型转换，如 !!true
        'no-extra-semi': 2, // 禁用不必要的分号
        'no-inner-declarations': 2, // ??? 禁止在嵌套的语句块中出现变量
        'no-regex-spaces': 2, // 禁止正则表达式字面量中出现多个空格
        'no-obj-calls': 2, // 禁止将全局对象当作函数进行调用
        'no-template-curly-in-string': 2, // 禁止在常规字符串中出现模板字面量占位符语法
        semi: [2, 'never'], // 强制是否使用分号。
        'no-unexpected-multiline': 2, // 禁止使用令人困惑的多行表达式
        'no-unreachable': 2, // 禁止在 return、throw、continue 和 break 语句后出现不可达代码
        'use-isnan': 2, // 要求调用 isNaN()检查 NaN
        'no-unsafe-negation': 2, // 禁止对关系运算符的左操作数使用否定操作符
        'valid-jsdoc': [2, { requireReturn: false }], // 强制使用有效的 JSDoc 注释，JSDoc 使用教程 http://shouce.jb51.net/jsdoc/
        'valid-typeof': 2, // 强制 typeof 表达式与有效的字符串进行比较
        'array-callback-return': 2, // 强制数组方法的回调函数中有 return 语句
        'block-scoped-var': 2, // 把 var 语句看作是在块级作用域范围之内
        curly: 2, // 要求遵循大括号约定
        'default-case': 1, // 要求 Switch 语句中有 Default 分支
        'dot-location': [2, 'property'], // 强制在点号之前换行
        'dot-notation': 2, // 点号和字面量，优先使用点号
        eqeqeq: [1, 'smart'], // 要求使用 === 和 !==
        'no-caller': 2, // 禁用 caller 或 callee
        'no-empty-function': 2, // 禁止出现空函数
        'no-empty-pattern': 2, // 禁止使用空解构模式
        'no-eval': 2, // 禁用 eval()
        'no-global-assign': 2, // 禁止对原生对象或只读的全局对象进行赋值
        'no-floating-decimal': 2, // 禁止浮点小数
        'no-fallthrough': 2, // 禁止 case 语句落空
        'no-labels': 2, // 禁用标签语句
        'no-extra-label': 2, // 禁用不必要的标签
        'no-extra-bind': 2, // 禁止不必要的函数绑定
        'no-iterator': 2, // 禁用迭代器
        'no-lone-blocks': 2, // 禁用不必要的嵌套块
        'no-loop-func': 2, // 禁止循环中存在函数
        'no-magic-numbers': [
            1,
            {
                // momo????
                ignoreArrayIndexes: true,
                ignore: [-1, 0, 1, 2, 24, 60, 100, 1000]
            }
        ], // 禁止使用魔术数字，魔术数字是在代码中多次出现的没有明确含义的数字。它最好由命名常量取代。
        'no-multi-spaces': 2, // 禁止出现多个空格
        'no-multi-str': 2, // 禁止多行字符串
        'no-new': 2, // 禁止在不保存实例的情况下使用new
        'no-new-func': 2, // 禁用Function构造函数
        'no-new-wrappers': 2, // 禁止原始包装实例
        'no-octal': 2, // 禁用八进制字面量
        'no-octal-escape': 2, // 禁止在字符串字面量中使用八进制转义序列
        'no-proto': 2, // 禁用__proto__，改用 getPrototypeOf 方法替代 __proto__。
        'no-redeclare': 2, // 禁止重新声明变量
        'no-return-assign': 2, // 禁止在返回语句中赋值
        'no-return-await': 2, // 禁用不必要的 return await
        'no-script-url': 2, // 禁用 Script URL
        'no-self-assign': 2, // 禁止自身赋值
        'no-sequences': 2, // 不允许使用逗号操作符
        'no-throw-literal': 2, // 限制可以被抛出的异常
        'no-unmodified-loop-condition': 2, // 禁用一成不变的循环条件
        'no-useless-call': 2, // 禁用不必要的 .call() 和 .apply()
        'no-useless-concat': 2, // 禁止没有必要的字符拼接
        'no-useless-escape': 2, // 禁用不必要的转义
        'no-useless-return': 2, // 禁止多余的 return 语句
        'no-void': 2, // 禁止使用void操作符
        'no-with': 2, // 禁用 with 语句
        'prefer-promise-reject-errors': 1, // 要求使用 Error 对象作为 Promise 拒绝的原因
        'require-await': 2, // 禁止使用不带 await 表达式的 async 函数
        'vars-on-top': 2, // 要求将变量声明放在它们作用域的顶部
        'wrap-iife': [2, 'inside'], // 需要把立即执行的函数包裹起来
        strict: [2, 'global'], // 要求或禁止使用严格模式指令
        /**
         * 变量相关的规则
         */
        'no-delete-var': 2, // 禁止删除变量
        'no-shadow': 2, // 禁止变量声明覆盖外层作用域的变量
        'no-shadow-restricted-names': 2, // 关键字不能被遮蔽
        'no-undef': 2, // 禁用未声明的变量
        'no-unused-vars': 1, // 禁止未使用过的变量
        'no-use-before-define': 2, // 禁止定义前使用
        // 代码风格
        'array-bracket-newline': [1, 'consistent'], // ???? 在数组开括号后和闭括号前强制换行
        'array-bracket-spacing': 2, // 强制在括号内前后使用空格
        'array-element-newline': [1, { multiline: true }], // ??? 强制数组元素间出现换行[]
        'block-spacing': 2, // 强制在代码块中开括号前和闭括号后有空格
        'brace-style': 2, // 大括号风格要求
        camelcase: 2, // 要求使用骆驼拼写法
        'comma-dangle': [2, 'always-multiline'], // 要求或禁止使用拖尾逗号
        'comma-spacing': 2, // 强制在逗号周围使用空格
        'comma-style': 2, // 逗号风格
        'computed-property-spacing': 2, // 禁止或强制在计算属性中使用空格
        'consistent-this': [2, 'that'], // 要求一致的 this
        'func-call-spacing': 2, // 要求或禁止在函数标识符和其调用之间有空格
        'func-style': [2, 'declaration'], // ??? 强制 function 声明或表达式的一致性
        'function-paren-newline': [1, 'multiline'], // 强制在函数括号内使用一致的换行
        indent: [2, 2, { SwitchCase: 1 }], // 强制使用一致的缩进
        'jsx-quotes': 2, // 强制在 JSX 属性中一致地使用双引号或单引号
        'key-spacing': 2, // 强制在对象字面量的键和值之间使用一致的空格
        'keyword-spacing': 2, // 强制关键字周围空格的一致性
        'linebreak-style': 0, // 强制使用一致的换行符风格，用\n，不用\r\n
        'lines-around-comment': 2, // 强制注释周围有空行
        'lines-between-class-members': 2, // 要求在类成员之间出现空行
        'max-depth': 1, // 强制块语句的最大可嵌套深度
        'max-len': [
            2,
            {
                // 强制行的最大长度
                code: 120,
                ignoreUrls: true,
                ignoreStrings: true, // mommo????
                ignoreTrailingComments: true,
                ignoreTemplateLiterals: true
            }
        ], //
        'max-lines': [1, 1000], // 强制文件的最大行数
        'max-nested-callbacks': [2, 5], // 强制回调函数最大嵌套深度
        'max-statements-per-line': 2, // 强制每一行中所允许的最大语句数量
        'new-cap': 2, // 要求构造函数首字母大写
        'new-parens': 2, // 要求调用无参构造函数时带括号
        'newline-per-chained-call': 2, // 要求方法链中每个调用都有一个换行符
        'no-bitwise': 2, // 禁止使用按位操作符
        'no-lonely-if': 2, // 禁止 if 语句作为唯一语句出现在 else 语句块中
        'no-mixed-spaces-and-tabs': 2, // 禁止使用 空格 和 tab 混合缩进
        'no-multiple-empty-lines': 1, // 不允许多个空行
        // "no-negated-condition": 2, // 禁用否定表达式
        'no-nested-ternary': 2, // 禁止使用嵌套的三元表达式
        'no-new-object': 2, // 禁止使用 Object 构造函数
        'no-trailing-spaces': 2, // 禁用行尾空白
        'no-underscore-dangle': 2, // 禁止标识符中有悬空下划线
        quotes: [2, 'single'], // 强制使用一致的单引号
        'quote-props': [2, 'as-needed'], // ??? 要求对象字面量属性名称使用引号
        'operator-linebreak': [2, 'before'], // 强制操作符使用一致的换行符风格
        'one-var': [2, 'never'], // 强制函数中的变量在一起声明或分开声明
        'object-property-newline': 1, // 强制将对象的属性放在不同的行上
        'object-curly-spacing': [2, 'always'], // 强制在花括号中使用一致的空格
        'object-curly-newline': [
            1,
            {
                // ??? 对象属性换行
                multiline: true
            }
        ], //
        'no-whitespace-before-property': 2, // 禁止属性前有空白
        'no-unneeded-ternary': 2, // 禁止可以表达为更简单结构的三元操作符
        'semi-spacing': 2, // 强制分号前后有空格
        'semi-style': 2, // 分号风格
        'space-before-blocks': [2, 'always'], // 禁止语句块之前的空格
        'space-before-function-paren': [2, 'never'], // 禁止函数圆括号之前有一个空格
        'space-in-parens': 2, // 禁止或强制圆括号内的空格
        'space-infix-ops': 2, // 要求中缀操作符周围有空格
        'space-unary-ops': 2, // 禁止在一元操作符之前或之后存在空格
        'spaced-comment': 2, // 要求在注释前有空白
        'switch-colon-spacing': 2, // 强制在 switch 的冒号左右有空格
        'template-tag-spacing': 2, // 要求在模板标记和它们的字面量之间有空格
        /**
         * ES6相关规则
         */
        'arrow-parens': [2, 'as-needed'], // 要求箭头函数的参数使用圆括号
        'arrow-body-style': 2, // 要求箭头函数体使用大括号
        'arrow-spacing': 2, // 要求箭头函数的箭头之前或之后有空格
        'generator-star-spacing': [
            2,
            {
                // 强制 generator 函数中 * 号周围有空格
                before: false,
                after: true
            }
        ],
        'no-class-assign': 2, // 不允许修改类声明的变量
        'no-confusing-arrow': 2, // 禁止在可能与比较操作符相混淆的地方使用箭头函数
        'no-const-assign': 2, // 不允许改变用const声明的变量
        'no-dupe-class-members': 2, // 不允许类成员中有重复的名称
        'no-duplicate-imports': 2, // 禁止重复导入
        'no-new-symbol': 0, // 禁止 Symbol 操作符和 new 一起使用lines-between
        'no-useless-computed-key': 2, // 禁止在对象中使用不必要的计算属性
        'no-useless-constructor': 2, // 禁用不必要的构造函数
        'no-useless-rename': 2, // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
        'no-var': 2, // 要求使用 let 或 const 而不是 var
        'object-shorthand': 2, // 要求对象字面量简写语法
        'prefer-arrow-callback': 2, // 要求使用箭头函数作为回调
        'prefer-const': 1, // 建议使用 const
        'prefer-destructuring': [
            2,
            {
                // 优先使用数组和对象解构
                array: false,
                object: true
            }
        ],
        'prefer-rest-params': 2, // 使用剩余参数代替 arguments
        'prefer-spread': 2, // 建议使用扩展运算符而非 .apply()
        'prefer-template': 2, // 建议使用模板而非字符串连接
        'require-yield': 2, // 禁用函数内没有yield的 generator 函数
        'rest-spread-spacing': 2, // 强制剩余和扩展运算符及其表达式之间有空格
        'template-curly-spacing': 2 // 强制模板字符串中空格的使用
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
