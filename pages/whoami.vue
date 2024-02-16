<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-6xl font-semibold text-gray-800">Who am I ???</h1>
      <div class="my-4 flex space-x-4">
        <button
          type="button"
          class="mt-2 w-fit rounded-sm bg-emerald-500 px-4 py-2 text-sm text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
          @click="postWhoamiApi"
        >
          打api
        </button>
        <div v-if="userInfo" class="mt-8 flex w-full max-w-md flex-col">
          <div
            v-for="key in Object.keys(userInfo)"
            :key="key"
            class="mt-1 flex flex-wrap break-all"
          >
            <label class="text-lg font-semibold text-emerald-500"> {{ key }}:</label>
            <span class="ml-2 flex flex-1 text-lg text-slate-700">{{ userInfo[key] }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const userInfo = ref();
function postWhoamiApi() {
  useFetch('/api/whoami').then((response) => {
    userInfo.value = response.data.value;
  });
}
</script>
