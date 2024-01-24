<template>
  <NuxtLayout name="custom">
    <!-- 等於./layouts/custom.vue的 <slot /> -->
    <template #default>
      <div class="mx-6 mb-4 bg-white py-24">
        <div class="flex flex-col items-center">
          <h1 class="text-6xl font-semibold text-sky-400">路由中間件進來的~</h1>
          <p class="mt-4 text-5xl font-bold text-gray-600">hahahaha</p>
        </div>
      </div>
    </template>
    <!-- 等於./layouts/custom.vue的 <slot name="footer" /> -->
    <template #footer>
      <div class="flex flex-col items-center">
        <p class="mt-4 text-xl text-slate-600">footer</p>
      </div>
    </template>
  </NuxtLayout>
</template>
<script setup>
// 使用definePageMeta設定特定的布局模板
definePageMeta({
  // name or false 禁用預設模板
  // 若選擇禁用預設模板，則須在外層NuxtLayout指定模板name
  layout: 'false' 
})
</script>
