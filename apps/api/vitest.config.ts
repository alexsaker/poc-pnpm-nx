import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['src/**/*.{test,spec}.ts', '__tests__/**/*.ts'],
  },
  resolve: {
    alias: {
      '@your-scope/ui': path.resolve(__dirname, '../../packages/ui/src/index.ts'),
    },
  },
});