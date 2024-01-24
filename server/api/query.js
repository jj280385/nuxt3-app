export default defineEventHandler(async (event) => {
  const query =  getQuery(event)
  return {
    ok: true,
    data: query.name
  }
})