import { createRouter, createWebHistory } from 'vue-router'
import MinwonList from '@/pages/MinwonList.vue'
import MinwonSubmit from '@/pages/MinwonSubmit.vue'
import DepartmentLink from '@/pages/DepartmentLink.vue'
import ChatBot from '@/pages/ChatBot.vue'

const routes = [
  { path: '/', redirect: '/minwon' },
  { path: '/minwon', name: 'MinwonList', component: MinwonList },
  { path: '/submit', name: 'MinwonSubmit', component: MinwonSubmit },
  { path: '/department', name: 'DepartmentLink', component: DepartmentLink },
  { path: '/chatbot', name: 'ChatBot', component: ChatBot }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router