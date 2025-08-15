<template>
    <DefaultLayout>
      <!-- 텍스트 민원 접수 -->
      <section class="mb-12">
        <div class="flex justify-between items-center mb-2">
          <h2 class="text-blue-600 font-semibold text-lg">
            텍스트 민원 접수
          </h2>
          <router-link to="/submit"  class="bg-blue-500 text-white px-4 py-1 rounded text-sm hover:bg-blue-600" @click="onClickSubmit">
            접수하기
          </router-link>
        </div>
        <p class="text-sm text-gray-500 mb-4">아래는 예시입니다.</p>
  
        <div class="grid md:grid-cols-3 gap-4">
          <div
            v-for="i in 3"
            :key="'text-'+i"
            class="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition"
          >
            <h3 class="font-semibold text-sm mb-2">가로등 빨리 고쳐주세요</h3>
            <p class="text-xs text-gray-600">
              해당 지역 가로등이 꺼져 있어서 야간 보행 시 매우 위험합니다.
              조속한 점검 및 수리를 요청드립니다.
            </p>
          </div>
        </div>
      </section>
  
      <!-- 사진 민원 접수 -->
      <section>
        <div class="flex justify-between items-center mb-2">
          <h2 class="text-blue-600 font-semibold text-lg">
            사진 민원 접수
          </h2>
          <router-link to="/submit" class="bg-blue-500 text-white px-4 py-1 rounded text-sm hover:bg-blue-600" @click="onClickSubmit">
            접수하기
          </router-link>
        </div>
        <p class="text-sm text-gray-500 mb-4">아래는 예시입니다.</p>
  
        <div class="grid md:grid-cols-3 gap-4">
          <div
            v-for="i in 3"
            :key="'photo-'+i"
            class="bg-white border rounded-lg shadow-sm hover:shadow-md transition"
          >
            <img
              src="https://via.placeholder.com/400x200"
              alt="불법 주차"
              class="w-full h-40 object-cover rounded-t-lg"
            />
            <div class="p-4">
              <h3 class="font-semibold text-sm mb-2">차량 불법 주차 신고</h3>
              <p class="text-xs text-gray-600">
                지정된 주차구역이 아님에도 불구하고 차량이 불법 주차되어 주민 통행에 불편을 주고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  </template>
  
  <script setup>
  import DefaultLayout from '@/layouts/DefaultLayout.vue'
  import MinwonCard from '@/components/contents/MinwonCard.vue'

  const onClickSubmit = () =>{
    //this.$router.push('/MinwonSubmit')
  }
  </script>