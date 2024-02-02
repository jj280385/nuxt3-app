import { OAuth2Client } from 'google-auth-library';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // 一般驗證
  //  const oauth2Client = new OAuth2Client()
  // oauth2Client.setCredentials({ access_token: body.accessToken })

  // const userInfo = await oauth2Client
  //   .request({
  //     url: 'https://www.googleapis.com/oauth2/v3/userinfo'
  //   })
  //   .then((response) => response.data)
  //   .catch(() => null)

  // oauth2Client.revokeCredentials()

  // if (!userInfo) {
  //   throw createError({
  //     statusCode: 400,
  //     statusMessage: 'Invalid token'
  //   })
  // }

  // return {
  //   id: userInfo.sub,
  //   name: userInfo.name,
  //   avatar: userInfo.picture,
  //   email: userInfo.email,
  //   emailVerified: userInfo.email_verified,
  // }

  // 登入方式如果是預設按鈕 or One Tap Prompt 回傳值包含Credential
  // const oauth2Client = new OAuth2Client()
  // const ticket = await oauth2Client.verifyIdToken({
  //   idToken: body.credential,
  // })

  // const payload = ticket.getPayload()

  // if (!payload) {
  //   throw createError({
  //     statusCode: 400,
  //     statusMessage: 'Invalid token'
  //   })
  // }

  // return {
  //   id: payload.sub,
  //   name: payload.name,
  //   avatar: payload.picture,
  //   email: payload.email,
  //   emailVerified: payload.email_verified
  // }

  // 登入方式使用googleAuthCodeLogin()，回傳值包含auth code
  const oauth2Client = new OAuth2Client({
    clientId: '你的 Google Client ID',
    clientSecret: '你的 Google Client Secret',
    redirectUri: '你的 Google Redirect Uri',
  });

  let { tokens } = await oauth2Client.getToken(body.authCode);
  oauth2Client.setCredentials({ access_token: tokens.access_token });

  const userInfo = await oauth2Client
    .request({
      url: 'https://www.googleapis.com/oauth2/v3/userinfo',
    })
    .then((response) => response.data)
    .catch(() => null);

  oauth2Client.revokeCredentials();

  if (!userInfo) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid token',
    });
  }

  return {
    id: userInfo.sub,
    name: userInfo.name,
    avatar: userInfo.picture,
    email: userInfo.email,
    emailVerified: userInfo.email_verified,
  };
});
