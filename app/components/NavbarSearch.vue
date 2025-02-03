<template>
  <WrapperNav>
    <div flex gap-6>
      <figure m-0>
        <NuxtImg src="/logo.svg" alt="Logo" width="32" id='animate-rotate' />
      </figure>
      <nav>
        <DButton to="#" class="flex-row-reverse shadow-none" variant="ghost">
          Documentation
        </DButton>
        <DButton to="#" class="flex-row-reverse shadow-none" variant="ghost">
          About downloader
        </DButton>
      </nav>
    </div>
    <div flex items-center gap-2>
      <DBadge>Beta</DBadge>
      <DButton to="#">
        Login
      </DButton>
      <DButton to="#" variant="ghost">
        Sign Up
      </DButton>
    </div>
  </WrapperNav>
</template>

<style scooped>
  @keyframes rotate {
    0% {
      transform: scale(1);
      transform: rotate(0);
    }

    100% {
      transform: scale(1.2);
      transform: rotate(180deg);
    }
  }

  #animate-rotate:hover {
    animation: rotate .5s ease-out;
  }

</style>
