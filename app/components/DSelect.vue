<script setup lang="ts">
import { useVModel } from '@vueuse/core'

const props = withDefaults(
  defineProps<{
    modelValue?: any
    placeholder?: string
    icon?: string
    disabled?: boolean
  }>(),
  {
    modelValue: undefined,
    placeholder: '',
    disabled: false,
    icon: '',
  },
)

const emit = defineEmits<{ (...args: any): void }>()
const input = useVModel(props, 'modelValue', emit, { passive: true })
</script>

<template>
  <div
    class="flex items-center border rounded bg-white px-2 py-1 dark:bg-[#151515]"
    :class="disabled ? 'border-gray:10' : 'border-gray/20'"
  >
    <slot name="icon">
      <DIcon v-if="icon" :icon="icon" class="mr-0.4em text-1.1em op50" />
    </slot>
    <select
      v-model="input"
      :disabled="disabled"
      class="w-full flex-auto rounded bg-white p1 dark:bg-[#151515] !outline-none"
      :class="disabled ? 'appearance-none' : ''"
    >
      <option v-if="placeholder" value="" disabled hidden>
        {{ placeholder }}
      </option>
      <slot />
    </select>
  </div>
</template>
