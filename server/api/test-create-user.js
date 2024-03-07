// 此API用於實作create user info to Prisma Schema
// 建立 Prisma Client，用於操作modal
import { PrismaClient } from '@prisma/client';
const prismaClient = new PrismaClient();

export default defineEventHandler(()=>{
  const user = prismaClient.user.create({
    data: {
      providerName: null,
      providerUserId: null,
      nickname: 'Zora',
      email: 'zora@ceos.software',
      password: '這裡要放密碼的雜湊值',
      avatar: '',
      emailVerified: true
    }
  })

  return user;
})