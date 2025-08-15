<template>
    <div class="bg-white border rounded shadow-sm p-4">
      <h3 class="font-semibold text-lg mb-2">{{ title }}</h3>
      <p class="text-sm text-gray-600">{{ content }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    content: String
  })
  </script>