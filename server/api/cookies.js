export default defineEventHandler((event) => {
  // 取得cookie
  let counter = getCookie(event, 'counter')

  // 將值傳為num後 +1
  counter = parseInt(counter, 10) || 0
  counter += 1

  // 設置新的value回去cookie
  setCookie(event, 'counter', counter)

  return { counter }
})