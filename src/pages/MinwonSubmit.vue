<template>
  <DefaultLayout>
    <div class="min-h-screen bg-slate-50">
      <div class="mx-auto max-w-7xl p-4 lg:p-8 space-y-6">
        <!-- 텍스트 민원 접수 -->
        <section class="bg-white rounded-2xl shadow-sm border border-slate-200">
          <div class="p-5 border-b border-slate-100">
            <h2 class="font-bold text-slate-800">텍스트 민원 접수</h2>
          </div>
          <div class="p-5 space-y-4">
            <!-- 가로로 긴 입력란 -->
            <div class="w-full">
              <textarea
                v-model="textInput"
                placeholder="텍스트를 입력해 주세요."
                class="w-full h-40 lg:h-60 resize-none rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 p-4 placeholder:text-slate-400"
              />
            </div>
            <div class="flex justify-end">
              <button
                class="px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 disabled:opacity-40"
                :disabled="!textInput.trim() && !imageFile"
                @click="handleTransform('text')"
              >
                AI 변환 요청
              </button>
            </div>
          </div>
        </section>

        <!-- 사진 민원 접수 -->
        <section class="bg-white rounded-2xl shadow-sm border border-slate-200">
          <div class="p-5 border-b border-slate-100">
            <h2 class="font-bold text-slate-800">사진 민원 접수</h2>
          </div>
          <div class="p-5 space-y-4">
            <!-- 가로로 긴 업로드 박스 -->
            <div
              class="relative h-40 lg:h-60 rounded-xl border border-dashed border-slate-300 bg-slate-50 hover:bg-slate-100 transition flex items-center justify-center text-center"
              @dragover.prevent
              @drop.prevent="onDrop"
            >
              <input
                ref="fileInputRef"
                type="file"
                accept="image/*"
                class="absolute inset-0 opacity-0 cursor-pointer"
                @change="onFileChange"
              />
              <div class="pointer-events-none">
                <p class="text-sm text-slate-700">첨부할 파일을 여기에 끌어다 놓거나,</p>
                <p class="text-xs text-slate-500 mt-1">파일 선택 버튼을 눌러 선택해주세요.</p>
              </div>
            </div>

            <!-- 가로 미리보기(있을 때만) -->
            <div v-if="imagePreview" class="rounded-xl overflow-hidden border border-slate-200">
              <img
                :src="imagePreview"
                alt="업로드 미리보기"
                class="w-full h-40 lg:h-60 object-contain bg-white"
              />
            </div>

            <div class="flex justify-end">
              <button
                class="px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-40"
                :disabled="!imageFile && !textInput.trim()"
                @click="handleTransform('image')"
              >
                AI 변환 요청
              </button>
            </div>
          </div>
        </section>

        <!-- AI 변환 결과 -->
        <section class="bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col">
          <div class="p-5 border-b border-slate-100 flex items-center justify-between">
            <h2 class="font-medium text-slate-800">AI 변환 결과</h2>
            <button
              type="button"
              class="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500"
              title="내용 복사"
              @click="copyResult"
            >
              <!-- 링크 아이콘 -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M10.5 6A3.75 3.75 0 0 1 14.25 2.25h.75A6.75 6.75 0 0 1 21.75 9v.75A3.75 3.75 0 0 1 18 13.5h-2.25a.75.75 0 0 1 0-1.5H18a2.25 2.25 0 0 0 2.25-2.25V9A5.25 5.25 0 0 0 14.25 3.75h-.75A2.25 2.25 0 0 0 11.25 6v1.5a.75.75 0 0 1-1.5 0V6z"
                />
                <path
                  d="M13.5 18A3.75 3.75 0 0 1 9.75 21.75H9A6.75 6.75 0 0 1 2.25 15v-.75A3.75 3.75 0 0 1 6 10.5h2.25a.75.75 0 0 1 0 1.5H6A2.25 2.25 0 0 0 3.75 14.25v.75A5.25 5.25 0 0 0 9 20.25h.75A2.25 2.25 0 0 0 12 18v-1.5a.75.75 0 0 1 1.5 0V18z"
                />
              </svg>
            </button>
          </div>

          <!-- 가로로 긴 결과 영역 -->
          <div class="p-5">
            <div
              class="w-full h-40 lg:h-60 rounded-xl border border-slate-200 p-4 overflow-auto text-slate-800 bg-white"
            >
              <template v-if="result">{{ result }}</template>
              <template v-else>
                <span class="text-slate-400">AI 변환 결과가 여기에 표시됩니다.</span>
              </template>
            </div>
          </div>

          <div class="px-5 pb-5 flex justify-end">
            <button
              class="px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-40"
              :disabled="!result"
              @click="$emit('apply', result)"
            >
              민원 제출하기
            </button>
          </div>
        </section>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { computed, onMounted, watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import api from '@/api.js'

const route = useRoute()
const category = ref(route.params.category)

// 텍스트 입력
const textInput = ref('')

// AI 변환 결과
const result = ref('')

// // 파일 업로드 관련
// const fileInputRef = ref<HTMLInputElement | null>(null)
// const imageFile = ref<File | null>(null)
// const imagePreview = ref<string | null>(null)

// 파일 선택 시 실행
// function onFileChange(e: Event) {
//   const files = (e.target as HTMLInputElement).files
//   if (files && files[0]) {
//     setImage(files[0])
//   }
// }

// // 드래그&드롭 업로드
// function onDrop(e: DragEvent) {
//   const f = e.dataTransfer?.files?.[0]
//   if (f) setImage(f)
// }

// // 이미지 세팅 + 미리보기 생성
// function setImage(f: File) {
//   imageFile.value = f
//   const reader = new FileReader()
//   reader.onload = () => {
//     imagePreview.value = reader.result as string
//   }
//   reader.readAsDataURL(f)
// }

// // AI 변환 요청 (더미 함수)
// async function handleTransform(source: 'text' | 'image') {
//   const base = source === 'text' ? textInput.value : (imageFile.value?.name || 'image.jpg')
//   result.value =
//     `✅ 변환 완료\n- 입력 유형: ${source === 'text' ? '텍스트' : '이미지'}\n- 원본: ${base}\n- 생성 시각: ${new Date().toLocaleString()}`
// }

// 결과 복사
// async function copyResult() {
//   if (!result.value) return
//   try {
//     await navigator.clipboard.writeText(result.value)
//   } catch (err) {
//     console.error('복사 실패:', err)
//   }
// }
</script>

<style scoped>
::-webkit-scrollbar {
  height: 10px;
  width: 10px;
}
::-webkit-scrollbar-thumb {
  background-color: rgb(226 232 240);
  border-radius: 9999px;
}
</style>
