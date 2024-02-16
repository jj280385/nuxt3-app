// export default defineEventHandler((event) => {
//   const cookies = parseCookies(event)
//   return {
//     ok: true,
//     data: {
//       cookies
//     }
//   }
// })
export default defineEventHandler((event) => {
  let counter = getCookie(event, 'counter')

  counter = parseInt(counter, 10) || 0
  counter += 1

  setCookie(event, 'counter', counter)

  return { counter }
})