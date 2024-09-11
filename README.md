# Eslint config for ioBroker projects

## Installation
Install the package via 

```bash
npm i @iobroker/eslint-config --save-dev
```

## Getting started
Just extend this project in your lint config in your `eslint.config.mjs`.

```js
import config from '@iobroker/eslint-config';

export default [...config];
```

And create a `prettier.config.mjs` with the following content:

```js
import prettierConfig  from '@iobroker/eslint-config/prettier.config.mjs';

export default prettierConfig;
```

Optionally, if you are using ESM modules, there is an additional config. 
Your `eslint.config.mjs` would then look like this:

```js
import config, { esmConfig } from '@iobroker/eslint-config';

export default [...config, ...esmConfig];
```

## Changelog

<!--
  Placeholder for the next version (at the beginning of the line):
  ### **WORK IN PROGRESS**
-->
### 0.1.4 (2024-09-11)
* (@GermanBluefox) adjust initial `prettier` rules

### 0.1.3 (2024-09-10)
* (@foxriver76) fixed problems with tsconfig

### 0.1.2 (2024-09-06)
* (@foxriver76) initial release