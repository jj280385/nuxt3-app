<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <span class="text-9xl font-semibold text-emerald-400">{{ count }}</span>
    </div>
  </div>
</template>

<script setup>
// 'count'為key
const count = useState('count', () => Math.round(Math.random() * 1000))
</script>