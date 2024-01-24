// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss','nuxt-icon'],
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
});
// 修改預設目錄名稱時須在dir中設定
// 可修改的目錄為:layouts、middleware、pages、public
// dir: {
//   pages: 'views',
// }

// 預設Nuxt不需要另外import components中的組件
// 若要關閉則要關閉autoImport
// imports: {
//   autoImport: false
// }

// composables目錄下分類(ex: /counter/index.js )
// imports: {
//   dirs: [
//      掃描 composables 目錄頂層
//     'composables',
//      掃描深度一層的特定檔案
//     'composables/*/index.{ts,js,mjs,mts}',
//      掃描整個 composables 目錄下的檔案
//     'composables/**'
//   ]
// }

// https://nitro.unjs.io/config
// nitro: {}
