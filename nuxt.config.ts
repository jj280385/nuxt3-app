// https://nuxt.com/docs/api/configuration/nuxt-config
import materialIcons from 'quasar/icon-set/svg-material-icons';
import materialIconsRound from 'quasar/icon-set/svg-material-icons-round';

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    'nuxt-quasar-ui',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  quasar: {
    plugins: ['AppFullscreen', 'BottomSheet', 'Dialog', 'Loading', 'LoadingBar', 'Notify'],
    iconSet: {
      ...materialIcons,
      colorPicker: materialIconsRound.colorPicker,
    },
    extras: {
      font: 'roboto-font',
      fontIcons: ['material-icons'],
      animations: 'all',
    },
    config: {
      dark: true,
    },
    components: {
      defaults: {
        QBtn: {
          glossy: true,
        },
      },
    },
  },
  runtimeConfig: {
    apiSecret: '怎麼可以讓你知道呢 :P', 
    public: {
      apiBase: '/api'
    }
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

//已另外獨立配置檔
// appConfig: {
//   theme: {
//     primaryColor: '#0ea5e9',
//   }
// },

// https://nitro.unjs.io/config
// nitro: {}
