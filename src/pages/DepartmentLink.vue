<template>
  <DefaultLayout>
    <div class="min-h-screen bg-slate-50">
      <div class="mx-auto max-w-5xl p-4 lg:p-8 space-y-6">
        <!-- 입력 영역 헤더 -->
        <div class="flex items-center justify-between">
          <h2 class="text-sm font-bold text-slate-700">텍스트 혹은 이미지 선택</h2>

          <div class="flex items-center gap-2">
            <input
              ref="fileInputRef"
              type="file"
              accept="image/*"
              class="hidden"
              @change="onFileChange"
            />
            <button
              type="button"
              class="inline-flex items-center gap-1 rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
              @click="fileInputRef?.click()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3 16.5V8.25A2.25 2.25 0 0 1 5.25 6h13.5A2.25 2.25 0 0 1 21 8.25V16.5M3 16.5A2.25 2.25 0 0 0 5.25 18.75h13.5A2.25 2.25 0 0 0 21 16.5M3 16.5l3.75-3.75a2.25 2.25 0 0 1 3.182 0L15 16.5m0 0 2.25-2.25a2.25 2.25 0 0 1 3.182 0L21 16.5"
                />
              </svg>
              파일 업로드
            </button>
          </div>
        </div>

        <!-- 가로로 긴 입력 박스 -->
        <div class="rounded-2xl border border-slate-200 bg-white">
          <div class="p-4">
            <textarea
              v-model="textInput"
              placeholder="텍스트를 입력해 주세요."
              class="w-full h-44 lg:h-56 resize-none rounded-xl border border-slate-200 p-4 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 placeholder:text-slate-400"
            />
            <!-- 선택한 파일 보조 표시 -->
            <p v-if="fileName" class="mt-2 text-xs text-slate-500">첨부됨: {{ fileName }}</p>
          </div>

          <div class="flex justify-end p-4 pt-0">
            <button
              type="button"
              class="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed"
              :disabled="isLoading || (!textInput.trim() && !fileName)"
              @click="findDepartments"
            >
              <span v-if="!isLoading">관련 부서 찾기</span>
              <span v-else>조회 중…</span>
            </button>
          </div>
        </div>

        <!-- 결과 영역 -->
        <section class="space-y-3">
          <h3 class="text-sm font-bold text-slate-700">관련 부서 결과</h3>

          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 shadow-md border border-slate-200 hover:shadow-lg transition"
          >
            <span class="text-slate-900 font-medium">고교교육혁신과</span>
            <img src="../../public/link.png" alt="link" class="w-4 h-4" />
          </button>
        </section>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'

import { ref, computed } from 'vue'

const Dept = { id: '', name: '' }

const textInput = ref('')
const fileInputRef = (ref < HTMLInputElement) | (null > null)
const fileName = ref('')

const isLoading = ref(false)
const errorMsg = ref('')

const departments = ref(Dept)
const selectedDeptId = ref('')

// const selectedDept = computed(() => departments.value.find((d) => d.id === selectedDeptId.value))

// function onFileChange(e: Event) {
//   const files = (e.target as HTMLInputElement).files
//   if (!files || !files[0]) return
//   fileName.value = files[0].name
// }

/**
 * 실제 API 연동 지점
 * - 여기서는 더미 fetch 모킹. 백엔드가 준비되면 fetch/axios로 교체하세요.
 *   예: const res = await fetch('/api/departments:search', { method:'POST', body: JSON.stringify({ text, file }) })
 *       const data = await res.json()
 */
async function findDepartments() {
  errorMsg.value = ''
  departments.value = []
  selectedDeptId.value = ''

  if (!textInput.value.trim() && !fileName.value) {
    errorMsg.value = '텍스트를 입력하거나 이미지를 업로드해 주세요.'
    return
  }

  isLoading.value = true
  try {
    // --- mock delay ---
    await new Promise((r) => setTimeout(r, 700))

    // --- mock 결과 (검색어에 따라 가볍게 필터) ---
    // const base: Dept[] = [
    //   { id: 'dept-001', name: '도로과' },
    //   { id: 'dept-002', name: '도시안전과' },
    //   { id: 'dept-003', name: '청소행정과' },
    //   { id: 'dept-004', name: '공원녹지과' },
    //   { id: 'dept-005', name: '주차행정과' }
    // ]

    const q = textInput.value.trim()
    // const filtered = q ? base.filter((d) => d.name.includes('도') || d.name.includes(q[0])) : base

    // departments.value = filtered
    // if (!filtered.length) errorMsg.value = '관련 부서를 찾지 못했습니다.'
  } catch (e) {
    console.error(e)
    errorMsg.value = '조회 중 오류가 발생했습니다.'
  } finally {
    isLoading.value = false
  }
}
</script>
