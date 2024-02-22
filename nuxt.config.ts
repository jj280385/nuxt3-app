// https://nuxt.com/docs/api/configuration/nuxt-config
// import materialIcons from 'quasar/icon-set/svg-material-icons';
// import materialIconsRound from 'quasar/icon-set/svg-material-icons-round';

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    // 'nuxt-quasar-ui',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/i18n'
  ],
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  // quasar: {
  //   plugins: ['AppFullscreen', 'BottomSheet', 'Dialog', 'Loading', 'LoadingBar', 'Notify'],
  //   iconSet: {
  //     ...materialIcons,
  //     colorPicker: materialIconsRound.colorPicker,
  //   },
  //   extras: {
  //     font: 'roboto-font',
  //     fontIcons: ['material-icons'],
  //     animations: 'all',
  //   },
  //   config: {
  //     dark: true,
  //   },
  //   components: {
  //     defaults: {
  //       QBtn: {
  //         glossy: true,
  //       },
  //     },
  //   },
  // },
  runtimeConfig: {
    apiSecret: '怎麼可以讓你知道呢 :P',
    public: {
      apiBase: '/api',
      googleClientId: '499349710100-kdtppmueu70ssf4mdflnucjhtuo7jbsp.apps.googleusercontent.com',
    },
    // jwtSignSecret 作為核發 JWT 的簽署金鑰
    jwtSignSecret: 'PLEASE_REPLACE_WITH_YOUR_KEY',
  },
  
  // 需要解析的第三方套件，需在此設定轉化
  build: {
    transpile: ['@headlessui/vue']
  },
  app: {
    pageTransition: {
      name: 'blur',
    },
    layoutTransition: {
      name: 'rotate',
    }  
  },
  i18n: {
      langDir: 'locales',
      locales: [
        {
          code: 'en',
          iso: 'en-US',
          file: 'en.json',
          name: 'en'
        },
        {
          code: 'zh',
          iso: 'zh-TW',
          file: 'zh.json',
          name: 'zh-TW'
        }
      ],
      defaultLocale: 'zh',
      strategy: 'no_prefix',
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n'
      },
  }
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
