import { defineNuxtConfig } from 'nuxt3';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['@/assets/css/styles.css'],
  meta: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdn.iconmonstr.com/1.3.0/css/iconmonstr-iconic-font.min.css',
      },
    ],
  },
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
});
