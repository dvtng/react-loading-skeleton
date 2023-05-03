module.exports = {
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:testing-library/react',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'testing-library'],
  ignorePatterns: ['*.js', '*.cjs', 'dist/', 'vite.config.ts'],
  settings: {
    'testing-library/custom-renders': 'off',
  },
  rules: {
    'no-plusplus': 'off',
    'no-restricted-syntax': [
      'error',
      // Options from https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js
      // with for-of removed
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    'import/extensions': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['src/__stories__/**/*', 'src/__tests__/**/*'],
      },
    ],
    'import/prefer-default-export': 'off',

    'react/require-default-props': 'off',
    'react/function-component-definition': 'off',

    'testing-library/no-node-access': 'off',
  },
};
