// ESLint 檢查 JavaScript Coding Style 的工具
module.exports = {
  env: {
    browser: true,
    es2023: true,
  },
  // extends: ESLint 規則與配置
  extends: ['@nuxtjs/eslint-config-typescript','prettier'],
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'no-undef': 'off',
    'prettier/prettier': 'error'
  }
}
