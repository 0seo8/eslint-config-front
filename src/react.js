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
  extends: ['react-app', 'prettier'],
  rules: {
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
