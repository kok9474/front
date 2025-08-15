<template>
  <header class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <router-link to="/" class="flex items-center gap-2">
            <img src="/logo.png" alt="민원이지 로고" class="h-10" />
            <span class="font-bold text-lg"></span>
        </router-link>

        <nav class="ml-8 flex space-x-6">
            <router-link to="/minwon" class="text-sm font-bold text-gray-800 hover:text-blue-600">교통/주차</router-link>
            <router-link to="/minwon" class="text-sm font-bold text-gray-800 hover:text-blue-600">교육/학교</router-link>
            <router-link to="/minwon" class="text-sm font-bold text-gray-800 hover:text-blue-600">생활/민원</router-link>
            <router-link to="/minwon" class="text-sm font-bold text-gray-800 hover:text-blue-600">고용/실업</router-link>
            <router-link to="/department" class="text-sm font-bold text-gray-800 hover:text-blue-600">관련 부서 연결</router-link>
        </nav>

        <div class="flex items-center gap-3">
            <button class="border px-3 py-1 rounded text-sm" @click="onClickLogin">회원가입</button>
            <button class="bg-blue-500 text-white px-3 py-1 rounded text-sm" @click="onClickLogin">로그인</button>
            <div class="w-6 h-6 flex items-center justify-center">
                <img src="/myInfo.png" alt="내정보" class="h-6" />
            </div>
            <div class="w-6 h-6 flex items-center justify-center">
                <img src="/menu.png" alt="메뉴" class="h-6" />
            </div>
            <router-link to="/chatbot" class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <img src="/chatBot.png" alt="챗봇" class="h-10" />
            </router-link>
        </div>
        </div>
    </div>
  </header>
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import MinwonCard from '@/components/contents/MinwonCard.vue'

const onClickLogin = () => {
    window.open('http://34.22.78.216:31001/', '_self')
}
</script>