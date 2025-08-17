<template>
  <div class="bg-gray-50 min-h-screen flex flex-col">
    <Header />
    <main class="flex-1 max-w-7xl px-12 py-12">
        <slot class="h-screen" />
      </main>
    </div>
  </template>
  
  <script setup>
  import Header from '@/components/common/HeaderVue.vue'
  </script>