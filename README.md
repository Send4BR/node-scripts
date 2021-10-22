# aftersale node scripts

## Installation

This module is distributed via GitHub. You can install it as a dev dependency:

```
$ npm i -D https://github.com/Send4BR/node-scripts
```

## Usage

#### ESLint

You can use the `extends` config and extend the ESLint configuration:

```js
// .eslintrc.js
module.exports = {
  extends: "@aftersale/node-scripts/eslint"
}
```

#### Prettier

Prettier doesn't offer a great way to extend configuration, but you can rely on object destructuring. See the example:

```js
// .prettierrc.js
module.exports = {
  ...require("@aftersale/node-scripts/prettier"),
  semi: false
}
```

Or just re-export this settings:

```js
// .prettierrc.js
module.exports = require("@aftersale/node-scripts/prettier");
```

## Local Development

Just clone this repository then run `npm link`. Now go
to another local package then run `npm link @aftersale/node-scripts`.