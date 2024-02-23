<template>
  <div>
    <button @click="onClick" class="bg-blue-100 p-5">OOPS</button>
  </div>
</template>

<script setup>
const onClick = () => {
  throw new Error('由 ButtonOOPS 元件，拋出一個錯誤！')
}
</script>