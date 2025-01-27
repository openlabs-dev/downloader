<template>
  <NuxtLayout>
    <main isolate flex flex-1 flex-col items-center gap-2 overflow-auto p-4>
      <div class="flex-[1_1_0%]" />
      <div max-w-5xl w-full class="flex-[1_0_85%]" flex flex-col items-center gap-4>
        <Hero />
        <Search />
        <Footer />
      </div>
    </main>
  </NuxtLayout>
</template>
