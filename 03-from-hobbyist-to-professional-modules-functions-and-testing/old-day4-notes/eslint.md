Setup ESLint
===

## Check Node Version

From terminal:

```sh
> node --version
```

## Install `eslint`

From terminal:

```sh
> npm install -g eslint
```

If above fails (for now):

```sh
> sudo npm install -g eslint
```

## Install VSCode Extension

(Skip if above failed)

* Search for "ESLint", author is Dirk Baeumer
* `Install`
* `Reload`

## Copy `.eslintrc` configuration file

Copy Foundations One `.eslintrc`

To disable a rule once:

```js
const myCoolNumber = 7; // eslint-disable-line
```

To disable a rule everywhere, go into the rules property of your `.eslintrc`

```js
...
    "no-unused-vars": 0
...
```

## VSCode Tab Setting

Make sure our default vscode is 4 spaces

