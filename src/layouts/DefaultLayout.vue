<template>
  <div class="bg-gray-50 min-h-screen flex flex-col">
    <Header />
    <main class="flex-1 max-w-7xl mx-auto px-4 py-6">
        <slot />
      </main>
    </div>
  </template>
  
  <script setup>
  import Header from '@/components/common/Header.vue'
  </script>