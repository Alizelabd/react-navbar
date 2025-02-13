import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', 'class-variance-authority', 'clsx', 'tailwind-merge'],
  treeshake: true,
  minify: true,
  injectStyle: false,
});