// 發送請求時先驗證並解析JWT，
import jwt from 'jsonwebtoken'

const runtimeConfig = useRuntimeConfig()

export default defineEventHandler((event) => {
  const jwtToken = getCookie(event, 'access_token')

  if (!jwtToken) {
    return
  }

  let userInfo = null

  try {
    // 驗證
    const { data } = jwt.verify(jwtToken, runtimeConfig.jwtSignSecret)

    userInfo = data


    if (userInfo?.id) {
      // 在event.context.auth 添加使用者資訊
      event.context.auth = {
        user: {
          id: userInfo.id
        }
      }
    }
  } catch (e) {}
})