<!-- <template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-6xl font-semibold text-gray-800">這裡是首頁</h1>
      <div class="my-4 flex space-x-4">
        <NuxtLink to="/posts"><p class="text-black">前往 Posts</p></NuxtLink>
        <NuxtLink to="/about"><p class="text-black">前往 About</p></NuxtLink>
        <NuxtLink to="/contact"><p class="text-black">前往 Contact</p></NuxtLink>
        <NuxtLink to="/count/useAsyncData"><p class="text-black">前往 useAsyncData</p></NuxtLink>
        <NuxtLink to="/abouts/useFetch"><p class="text-black">前往 useFetch</p></NuxtLink>
        <NuxtLink to="/count/useLazyAsyncData"
          ><p class="text-black">前往 useLazyAsyncData</p></NuxtLink
        >
        <NuxtLink to="/counter/increment"><p class="text-black">前往 increment</p></NuxtLink>
        <NuxtLink to="/counter/surprise"><p class="text-black">前往 surprise</p></NuxtLink>
        <NuxtLink to="/color"><p class="text-black">前往 color</p></NuxtLink>
      </div>
      <div>
        <NuxtLink to="/counter"><p class="text-black">前往 counter</p></NuxtLink>
      </div>
      <div>
        <p class="mt-4 text-2xl text-gray-600">theme.darkMode:</p>
        <span class="mt-4 text-3xl font-semibold text-blue-500">{{ theme.darkMode }}</span>
      </div>
    </div>

  </div>
</template>
<script setup>
const appConfig = useAppConfig();
const { theme } = appConfig;

definePageMeta({
  middleware: 'named-test',
});

function submit() {
  const response = $fetch('/api/hello', {});
  console.log('submit', response);
}
</script> -->

<template>
  <div class="h-screen bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-6xl font-semibold text-gray-800">這裡是首頁</h1>
      <div class="my-4 flex space-x-4 text-black">
        <NuxtLink to="/login">前往 Login</NuxtLink>
        <NuxtLink to="/whoami">前往 Whoami</NuxtLink>
      </div>
    </div>
    <div class="flex flex-col items-center bg-white">
      <h1 class="mt-48 text-8xl font-medium text-blue-500">{{ $t('hello') }} / {{ $t(test) }}</h1>
      <div class="mt-24 space-x-4">
        <!-- <button
        type="button"
        class="inline-flex items-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        @click="setLocale('en')"
      >
        English
      </button>

      <button
        type="button"
        class="inline-flex items-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        @click="setLocale('zh')"
      >
        繁體中文
      </button> -->
        <button
          v-for="localeItem in locales"
          :key="localeItem.code"
          type="button"
          class="inline-flex items-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          @click="changeLanguage(localeItem.code)"
        >
          {{ localeItem.name }}
        </button>
        <!-- <p>{{ locales }}</p> -->
      </div>
      <div class="mt-4 flex flex-row justify-center">
        <label class="text-gray-600">{{ $t('language') }}</label>
        <span class="ml-4 font-bold text-gray-800">{{ locale }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n';
const { locale, locales, setLocale } = useI18n();
const test = ref('test.foo');
const changeLanguage = (localeCode) => {
  setLocale(localeCode);
};
</script>
