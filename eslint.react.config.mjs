import config from './eslint.config.mjs';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

config.push({
    plugins: {
        react: reactPlugin,
        'react-hooks': reactHooksPlugin,
    },
    rules: {
        ...reactPlugin.configs.recommended.rules,
        ...reactHooksPlugin.configs.recommended.rules,
        // https://eslint.org/docs/latest/rules/class-methods-use-this
        // Make a warning if the method should be `static` and enforce that class methods utilize this
        'class-methods-use-this': 'warn',
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md
        // Disallow declaring unused methods of component class
        'react/no-unused-class-component-methods': 'warn',
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
        // Disallow missing props validation in a React component definition.
        // ! Typescript uses no PropType
        'react/prop-types': 'off',
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
        // Disallow usage of isMounted.
        // ! It was a warning, but no isMounted used, so disable this.
        'react/no-is-mounted': 'off',
        // https://typescript-eslint.io/rules/restrict-template-expressions/
        // Enforce template literal expressions to be of a string type.
        '@typescript-eslint/restrict-template-expressions': 'off',
    },
    languageOptions: {
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
            ecmaVersion: 12,
            // for @typescript/eslint-parser
            jsxPragma: 'React',
        },
    },
    settings: {
        react: {
            // Automatically detect the React version
            version: 'detect',
        },
    },
});

export default config;
