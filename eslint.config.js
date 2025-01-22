import eslint from '@antfu/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

export default eslint(
  {
    unocss: true,
    formatters: true,
  },
  nuxt,
)
