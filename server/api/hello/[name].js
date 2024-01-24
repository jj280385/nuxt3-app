export default defineEventHandler((event) => {
  console.log('event',event)
  const { name } = event.context.params
  return `Hello, ${name}!`
})