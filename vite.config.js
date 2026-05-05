import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' keeps assets working for both username.github.io and project pages.
export default defineConfig({
  base: './',
  plugins: [react()],
});
