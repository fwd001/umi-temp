import { defineConfig } from 'umi';

export default defineConfig({
  base: '/app/',
  publicPath: '/app/',
  plugins: [
    '@umijs/plugins/dist/unocss',
    '@umijs/plugins/dist/react-query',
    '@umijs/plugins/dist/model',
  ],
  reactQuery: {
    devtool: false,
  },
  model: {},
  unocss: {
    // 检测 className 的文件范围，若项目不包含 src 目录，可使用 `pages/**/*.tsx`
    watch: ['src/**/*.tsx'],
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/main-layout/index',
      layout: false,
      routes: [
        { path: '/', redirect: '/index' },
        {
          path: '/index',
          component: 'index',
          name: 'home',
          wrappers: ['@/wrappers/auth'],
        },
        {
          path: '/operate',
          component: 'operate/index',
          name: 'operate',
          wrappers: ['@/wrappers/auth'],
        },
        {
          path: '/mall',
          component: 'mall/index',
          name: 'mall',
          wrappers: ['@/wrappers/auth'],
        },
        {
          path: '/business',
          component: 'business',
          name: 'business',
          wrappers: ['@/wrappers/auth'],
        },
        {
          path: '/my',
          component: 'my',
          name: 'my',
          wrappers: ['@/wrappers/auth'],
        },
      ],
    },
    { path: '/login', component: 'login', name: 'login', layout: false },
    { path: '/*', component: '404', layout: false },
  ],
  npmClient: 'pnpm',
  targets: { chrome: 65 },
  // jsMinifier: 'terser',
  // cssMinifier: 'cssnano',
});
