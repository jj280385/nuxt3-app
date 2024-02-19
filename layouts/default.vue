<template>
  <div>
    <header class="flex w-full justify-center px-8 xl:px-0">
      <nav class="flex w-full max-w-7xl items-center justify-between py-2">
        <div>
          <a aria-label="TailwindBlog" href="/">
            <div class="flex items-center justify-between">
              <div class="mr-3">
                <Icon class="h-12 w-12" name="logos:nuxt-icon" />
              </div>
              <div class="hidden h-6 text-2xl font-semibold text-gray-700 sm:block">
                Nuxt 3 Blog
              </div>
            </div>
          </a>
        </div>
        <div class="flex items-center text-base leading-5">
          <div class="flex flex-row items-center">
            <NuxtLink
  class="text-md mt-12 rounded-sm bg-emerald-500 py-2 px-4 font-medium text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
  to="/manage/articles/create"
>
  前往撰寫文章
</NuxtLink>
            <NuxtLink
              class="px-3 py-2 text-gray-700 transition hover:text-emerald-500"
              to="/articles"
            >
              文章
            </NuxtLink>
            <NavigationBarAvatarMenu v-if="userProfile?.id"/>
            <NuxtLink
              class="px-3 py-2 text-gray-700 transition hover:text-emerald-500"
              to="/login"
              v-else
            >
              登入
            </NuxtLink>
          </div>
          
        </div>
        
      </nav>
    </header>
    <slot />
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const userProfile = computed(() => userStore.profile)
</script>
