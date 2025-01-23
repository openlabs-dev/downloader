<script lang="ts" setup>
import { NuxtLink } from '#components'
import { cva, type VariantProps } from 'class-variance-authority'

interface ButtonVariantProps extends VariantProps<typeof buttonVariants> {}

interface BadgeProps {
  variant?: ButtonVariantProps['variant']
  to?: string
  type?: 'submit' | 'reset' | 'button'
  disabled?: boolean
  icon?: string
}

withDefaults(defineProps<BadgeProps>(), {
  type: 'button',
})

const buttonVariants = cva('select-none whitespace-nowrap rounded border-0 rounded-md inline-flex justify-center items-center disabled:pointer-events-none disabled:opacity-50 shadow px-4 py-2', {
  variants: {
    variant: {
      default: 'bg-primary text-black',
      ghost: 'bg- text-white',
      secondary: 'bg-secondary text-white',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})
</script>

<template>
  <Component :is="to ? NuxtLink : 'button'" :to='to' v-bind="{ ...$attrs, ...(!to && { type }), ...(disabled ? { disabled: true } : { tabindex: 0 }) }" :class="[buttonVariants({ variant }),  { 'flex-none': !$slots.default },]">
    <slot name="icon">
      <DIcon v-if="icon" :icon="icon" :class="{ '-ml-0.2em mr-0.2em text-1.1em': $slots.default }" />
    </slot>
    <slot />
    <div i-carbon-logo-github />
  </Component>
</template>
