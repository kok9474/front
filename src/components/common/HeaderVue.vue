<template>
  <header class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <router-link to="/" class="flex items-center gap-2">
          <img src="/logo.png" alt="민원이지 로고" class="h-10" />
          <span class="font-bold text-lg"></span>
        </router-link>

        <nav class="ml-8 flex space-x-6">
          <router-link
            v-for="category in categories"
            :key="category.value"
            :to="`/minwon/${category.value}`"
            class="text-sm font-bold text-gray-800 hover:text-blue-600"
          >
            {{ category.label }}
          </router-link>
          <router-link to="/department" class="text-sm font-bold text-gray-800 hover:text-blue-600"
            >관련 부서 연결</router-link
          >
        </nav>

        <div class="flex items-center gap-3">
          <button class="border px-3 py-1 rounded text-sm" @click="onClickLogin">회원가입</button>
          <button class="bg-blue-500 text-white px-3 py-1 rounded text-sm" @click="onClickLogin">
            로그인
          </button>
          <div class="w-6 h-6 flex items-center justify-center">
            <img src="/myInfo.png" alt="내정보" class="h-6" />
          </div>
          <div class="w-6 h-6 flex items-center justify-center">
            <img src="/menu.png" alt="메뉴" class="h-6" />
          </div>
          <router-link
            to="/chatbot"
            class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center"
          >
            <img src="/chatBot.png" alt="챗봇" class="h-10" />
          </router-link>
        </div>
      </div>
    </div>
  </header>

  <MyInfoPopup
    :open="isPopupOpen"
    :user="{ name: '김ㅇㅇ', image: '/images/profile.jpg' }"
    @go-requests="handleRequests"
    @go-profile="handleProfile"
  />
</template>
<script setup>
import api from '@/api.js'

const categories = [
  { label: '교통/주차', value: 'traffic' },
  { label: '교육/학교', value: 'education' },
  { label: '생활/민원', value: 'life' },
  { label: '고용/실업', value: 'employment' },
]

const onClickLogin = () => {
  window.location.href = 'http://34.22.78.216/api/login'
  // api
  //   .get('/login')
  //   .then((res) => {
  //     console.log(res)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
}
</script>
