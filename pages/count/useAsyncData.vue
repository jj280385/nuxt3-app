<template>
  <div class="my-24 flex flex-col items-center">
    <p class="text-4xl text-gray-600">瀏覽次數</p>
    <span class="mt-4 text-6xl font-semibold text-sky-400">{{ data }}</span>
    <button @click="refresh">Refresh</button>
  </div>
</template>

<script setup>
const { data, pending, error } = await useAsyncData('count', () => $fetch('/api/count'));

const refresh = () => refreshNuxtData('count');

</script>
