<template>
  <div class="flex flex-col items-center">
    <p class="my-8 text-3xl text-blue-500">這是我的第{{id}}份文件</p>
  </div>
</template>

<script setup>
const route = useRoute()
const { id } = route.params
</script>