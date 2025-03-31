/* eslint import/no-default-export: 0 */
import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entry: ['./src/index.ts'],
  target: 'es5',
  format: ['esm'],
  dts: true,
  clean: true,
  splitting: true,
  treeshake: true,
  external: [
    'framer-motion',
    'react',
    'react-dom',
    'tailwind',
    'tailwind-variants',
    'tailwindcss-animate',
  ],
  ...options,
}));
