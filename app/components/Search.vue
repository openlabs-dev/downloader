<script setup lang="ts">
interface RequestForm { q: string }

function handleDonwloadFolder(event: Event) {
  const form = event.target as HTMLFormElement

  Object.fromEntries(new FormData(form)) as unknown as RequestForm
}
</script>

<template>
  <div w-full>
    <form action="/github" method="get" relative isolate w-full @submit.prevent="handleDonwloadFolder">
      <div
        class="z-1 min-h-[35px] flex flex-1 items-center gap-3 rounded"
        px="0.75rem"
        relative
      >
        <input
          type="text"
          placeholder="Search..."
          name="q"
          p="3"
          bg="transparent"
          w-full
          rounded="lg"
          class="border-1 border-neutral/40 border-solid outline-none transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-primary"
        >
        <DButton type="submit" variant="secondary">
          <div class="i-ic-outline-search" text-xl />
        </DButton>
      </div>
    </form>
  </div>
</template>
