module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['eslint:recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: { 'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }] }
};
