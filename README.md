# eslint-config-front

## Setting

```bash
$ vi ~/.npmrc
//npm.pkg.github.com/:_authToken=${github_token}

$ vi .npmrc
@0soe8:registry=https://npm.pkg.github.com/

```

## Installation

```bash
# Development Run(초기설정)
$ npm i -D @0seo8/eslint-config-crypted
$ touch .eslintrc.js prettierrc.js

# 기존 설치된 패키지와 에러발생시
$ npm i --peer --legacy-peer-deps -D @0seo8/eslint-config-crypted
```

## .eslintrc.js

```bash
module.exports = {
  extends: ['@0seo8/eslint-config/${service-name}']
};

```

## .prettierrc.js

```bash
module.exports = {
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
};
```
