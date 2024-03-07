export default defineEventHandler(() => {
  let counter = 0
  counter += 1

  return {
    name: 'Zora',
    gender: '女',
    email: 'test@example.com',
    counter
  }
})