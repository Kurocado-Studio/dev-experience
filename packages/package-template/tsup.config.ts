/* eslint import/no-default-export: 0 */
import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entry: ['./src/index.ts'],
  target: 'esnext',
  format: ['esm'],
  dts: true,
  clean: true,
  splitting: true,
  treeshake: true,
  external: ['react', 'react-dom'],
  ...options,
}));
