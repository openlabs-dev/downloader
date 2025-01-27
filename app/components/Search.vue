<template>
  <div w-full>
    <form action="/search" method="get" relative isolate w-full>
      <input type="text" hidden>
      <div
        class="dw-border-base z-1 min-h-[32px] flex flex-1 items-center gap-[.25rem] rounded"
        px=".25rem"
        relative
      >
        <span>Search folder</span>
      </div>
    </form>
  </div>
</template>
