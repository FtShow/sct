import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'https://showroom.eis24.me/c300/api/v4/test',
        changeOrigin: true,
        rewrite: path => {
          return path.replace(/^\/api/, '');
        },
      },
    },
  },
});
