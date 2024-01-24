// Prettier 程式碼格式化工具配置
// options: https://prettier.io/docs/en/options.html
module.exports = {
  plugins: [
    'prettier-plugin-tailwindcss'
  ],
  printWidth: 100,          // 每行文字數量達 100 字元就換到新的一行
  semi: true,              // 每個語句的結尾需不需要分號
  singleQuote: true,        // 字串使用單引號，而不是雙引號
  trailingComma: 'all'     // 如 Object、Array 內的元素需不需要尾隨逗號
}