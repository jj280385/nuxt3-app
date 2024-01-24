<template>
  <NuxtLayout name="custom">
    <template #default>
      <div class="bg-white py-24">
      <div class="flex flex-col items-center">
        <h1 class="text-6xl font-semibold text-sky-400">此頁禁用預設layout / layout為custom</h1>
        <p class="mt-4 text-9xl font-bold text-gray-600">Contact</p>
      </div>
    </div>
    </template>
    <template #footer>
      <NuxtLink to="/">回到Home</NuxtLink>
    </template>
  </NuxtLayout>
</template>
<script setup>
definePageMeta({
  // name or false 禁用預設模板
  // 若選擇禁用預設模板，則須在外層NuxtLayout指定模板name
  layout: 'false',
});
</script>
