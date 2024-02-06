// 自定義按鈕
import { OAuth2Client } from 'google-auth-library'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const oauth2Client = new OAuth2Client()
  oauth2Client.setCredentials({ access_token: body.accessToken })

  console.log('event',event)

  const userInfo = await oauth2Client
    .request({
      url: 'https://www.googleapis.com/oauth2/v3/userinfo'
    })
    .then((response) => response.data)
    .catch(() => null)
console.log('userInfo',userInfo)
  oauth2Client.revokeCredentials()

  if (!userInfo) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid token'
    })
  }

  setCookie(event, 'access_token', accessToken, {
    httpOnly: true,
    maxAge,
    expires: new Date(expires * 1000),
    secure: process.env.NODE_ENV === 'production',
    path: '/'
  })

  return {
    id: userInfo.sub,
    name: userInfo.name,
    avatar: userInfo.picture,
    email: userInfo.email,
    emailVerified: userInfo.email_verified,
  }
})

// 使用預設按鈕or one tap prompt，回傳值包含credential
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

// 使用googleAuthCodeLogin()，回傳值包含Auth Code
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
