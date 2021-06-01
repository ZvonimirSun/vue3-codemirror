import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'vue3-codemirror'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: "named",
        globals: {
          vue: 'vue'
        }
      }
    }
  }
})
