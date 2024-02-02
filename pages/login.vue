<template>
  <div class="flex flex-col items-center border border-red-300">
    <ClientOnly>
      <!-- <GoogleLogin :callback="callback" prompt /> -->
      <GoogleLogin :callback="callback">
        <button type="button" class="text-black" @click="handleGoogleLogin">
          使用 Google 繼續
        </button>
      </GoogleLogin>
    </ClientOnly>
  </div>
</template>

<script setup>
// const callback = (response) => {
//   console.log('GoogleLogin',response)
// }

// import { googleOneTap } from 'vue3-google-login';

// onMounted(() => {
//   googleOneTap()
//     .then((response) => {
//       console.log('response', response);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// });

import { googleAuthCodeLogin } from 'vue3-google-login';

const runtimeConfig = useRuntimeConfig();
const { googleClientId: GOOGLE_CLIENT_ID } = runtimeConfig.public;
const userInfo = ref();

const handleGoogleLogin = async () => {
  const accessToken = await googleAuthCodeLogin({
    clientId: GOOGLE_CLIENT_ID,
  }).then((response) => response?.access_token);

  if (!accessToken) return '登入失敗';

  const { data } = await useFetch('/api/auth/google', {
    method: 'POST',
    body: { accessToken },
    initialCatch: false,
  });

  userInfo.value = data.value;
};
</script>
