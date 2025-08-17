<template>
  <DefaultLayout>
    <!-- 텍스트 민원 접수 -->
    <section class="mb-12 w-full">
      <div class="flex justify-between items-center mb-2">
        <h2 class="text-blue-600 font-semibold text-lg">텍스트 민원 접수</h2>
        <router-link
          to="/submit"
          class="bg-blue-500 text-white px-4 py-1 rounded text-sm hover:bg-blue-600"
          @click="onClickSubmit"
        >
          접수하기
        </router-link>
      </div>
      <p class="text-sm text-gray-500 mb-4">아래는 예시입니다.</p>

      <div>
        <div class="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition">
          <h3 class="font-semibold text-sm mb-2">가로등 빨리 고쳐주세요</h3>
          <p class="text-xs text-gray-600">
            해당 지역 가로등이 꺼져 있어서 야간 보행 시 매우 위험합니다. 조속한 점검 및 수리를
            요청드립니다.
          </p>
        </div>
      </div>
    </section>

    <!-- 사진 민원 접수 -->
    <section v-if="category === 'traffic' || category === 'life'" class="mb-12 w-full">
      <div class="flex justify-between items-center mb-2">
        <h2 class="text-blue-600 font-semibold text-lg">사진 민원 접수</h2>
        <router-link
          to="/submit"
          class="bg-blue-500 text-white px-4 py-1 rounded text-sm hover:bg-blue-600"
          @click="onClickSubmit"
        >
          접수하기
        </router-link>
      </div>
      <p class="text-sm text-gray-500 mb-4">아래는 예시입니다.</p>

      <div>
        <div class="bg-white border rounded-lg shadow-sm hover:shadow-md transition">
          <img
            src="https://via.placeholder.com/400x200"
            alt="불법 주차"
            class="w-full h-40 object-cover rounded-t-lg"
          />
          <div class="p-4">
            <h3 class="font-semibold text-sm mb-2">차량 불법 주차 신고</h3>
            <p class="text-xs text-gray-600">
              지정된 주차구역이 아님에도 불구하고 차량이 불법 주차되어 주민 통행에 불편을 주고
              있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!--관련 부서 연결-->
    <section class="mb-12 w-full">
      <div class="flex justify-between items-center mb-2">
        <h2 class="text-blue-600 font-semibold text-lg">관련 부서 연결</h2>
      </div>
      <div>
        <div class="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition">
          <h3 class="font-semibold text-sm mb-2">가로등 빨리 고쳐주세요</h3>
          <p class="text-xs text-gray-600">
            해당 지역 가로등이 꺼져 있어서 야간 보행 시 매우 위험합니다. 조속한 점검 및 수리를
            요청드립니다.
          </p>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { computed, onMounted, watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import api from '@/api.js'

const route = useRoute()
const category = ref(route.params.category)

watch(
  () => route.params.category,
  (newCategory) => {
    category.value = newCategory
  },
  { immediate: true },
)

const textRaw = computed(() => {
  if (category.value === 'traffic') {
    return '도로 위에 주차되어있는 차량 때문에 다니기 어려워요'
  } else if (category.value === 'education') {
    return '인도 위에 쓰레기 때문에 너무 냄새가 많이 나요'
  } else if (category.value === 'life') {
    return '우리 아이가 다니는 초등학교 건물 외벽이 오래돼서 금이 많이 가 있고, 비 오면 물이 새요. 아이들이 다니기 위험해 보여서 수리 좀 해줬으면 좋겠어요.'
  } else {
    return '산재보험 신청을 했는데 처리 속도가 너무 느리고 진행 상황 안내도 없어요. 빨리 처리해 주세요.'
  }
})

const onClickSubmit = () => {
  console.log('onClickSubmit')
  api
    .get('/complaints/list')
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}

onMounted(async () => {
  //console.log('category ==== ', category)
  api
    .get('/userinfo')
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
})
</script>
