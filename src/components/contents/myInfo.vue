<template>
  <div v-if="open" class="absolute right-0 mt-2 w-64 rounded-2xl shadow-lg bg-white p-4 z-50">
    <!-- 프로필 -->
    <div class="flex flex-col items-center text-center">
      <img class="w-16 h-16 rounded-full object-cover mb-2" :src="user.image" alt="프로필" />
      <p class="text-sm font-medium">{{ user.name }}님 반갑습니다.</p>
    </div>

    <!-- 구분선 -->
    <div class="border-t my-3"></div>

    <!-- 메뉴 -->
    <ul class="flex flex-col space-y-2">
      <li>
        <button
          class="w-full text-sm text-gray-700 hover:font-semibold transition"
          @click="$emit('go-requests')"
        >
          민원 신청 내역
        </button>
      </li>
      <li>
        <button
          class="w-full text-sm text-gray-700 hover:font-semibold transition"
          @click="$emit('go-profile')"
        >
          나의 정보 관리
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  open: { type: Boolean, default: false },
  user: {
    type: Object,
    default: () => ({
      name: '김ㅇㅇ',
      image: 'https://via.placeholder.com/150', // 프로필 기본 이미지
    }),
  },
})

defineEmits(['go-requests', 'go-profile'])
</script>

<style scoped></style>
