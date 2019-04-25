module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['prettier', 'react'],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'import/no-unresolved': [2, { ignore: ['^@/'] }],
    'no-empty': 'off',
    'no-use-before-define': ['error', { variables: false }]
  }
};
