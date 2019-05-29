module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'quotes': 'off',
    'no-tabs': [1, { allowIndentationTabs: true }],
    'semi': 'off',
    'space-before-function-paren': 'off',
    'eqeqeq': 'off',
    'intent': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
