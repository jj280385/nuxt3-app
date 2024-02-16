//------------------------------------------------------
// 自定義google oauth登入按鈕
//------------------------------------------------------

// import { OAuth2Client } from 'google-auth-library'

// export default defineEventHandler(async (event) => {
//   const body = await readBody(event)
//   const oauth2Client = new OAuth2Client()
//   oauth2Client.setCredentials({ access_token: body.accessToken })

//   console.log('event',event)

//   const userInfo = await oauth2Client
//     .request({
//       url: 'https://www.googleapis.com/oauth2/v3/userinfo'
//     })
//     .then((response) => response.data)
//     .catch(() => null)
// console.log('userInfo',userInfo)
//   oauth2Client.revokeCredentials()

//   if (!userInfo) {
//     throw createError({
//       statusCode: 400,
//       statusMessage: 'Invalid token'
//     })
//   }

//   setCookie(event, 'access_token', accessToken, {
//     httpOnly: true,
//     maxAge,
//     expires: new Date(expires * 1000),
//     secure: process.env.NODE_ENV === 'production',
//     path: '/'
//   })

//   return {
//     id: userInfo.sub,
//     name: userInfo.name,
//     avatar: userInfo.picture,
//     email: userInfo.email,
//     emailVerified: userInfo.email_verified,
//   }
// })

//------------------------------------------------------
// 使用預設按鈕or one tap prompt，回傳值包含credential
//------------------------------------------------------

// import { OAuth2Client } from 'google-auth-library'

// export default defineEventHandler(async (event) => {
//   const body = await readBody(event)
//   const oauth2Client = new OAuth2Client()

//   const ticket = await oauth2Client.verifyIdToken({
//     idToken: body.credential,
//   })

//   const payload = ticket.getPayload()

//   if (!payload) {
//     throw createError({
//       statusCode: 400,
//       statusMessage: 'Invalid token'
//     })
//   }
// console.log('payload',payload)
//   return {
//     id: payload.sub,
//     name: payload.name,
//     avatar: payload.picture,
//     email: payload.email,
//     emailVerified: payload.email_verified
//   }
// })


//------------------------------------------------------
// 使用googleAuthCodeLogin()，回傳值包含Auth Code
//------------------------------------------------------

// import { OAuth2Client } from 'google-auth-library';

// const runtimeConfig = useRuntimeConfig()
// const { googleClientId: GOOGLE_CLIENT_ID } = runtimeConfig.public;

// export default defineEventHandler(async (event) => {
//   const body = await readBody(event);
//   const oauth2Client = new OAuth2Client({
//     clientId: GOOGLE_CLIENT_ID,
//     clientSecret: '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',
//     redirectUri:
//       'https://www.notion.so/1a176838ab95481dab4c2de57fae8d2f?v=e3f650685b6d4014868f4d342b5c94dc',
//   });

//   let { tokens } = await oauth2Client.getToken(body.authCode);
//   oauth2Client.setCredentials({ access_token: tokens.access_token });

//   const userInfo = await oauth2Client
//     .request({
//       url: 'https://www.googleapis.com/oauth2/v3/userinfo',
//     })
//     .then((response) => response.data)
//     .catch(() => null);

//   oauth2Client.revokeCredentials();

//   if (!userInfo) {
//     throw createError({
//       statusCode: 400,
//       statusMessage: 'Invalid token',
//     });
//   }
// console.log('userInfo',userInfo)
//   return {
//     id: userInfo.sub,
//     name: userInfo.name,
//     avatar: userInfo.picture,
//     email: userInfo.email,
//     emailVerified: userInfo.email_verified,
//   };
// });

//------------------------------------------------------
// 搭配jsonwebtoken產生JWT
//------------------------------------------------------
import { OAuth2Client } from 'google-auth-library'
import jwt from 'jsonwebtoken'

// useRuntimeConfig() 取得nuxt.config.ts的runtimeConfig
const runtimeConfig = useRuntimeConfig();

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const oauth2Client = new OAuth2Client()
  // 夾帶accessToken作為條件傳至api
  oauth2Client.setCredentials({ access_token: body.accessToken })

  const userInfo = await oauth2Client
    .request({
      url: 'https://www.googleapis.com/oauth2/v3/userinfo'
    })
    .then((response) => response.data)
    .catch(() => null)

  // 使用revokeCredentials()清除憑證
  oauth2Client.revokeCredentials()

  // 錯誤處理
  if (!userInfo) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid token'
    })
  }

  // Payload中放置使用者資訊
  const jwtTokenPayload = {
    id: userInfo.sub,
    nickname: userInfo.name,
    email: userInfo.email
  }

  // 過期期限設置
  const maxAge = 60 * 60 * 24 * 7
  const expires = Math.floor(Date.now() / 1000) + maxAge

  const jwtToken = jwt.sign(
    {
      exp: expires,
      data: jwtTokenPayload
    },
    runtimeConfig.jwtSignSecret
  )

  // 設置cookie
  setCookie(event, 'access_token', jwtToken, {
    httpOnly: true,
    maxAge,
    expires: new Date(expires * 1000),
    secure: process.env.NODE_ENV === 'production',
    path: '/'
  })

  return {
    id: userInfo.id,
    nickname: userInfo.name,
    avatar: userInfo.picture,
    email: userInfo.email
  }
})