<template>
  <NuxtLayout>
    <WrapperNav>
      <NuxtLink to="/">
        <Logo />
      </NuxtLink>
      <DButton to="/downloader" variant="default">
        Downloader
      </DButton>
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
