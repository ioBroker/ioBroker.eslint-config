# Eslint config for ioBroker projects

## Installation

Install the package via

```bash
npm i @iobroker/eslint-config --save-dev
```

## Getting started

Just extend this project in your lint config in your `eslint.config.mjs`.

```js
import config, { jsdocConfig } from '@iobroker/eslint-config';

export default [...config, ...jsdocConfig];
```

You can remove the `jsdocConfig` if you don't want to enforce JSDoc comments.

And create a `prettier.config.mjs` with the following content:

```js
import prettierConfig from '@iobroker/eslint-config/prettier.config.mjs';

export default prettierConfig;
```

Optionally, if you are using ESM modules, there is an additional config.
Your `eslint.config.mjs` would then look like this:

```js
import config, { jsdocConfig, esmConfig } from '@iobroker/eslint-config';

export default [...config, ...jsdocConfig, ...esmConfig];
```

## ReactJS project

To use this config in a ReactJS project, your `eslint.config.mjs` would then look like this:

```js
import config, { reactConfig, jsdocConfig } from '@iobroker/eslint-config';

export default [...config, ...jsdocConfig, ...reactConfig];
```

It is suggested to create separate `eslint.config.mjs` files for backend and for ReactJS.

## Hot to migrate from `.eslintrc.json` to `iobroker.eslint-config`

Execute all previously described steps and then remove the `.eslintrc.json` file.

You should modify or add the `lint` script in your `package.json`:

```json
{
    "scripts": {
        "lint": "eslint -c eslint.config.mjs src"
    }
}
```

Where `src` is the folder with your source code.

## Changelog

<!--
  Placeholder for the next version (at the beginning of the line):
  ### **WORK IN PROGRESS**
-->

### **WORK IN PROGRESS**

-   (@GermanBluefox) Made jsdoc rules optional

### 0.1.6 (2024-09-16)

-   (@GermanBluefox) Enforce the use of template literals instead of string concatenation: "Hello, " + name + "!" => `Hello, ${name}!`
-   (@GermanBluefox) Added `no-else-return` rule

### 0.1.5 (2024-09-12)

-   (@GermanBluefox) added ReactJS eslint config file

### 0.1.4 (2024-09-11)

-   (@GermanBluefox) adjust initial `prettier` rules

### 0.1.3 (2024-09-10)

-   (@foxriver76) fixed problems with tsconfig

### 0.1.2 (2024-09-06)

-   (@foxriver76) initial release
