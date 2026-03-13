// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages:
  // - user: Maxine99
  // - repo:  jiayi-portfolio
  // Build will inject BASE_PATH=/jiayi-portfolio
  site: 'https://maxine99.github.io',
  base: process.env.BASE_PATH ?? '',
});
