<template>
  <div class="flex flex-col items-center border border-red-300 p-10">
    <!-- <ClientOnly>
      <GoogleLogin :callback="callback" prompt/>
    </ClientOnly> -->
    <ClientOnly>
    <GoogleLogin :callback="callback" >
        <button @click="handleGoogleLogin">
          使用 Google 繼續
        </button>
      </GoogleLogin>
    </ClientOnly>
    <!-- <button type="button" @click="handleGoogleLogin" class="text-black">使用 Google 繼續</button> -->
    <div>
      <p class="text-black">{{ userInfo }}</p>
    </div>
  </div>
</template>

<script setup>
import { googleTokenLogin } from 'vue3-google-login'

const runtimeConfig = useRuntimeConfig()
const { googleClientId: GOOGLE_CLIENT_ID } = runtimeConfig.public

const userInfo = ref()

const handleGoogleLogin = async () => {
  const accessToken = await googleTokenLogin({
    clientId: GOOGLE_CLIENT_ID
  }).then((response) => response?.access_token)

  if (!accessToken) {
    return '登入失敗'
  }
  console.log('accessToken',accessToken)
  const { data } = await useFetch('/api/auth/google', {
    method: 'POST',
    body: {
      accessToken
    },
    initialCache: false
  })
console.log('userInfo',userInfo)
  userInfo.value = data.value
}

// const callback = (response) => {
//   console.log('response',response)
// }
</script>
