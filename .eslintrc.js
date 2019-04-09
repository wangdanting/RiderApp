module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb-base',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended'
  ],
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
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'class-methods-use-this': 'off',
    'import/no-unresolved': [2, { ignore: ['^@/'] }]
  }
};
