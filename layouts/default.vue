<template>
  <div class="bg-sky-100 py-2">
    <p class="px-6 py-4 text-2xl text-gray-700">
      <NuxtLink to="/">預設layout</NuxtLink>
    </p>
    <!-- slot為預設插槽，用於顯示內容容器的位置 -->
    <slot name="header"/>
    <slot />
    <!-- <slot name="footer" /> -->
  </div>
</template>