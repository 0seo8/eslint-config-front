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
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'airbnb',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.ts', '.jsx', '.tsx'] },
    ],
    'jsx-a11y/no-autofocus': 'off',
    'no-use-before-define': 'off',
    'no-unused-vars': 'off',
    'no-param-reassign': ['error', { props: false }],
    'unused-imports/no-unused-imports': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-array-index-key': 'warn',
    'react/require-default-props': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react-hooks/exhaustive-deps': [
      'error',
      {
        enableDangerousAutofixThisMayCauseInfiniteLoops: true,
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
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
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
  },
  overrides: [
    {
      files: '**/*.+(ts|tsx)',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint'],
      extends: ['airbnb-typescript', 'plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/space-before-blocks': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
      },
    },
  ],
};
