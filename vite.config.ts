import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/berqueno.github.io/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
