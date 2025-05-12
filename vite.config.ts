import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/Portfolio-for-Photographers",
   build: {
    chunkSizeWarningLimit: 1500, // Silences big chunk warnings
  },
});
