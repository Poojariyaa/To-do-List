import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Todo-list/', // This is the base URL of your GitHub Pages site
});