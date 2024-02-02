<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-6xl font-semibold text-gray-800">這裡是首頁</h1>
      <div class="my-4 flex space-x-4">
        <NuxtLink to="/posts"><p class="text-black">前往 Posts</p></NuxtLink>
        <NuxtLink to="/about"><p class="text-black">前往 About</p></NuxtLink>
        <NuxtLink to="/contact"><p class="text-black">前往 Contact</p></NuxtLink>
        <NuxtLink to="/count/useAsyncData"><p class="text-black">前往 useAsyncData</p></NuxtLink>
        <NuxtLink to="/abouts/useFetch"><p class="text-black">前往 useFetch</p></NuxtLink>
        <NuxtLink to="/count/useLazyAsyncData"
          ><p class="text-black">前往 useLazyAsyncData</p></NuxtLink
        >
        <NuxtLink to="/counter/increment"><p class="text-black">前往 increment</p></NuxtLink>
        <NuxtLink to="/counter/surprise"><p class="text-black">前往 surprise</p></NuxtLink>
        <NuxtLink to="/color"><p class="text-black">前往 color</p></NuxtLink>
      </div>
      <div>
        <NuxtLink to="/counter"><p class="text-black">前往 counter</p></NuxtLink>
      </div>
      <div>
        <p class="mt-4 text-2xl text-gray-600">theme.darkMode:</p>
        <span class="mt-4 text-3xl font-semibold text-blue-500">{{ theme.darkMode }}</span>
      </div>
      <!-- <q-btn color="primary" label="Primary" @click="submit" /> -->
    </div>

  </div>
</template>
<script setup>
const appConfig = useAppConfig();
const { theme } = appConfig;

definePageMeta({
  middleware: 'named-test',
});

// function submit() {
//   const response = $fetch('/api/hello', {});
//   console.log('submit', response);
// }
</script>
