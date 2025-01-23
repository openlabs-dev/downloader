<script lang="ts" setup>
import { cva, type VariantProps } from 'class-variance-authority'

interface BadgeVariantProps extends VariantProps<typeof badgeVariants> {}

interface BadgeProps {
  variant?: BadgeVariantProps['variant']
}

defineProps<BadgeProps>()

const badgeVariants = cva('select-none whitespace-nowrap rounded', {
  variants: {
    variant: {
      default: 'bg-primary text-white',
      secondary: 'bg-secondary text-white',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})
</script>

<template>
  <span text="center xs" p="x-1.5 y-0.5" mx="0.5" :class="badgeVariants({ variant })">
    <slot />
  </span>
</template>
