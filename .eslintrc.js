module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  rules: {
    indent: ['error', 2, { MemberExpression: 'off' }],
    "no-undef": ["error"]
  },
  globals: {
    defineProps: "readonly"
  }
}
