# Eslint config for ioBroker projects

## Installation
Install the package via 

```bash
npm i @iobroker/eslint-config --save-dev
```

## Getting started
Just extend this project in your lint config in your `eslint.config.mjs`.

```js
import config from '@iobroker/eslint-config'

export default [...config]
```

And create a `prettier.config.js` with the following content:

```js
module.exports = require('@iobroker/eslint-config/prettier');
```

## Changelog

<!--
  Placeholder for the next version (at the beginning of the line):
  ### **WORK IN PROGRESS**
-->

### **WORK IN PROGRESS**
* (@foxriver76) initial release