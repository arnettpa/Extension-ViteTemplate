import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index'
    },
    minify: true, // Uses Terser by default
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
});