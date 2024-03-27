module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
    'unused-imports',
    'prettier',
  ],
  extends: ['prettier'],
  rules: {
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        json: 'ignorePackages',
      },
    ],
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'import/order': [
      'warn',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: [
          'type',
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'unknown',
        ],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '{react*,react*/**}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@tanstack*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'src/features/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'src/helpers/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'src/hooks/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'src/pages/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'src/components/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'src/styles/*',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
  },
};
