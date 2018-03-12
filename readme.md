# 5rabbits ESLint config
Shared [ESLint](https://eslint.org/) configuration for Lemontech products.

## Installation

* Install `@5rabbits/eslint-config` and its dependencies:

```shell
$ export PKG=@5rabbits/eslint-config && npm info $PKG peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add --dev $PKG
```

* If you have an `.eslintrc` file, add `"extends": ["@5rabbits"]`.

* If you don't have an `.eslintrc` file, create it on the root of your project:

```shell
$ echo '{\n  "extends": ["@5rabbits"]\n}' > .eslintrc
```

## Usage

* Add a `lint` script to your `package.json`:

  ```json
  {
    "scripts": {
      "lint": "eslint . --ext .js,.jsx"
    }
  }
  ```

* Run with `yarn lint` to check the entire project.

## Prettier

If the projects uses [`prettier`](https://github.com/prettier/prettier) (recommended), install [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) and append `"prettier"` to the `.eslintrc` `extends` array.

## Integrations

### Git
You can use [`husky`](https://github.com/typicode/husky) and [`lint-staged`](https://github.com/okonet/lint-staged) to lint the changed files before commiting. Example:

```json
// package.json
{
  "lint-staged": {
    "*.{js,jsx}": ["eslint"]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
}
```

If the changes causes lint errors the commit will fail until you fix them.

### Webpack

Use [`eslint-loader`](https://github.com/webpack-contrib/eslint-loader) to automatically lint files on webpack builds.

### Rollup

Use [`rollup-plugin-eslint`](https://github.com/TrySound/rollup-plugin-eslint) to automatically lint files on rollup builds.
