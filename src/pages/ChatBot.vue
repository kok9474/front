<template>
    <DefaultLayout>
        <main class="flex-1 p-6 overflow-y-auto bg-gray-50">
      <div class="flex flex-col space-y-4">
        <!-- Bot Message -->
        <div class="flex items-start space-x-3">
          <div class="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <div class="bg-white p-4 rounded-lg shadow text-gray-700 max-w-md">
            신고 내용 안내입니다.<br/>
            • 차량번호: 12가3456<br/>
            • 위치: 서울시 서대문구 도화동 22-5 앞 도로<br/>
            • 위반 내용: 소화전 앞 불법주차<br/>
            지금 바로 관련 구청에 신고 진행할까요?
            <div class="mt-2 flex space-x-2">
              <button class="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">신고 접수하기</button>
              <button class="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">수정하기</button>
            </div>
          </div>
        </div>

        <!-- User Message -->
        <div class="flex justify-end">
          <div class="bg-blue-600 text-white p-4 rounded-lg max-w-md">
            신고 진행하기
          </div>
        </div>

        <!-- Bot Message -->
        <div class="flex items-start space-x-3">
          <div class="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <div class="bg-white p-4 rounded-lg shadow text-gray-700 max-w-md">
            민원 번호: 2025-0812-00127<br/>
            처리 진행은 2일 이내로 안내드릴게요.<br/>
            불편 사항을 알려주셔서 감사합니다.
          </div>
        </div>
      </div>
    </main>

    <!-- Input Area -->
    <footer class="p-4 border-t bg-white">
      <div class="flex items-center space-x-3">
        <input type="text" placeholder="무엇이든 물어보세요." class="flex-1 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"/>
        <button class="px-4 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </footer>
  
    </DefaultLayout>
  </template>
  
  <script setup>
  import DefaultLayout from '@/layouts/DefaultLayout.vue'
  </script>