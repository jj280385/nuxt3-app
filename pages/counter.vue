<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <span class="text-xl font-semibold text-sky-600"
        >isChanged : {{ counterStore.isChanged }}</span
      >
      <span class="text-xl font-semibold text-sky-600">array : {{ counterStore.array }}</span>
      <span class="text-xl font-semibold text-sky-600">doubleCount : {{ counterStore.doubleCount }}</span>
      <span class="text-xl font-semibold text-sky-600">doubleCountPlusOne : {{ counterStore.doubleCountPlusOne }}</span>
      <span class="text-9xl font-semibold text-sky-600">{{ count }}</span>

      <div class="mt-8 flex flex-row">
        <button
          class="font-base mx-2 rounded-full bg-sky-500 px-4 py-2 text-xl text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
          @click="increment"
        >
          增加
        </button>
        <button
          class="font-base mx-2 rounded-full bg-sky-500 px-4 py-2 text-xl text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
          @click="decrement"
        >
          減少
        </button>
      </div>
      <div class="mt-8 text-black">
        <NuxtLink to="/">回首頁</NuxtLink>
      </div>
      <div class="mt-8 text-black">
        <NuxtLink to="/showCounter">showCounter</NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter';
const counterStore = useCounterStore();

// counterStore.$patch({
//   count: 0,
// })

counterStore.$patch((state) => {
  state.isChanged = !state.isChanged;
  state.array.push({ name: 'moneyCat' });
  state.count = 0;
});

const { count } = storeToRefs(counterStore)
const { increment, decrement } = counterStore
</script>
