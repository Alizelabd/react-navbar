import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from 'path';

export default defineConfig({
  plugins: [react(), dts()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: "src/index.ts",
      name: "react-navbar",
      fileName: (format) => `react-navbar.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'class-variance-authority', 'clsx', 'tailwind-merge'],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
      },
    },
  },
});
