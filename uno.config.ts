import presetRemToPx from '@unocss/preset-rem-to-px';
import {
  defineConfig,
  presetAttributify,
  presetMini,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export function createConfig({ strict = true, dev = true } = {}) {
  return defineConfig({
    envMode: dev ? 'dev' : 'build',
    presets: [
      presetMini({ dark: 'class' }),
      presetAttributify({ strict }),
      presetUno(),
      presetRemToPx({ baseFontSize: 4 }),
    ],
    transformers: [transformerDirectives(), transformerVariantGroup()],
    shortcuts: {
      'wh-full': 'w-full h-full',
      'flex-ac': 'flex justify-around items-center',
      'flex-bc': 'flex justify-between items-center',
    },
    theme: {},
    content: {
      pipeline: {
        include: [`${__dirname}/**/*`],
        exclude: [`${__dirname}/node_modules/**/*`],
      },
    },
  });
}

export default createConfig();
