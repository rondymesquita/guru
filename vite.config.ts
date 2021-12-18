import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

let base;

if (process.env.NODE_ENV === 'production') {
  base = '/guru/';
} else {
  base = '/';
}

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [vue()],
});
