/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    watch: true,
    clearMocks: true,
    environment: 'happy-dom',
  },
});
