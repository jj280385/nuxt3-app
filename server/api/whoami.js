import jwt from 'jsonwebtoken'

const runtimeConfig = useRuntimeConfig()

export default defineEventHandler((event) => {
  //  cookie 得到 access_token
  const jwtToken = getCookie(event, 'access_token')

  try {
    // jwt.verify() 方法，來驗證 JTW 後的到使用者資訊
    const { data: userInfo } = jwt.verify(jwtToken, runtimeConfig.jwtSignSecret)

    return {
      id: userInfo.id,
      nickname: userInfo.nickname,
      email: userInfo.email
    }
  } catch (e) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized'
    })
  }
})