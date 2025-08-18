import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // server: {
  //   //TODO: 개발용 서버 변경
  //   proxy: {
  //     '/api': {
  //       target: 'http://34.22.78.216',
  //       changeOrigin: true,
  //       secure: false,
  //     },
  //   },
  // },
})
