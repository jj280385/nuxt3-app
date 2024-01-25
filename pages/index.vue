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
        <NuxtLink to="/count/useLazyAsyncData"><p class="text-black">前往 useLazyAsyncData</p></NuxtLink>
      </div>
      <!-- <q-btn color="primary" label="Primary" @click="submit" /> -->
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  middleware: 'named-test',
});

// function submit() {
//   const response = $fetch('/api/hello', {});
//   console.log('submit', response);
// }
</script>
