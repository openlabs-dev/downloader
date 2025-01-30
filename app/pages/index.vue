<script lang="ts" setup>
const Downloader = [{
  name: 'GitHub',
  icon: 'i-line-md-github',
  to: '/downloader',
}, {
  name: 'Facebook',
  icon: 'i-ic-baseline-facebook',
  to: '/downloader',
}, {
  name: 'Youtube',
  icon: 'i-line-md-youtube',
  to: '/downloader',
}]
</script>

<template>
  <NuxtLayout>
    <WrapperNav>
      <NuxtLink to="/">
        <Logo />
      </NuxtLink>
      <div flex items-center gap-2>
        <DButton to="#" class="flex-row-reverse shadow-none" variant="ghost">
          Documentation
        </DButton>
        <DButton to="#" class="flex-row-reverse shadow-none" variant="ghost">
          About downloader
        </DButton>
        <DDrowpdown>
          <template #trigger="{ click }">
            <DButton icon="i-line-md-chevron-down" class="flex-row-reverse text-base shadow-none" variant="ghost" @click="click">
              Download
            </DButton>
          </template>
          <template #default>
            <div w-45 p-2>
              <NuxtLink
                v-for="items in Downloader" :key="items.name" :to="items.to"
                class="flex items-center gap-2 rounded-md p-2" hover="bg-primary/10"
              >
                <div :class="items.icon" /> {{ items.name }}
              </NuxtLink>
            </div>
          </template>
        </DDrowpdown>
      </div>
      <div flex items-center gap-2>
        <DButton to="#">
          Login
        </DButton>
        <DButton to="#" variant="ghost">
          Sign Up
        </DButton>
      </div>
    </WrapperNav>
    <header>
      <div class="mx-auto px-6 py-16 text-center container">
        <h1 class="mx-auto mb-6 max-w-5xl text-balance text-6xl font-bold">
          Tu descargador de confianza sin interrupciones
        </h1>
        <p class="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
          Accede y descarga cualquier tipo de contenido de manera rápida y segura.
          Optimizado para desarrolladores y creadores de contenido.
        </p>
        <div class="flex justify-center space-x-4">
          <DButton to="#">
            Conocer más
          </DButton>
          <DButton to="#" variant="ghost">
            Ver Documentación
          </DButton>
        </div>
      </div>
    </header>
    <Feature />
  </NuxtLayout>
</template>
