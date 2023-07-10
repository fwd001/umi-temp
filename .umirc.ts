import CompressionPlugin from 'compression-webpack-plugin';
import { defineConfig } from 'umi';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  base: '/app/',
  publicPath: '/app/',
  plugins: [
    '@umijs/plugins/dist/unocss',
    '@umijs/plugins/dist/react-query',
    '@umijs/plugins/dist/model',
  ],
  hash: true,
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
  proxy: {
    '/server': {
      target: 'http://118.178.181.105',
      changeOrigin: true,
    },
  },
  metas: [
    { 'http-equiv': 'pragram', content: 'no-cache' },
    {
      'http-equiv': 'cache-control',
      content: 'no-cache, no-store, must-revalidate',
    },
    { 'http-equiv': 'expires', content: '0' },
  ],
  npmClient: 'pnpm',
  targets: { chrome: 65 },
  // 在生产环境中移除console
  extraBabelPlugins: [isProd ? 'transform-remove-console' : ''],
  // webpack配置
  chainWebpack: function (config, { webpack }) {
    config.merge({
      // gzip压缩
      optimization: {
        splitChunks: {
          chunks: 'all',
          minSize: 1000,
          minChunks: 2,
          automaticNameDelimiter: '.',
          cacheGroups: {
            vendor: {
              name: 'vendors',
              test({ resource }: any) {
                return /[\\/]node_modules[\\/]/.test(resource);
              },
              priority: 10,
            },
          },
        },
      },
    });
    //在生产环境开启gzip压缩
    if (isProd) {
      // Gzip压缩
      config.plugin('compression-webpack-plugin').use(CompressionPlugin, [
        {
          test: /\.(js|css|html)$/i, // 匹配
          threshold: 10240, // 超过10k的文件压缩
          deleteOriginalAssets: false, // 不删除源文件
        },
      ] as any);
    }
  },
  // jsMinifier: 'terser',
  // cssMinifier: 'cssnano',
});
