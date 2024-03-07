<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <span class="text-9xl font-semibold text-sky-600">{{ counterStore.count }}</span>
      <div class="mt-8 flex flex-row text-black">這裡顯示的是 ./counter的數字+10</div>
      <div class="mt-8">
        <NuxtLink to="/">回首頁</NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useCounterStore } from '@/stores/counter';
const counterStore = useCounterStore();
counterStore.count += 10;


</script>
