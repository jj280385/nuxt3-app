export default defineEventHandler((event) => {
  event.context.auth = { username: 'zora' }
  console.log('auth:', event.context.auth.username)
})