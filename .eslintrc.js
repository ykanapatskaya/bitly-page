// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    jest: true
  },
  extends: [
    'standard',
    'prettier',
    'prettier/standard'
  ],
  rules: {
  }
};
