// 以下function用於取得Schema資料
import prisma from '@/server/utils/prismaClient'

class User {
  // 尋找使用者
  async getUserByProvider(options) {
    const userRecord = await prisma.user
      .findFirst({
        where: {
          providerName: options.providerName,
          providerUserId: options.providerUserId
        }
      })
      .catch((error) => {
        console.error(error)
        throw createError({
          statusCode: 500,
          statusMessage: 'Could not find user. Please try again later.'
        })
      })

    return userRecord
  }

  // 新增使用者
  async createUser(options) {
    const userRecord = await prisma.user
      .create({
        data: {
          providerName: options.providerName,
          providerUserId: options.providerUserId,
          nickname: options.nickname,
          email: options.email,
          password: options.password,
          avatar: options.avatar,
          emailVerified: options.emailVerified
        }
      })
      .catch((error) => {
        console.error(error)
        throw createError({
          statusCode: 500,
          statusMessage: 'Could not create user. Please try again later.'
        })
      })

    return userRecord
  }

  // 取得使用者mail
  async getUserByEmail(options) {
    const userRecord = await prisma.user
      .findFirst({
        where: {
          email: options.email
        }
      })
      .catch((error) => {
        console.error(error)
        throw createError({
          statusCode: 500,
          statusMessage: 'Could not find user. Please try again later.'
        })
      })

    return userRecord
  }

  // 取得使用者ID
  async getUserById(options) {
    const userRecord = await prisma.user
      .findFirst({
        where: {
          id: options.id
        }
      })
      .catch((error) => {
        console.error(error)
        throw createError({
          statusCode: 500,
          statusMessage: 'Could not find user. Please try again later.'
        })
      })

    return userRecord
  }
}

const user = new User()

export default user