import { defineConfig, presetAttributify, presetIcons, presetUno, transformerDirectives } from 'unocss'

export default defineConfig({
  shortcuts: {
    'dw-bg-base': 'bg-white dark:bg-[#020420]',
  },
  theme: {
    colors: {
      primary: '#BF3434',
      secondary: '#152B46',
      neutral: '#90a1b9',
    },
  },
  presets: [presetAttributify(), presetUno(), presetIcons({
    prefix: ['i-', ''],
    scale: 1.2,
    extraProperties: {
      'display': 'inline-block',
      'vertical-align': 'middle',
    },
  })],
  transformers: [transformerDirectives()],
})
