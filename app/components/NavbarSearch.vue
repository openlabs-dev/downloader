<template>
  <WrapperNav>
    <div flex gap-6>
      <figure m-0>
        <NuxtImg
          src="/logo.svg" alt="Logo" width="32"
          hover="rotate-[180deg] duration-[.5s] ease-in-out animate-iteration-count-1"
        />
      </figure>
      <nav>
        <DButton variant="ghost" gap-2>
          <div class="i-ic-baseline-search" /> Search
        </DButton>
      </nav>
    </div>
    <div flex items-center gap-2>
      <DBadge>Beta</DBadge>
      <DButton variant="ghost">
        Sing In
      </DButton>
    </div>
  </WrapperNav>
</template>
