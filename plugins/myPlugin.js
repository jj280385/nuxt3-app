// export default defineNuxtPlugin(() => {
//   return {
//     provide: {
//       hello: (msg) => `Hello ${msg}!`
//     }
//   }
// })

export default defineNuxtPlugin(() => {
  addRouteMiddleware('global-test', () => {
    console.log('這個是由插件添加的全域中間件，並將在每次路由變更時執行')
  }, { global: true })

  addRouteMiddleware('named-test', () => {
    console.log('這個是由插件添加的具名中間件，並將會覆蓋任何現有的同名中間件')
  })
})