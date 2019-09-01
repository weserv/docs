module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    indent: ['error', 2, { MemberExpression: 'off' }],
    "no-undef": ["error"]
  }
}
