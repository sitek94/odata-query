import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
  format: ['esm', 'cjs', 'iife'],
  target: 'es5',
  esbuildOptions(context) {
    console.log(context);
    
    return {
      outdir: 'dist',
    }
  },
  outExtension({ format, options }) {
    return {
      js: `.${format}.js`
    }
  }
})