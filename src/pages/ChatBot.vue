<template>
    <DefaultLayout>
        <div class="w-full h-full flex flex-col items-center justify-between bg-white">
            <!-- Chat Header -->
            <div class="w-full flex justify-center items-center py-4 border-b text-gray-500 text-sm">
            {{ today }}
            </div>

            <!-- Chat Messages -->
            <div class="flex-1 w-full max-w-5xl px-6 py-4 overflow-y-auto pb-28">
            <div v-for="(msg, idx) in messages" :key="idx" class="mb-6">
                <!-- Bot message -->
                <div v-if="msg.from === 'bot'" class="flex items-start space-x-3">
                <div class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200">
                    🤖
                </div>
                <div class="bg-gray-100 text-gray-800 p-3 rounded-xl shadow-sm max-w-lg">
                    <p class="whitespace-pre-line">{{ msg.text }}</p>
                    <div v-if="msg.buttons" class="mt-2 flex space-x-2">
                    <button
                        v-for="(btn, i) in msg.buttons"
                        :key="i"
                        class="px-3 py-1 text-sm bg-black text-white rounded-lg hover:bg-gray-700"
                    >
                        {{ btn }}
                    </button>
                    </div>
                </div>
                </div>

                <!-- User message -->
                <div v-else class="flex justify-end">
                <div class="bg-blue-500 text-white p-3 rounded-xl shadow max-w-md">
                    {{ msg.text }}
                </div>
                </div>
            </div>
            </div>

            <!-- Chat Input -->
            <div class="w-full max-w-5xl px-6 py-4 border-t fixed bottom-0 left-1/2 -translate-x-1/2 bg-white">
                <div class="flex items-center bg-white border-2 rounded-full px-4 py-2 shadow-sm border-purple-500">
                    <button class="text-purple-500 text-xl font-bold mr-3">＋</button>
                    <input
                        v-model="newMessage"
                        type="text"
                        placeholder="무엇이든 물어보세요."
                        class="flex-1 outline-none bg-transparent"
                        @focus="isFocused = true"
                        @blur="isFocused = false"
                        @keyup.enter="sendMessage"
                    />
                    <button
                        class="ml-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white p-2 rounded-full hover:opacity-90"
                        @click="sendMessage"
                    >
                    ➤
                    </button>
                </div>
            </div>
        </div>
    </DefaultLayout>
  </template>
  
  <script setup>
  import DefaultLayout from '@/layouts/DefaultLayout.vue'
  import dayjs from "dayjs"
  import { ref } from "vue"

  const today = dayjs().format('YYYY/MM/DD');

  const messages = ref([
  {
    from: "bot",
    text: "신고 내용을 확인했습니다.\n• 민원번호: 2025-0810-02727\n• 처리결과: 시설 개선 요청으로 접수 완료\n추가 문의사항이 있으신가요?",
    buttons: ["다른 불편사항", "추가하기"],
  },
  {
    from: "bot",
    text: "민원 번호: 2025-0810-01727\n처리는 완료 되었음을 안내드립니다.\n빠른 처리를 위해 협조해 주셔서 감사합니다.",
  },
  {
    from: "user",
    text: "추가 문의하기",
  },
]);

const newMessage = ref("");
const isFocused = ref(false);

function sendMessage() {
  if (!newMessage.value.trim()) return;
  messages.value.push({ from: "user", text: newMessage.value });
  newMessage.value = "";
}
  </script>