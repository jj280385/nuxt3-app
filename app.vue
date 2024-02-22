<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator :throttle="0"/>
      <NuxtPage />
    </NuxtLayout>
    <NotificationContainer />
  </div>
</template>
<script setup>
const route = useRoute()
const title = ref('Zora Nuxt 3 Blog')
  const description = ref('這裡是 Zora 的 Nuxt 3 學習筆記 實戰部落格')
  useHead({
    title,
    meta: [{ name: 'og:title', content: `${route.meta.title} | Nuxt 3 Blog` },{
        name: 'description',
        content: description
      }],
    link: [
      { 
        rel: 'preconnect', 
        href: 'https://fonts.googleapis.com'
      },
      { 
        rel: 'stylesheet', 
        href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', 
        crossorigin: '' 
      }
    ]
  })</script>

<style>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}

.blur-enter-active,
.blur-leave-active {
  transition: all 0.6s;
}
.blur-enter-from,
.blur-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>
