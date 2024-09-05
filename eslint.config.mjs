import eslintPluginUnicorn from "eslint-plugin-unicorn";
import eslint from "@eslint/js";
import jsdoc from "eslint-plugin-jsdoc";
import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

/**
 * Rules for all JSDOC plugin usages
 */
const jsdocRules = {
  "jsdoc/require-returns": 0,
  "jsdoc/tag-lines": ["error", "never", { "startLines": 1 }],
  "jsdoc/no-blank-blocks": ["error", { "enableFixer": true }],
  "jsdoc/require-jsdoc": ["warn", {
    "publicOnly": true,
    "require": { "ClassDeclaration": true, "MethodDefinition": true, "FunctionDeclaration": true },
    "contexts": ["TSInterfaceDeclaration", "TSMethodSignature","TSPropertySignature"]
  }]
};

/**
 * Rules for all unicorn plugin usages
 */
const unicornRules = {
  "unicorn/prefer-module": "error",
  "unicorn/prefer-node-protocol": "error"
};

/** General TypeScript rules */
const tsRules = {
  "jsdoc/require-returns": 0,
  "jsdoc/tag-lines": ["error", "never", { "startLines": 1 }],
  "jsdoc/no-blank-blocks": ["error", { "enableFixer": true }],
  "@typescript-eslint/no-parameter-properties": "off",
  "@typescript-eslint/no-explicit-any": "off",
  "@typescript-eslint/no-use-before-define": [
    "error",
    {
      "functions": false,
      "typedefs": false,
      "classes": false
    }
  ],
  "@typescript-eslint/no-unused-vars": [
    "error",
    {
      "ignoreRestSiblings": true,
      "argsIgnorePattern": "^_",
      "caughtErrors": "all"
    }
  ],
  "@typescript-eslint/no-object-literal-type-assertion": "off",
  "@typescript-eslint/interface-name-prefix": "off",
  "@typescript-eslint/no-non-null-assertion": "off",
  "@typescript-eslint/no-inferrable-types": [
    "error",
    {
      "ignoreProperties": true,
      "ignoreParameters": true
    }
  ],
  "@typescript-eslint/ban-ts-comment": [
    "error",
    {
      "ts-expect-error": false,
      "ts-ignore": true,
      "ts-nocheck": true,
      "ts-check": false
    }
  ],
  "@typescript-eslint/restrict-template-expressions": [
    "error",
    {
      "allowNumber": true,
      "allowBoolean": true,
      "allowAny": true,
      "allowNullish": true
    }
  ],
  "@typescript-eslint/no-misused-promises": [
    "error",
    {
      "checksVoidReturn": false
    }
  ],
  "@typescript-eslint/explicit-function-return-type": [
    "error",
    {
      "allowTypedFunctionExpressions": true,
      "allowExpressions": true
    }
  ],
  "@typescript-eslint/no-unsafe-argument": "off",
  "@typescript-eslint/no-unsafe-assignment": "off",
  "@typescript-eslint/no-unsafe-member-access": "off",
  "@typescript-eslint/no-unsafe-return": "off",
  "@typescript-eslint/no-unsafe-call": "off",
  "@typescript-eslint/no-implied-eval": "off",
  "@typescript-eslint/explicit-module-boundary-types": [
    "error",
    {
      "allowArgumentsExplicitlyTypedAsAny": true
    }
  ],
  "@typescript-eslint/no-this-alias": "off",
  "dot-notation": "off",
  "@typescript-eslint/dot-notation": [
    "error",
    {
      "allowPrivateClassPropertyAccess": true,
      "allowProtectedClassPropertyAccess": true
    }
  ],
  "@typescript-eslint/no-unsafe-declaration-merging": "off",
  "quote-props": [
    "error",
    "as-needed"
  ],
  "@typescript-eslint/consistent-type-imports": "error",
  "@typescript-eslint/consistent-type-exports": "error"
};

/** @type {import("eslint").Linter.FlatConfig[]} */
export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  jsdoc.configs["flat/recommended-typescript"],
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    }
  },
  {
    plugins: { unicorn: eslintPluginUnicorn },
    rules: unicornRules
  },
  {
    files: ["**/*.ts"],
    plugins: { jsdoc },
    rules: jsdocRules
  },
  {
    rules: tsRules
  },
  eslintPluginPrettierRecommended
);