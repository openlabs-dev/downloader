import { defineConfig, presetAttributify, presetIcons, presetUno, transformerDirectives } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      primary: '#BF3434',
      secondary: '#152B46',
    },
  },
  presets: [presetAttributify(), presetUno(), presetIcons()],
  transformers: [transformerDirectives()],
})
