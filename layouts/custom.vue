<template>
  <div class="bg-rose-100 py-2">
    <p class="px-6 py-4 text-2xl text-gray-700">
      <NuxtLink to="/">使用 <span class="font-bold text-rose-500">Custom</span> 布局</NuxtLink>
    </p>
    <slot /><NuxtLink to="/"></NuxtLink>
    <slot name="footer" />
  </div>
</template>