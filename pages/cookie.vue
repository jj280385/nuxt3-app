<template>
  <div class="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md">
      <div class="flex flex-col items-center">
        <h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-gray-700">Cookie</h2>
      </div>
      <div class="mt-2 flex w-full max-w-md flex-col items-center">
        <button
          type="button"
          class="mt-2 w-fit rounded-sm bg-emerald-500 py-2 px-4 text-sm text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
          @click="setNameCookie"
        >
          設置 name
        </button>
        <div class="mt-2 flex">
          <label class="text-lg font-semibold text-emerald-500">name:</label>
          <span class="ml-2 flex text-lg text-slate-700">{{ name }}</span>
        </div>
      </div>
      <div class="mt-2 flex w-full max-w-md flex-col items-center">
        <button
          type="button"
          class="mt-2 w-fit rounded-sm bg-emerald-500 py-2 px-4 text-sm text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
          @click="setCounterCookie"
        >
          設置 counter
        </button>
        <div class="mt-2 flex">
          <label class="text-lg font-semibold text-emerald-500">counter:</label>
          <span class="ml-2 flex text-lg text-slate-700">{{ counter }}</span>
        </div>
      </div>
      <div class="mt-2 flex w-full max-w-md flex-col items-center">
        <button
          type="button"
          class="mt-2 w-fit rounded-sm bg-emerald-500 py-2 px-4 text-sm text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
          @click="postApi"
        >
          打 /api/cookie
        </button>
        
      </div>
    </div>
  </div>
</template>
<script setup>
// name 為 cookie的key
const name = useCookie('name')
// 60秒為存活時間
const counter = useCookie('counter', { maxAge: 60 })

// key為name的cookies，value為zora
const setNameCookie = () => {
  name.value = 'Zora'
}
// key為counter的cookies，value為亂數
const setCounterCookie = () => {
  counter.value = Math.round(Math.random() * 1000)
}
// post API
const postApi = async() => {
await useAsyncData('cookie', () => $fetch('/api/cookie'));
console.log('Success')
}

</script>