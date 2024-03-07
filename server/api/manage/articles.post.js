// 此API用於新增文章，將文章內容存放於Prisma Schema
import db from '@/server/db'

export default defineEventHandler(async(event)=>{
  // 進入伺服器中間件，透過JWT解析，取得使用者資料
  const user = event.context?.auth?.user

  if (!user?.id) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized from articles.post api'
    })
  }

  const body = await readBody(event)
  const authorId = user.id
  // 將文章內容存入db
  const articleRecord = await db.article.createArticle({
    title: body.title,
    content: body.content,
    // summary: body.summary,
    cover: body.cover,
    tags: body.tags,
    authorId
  })

  if (!articleRecord) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Create article failed. Please try again later.'
    })
  }

  return articleRecord
})