<template>
  <section id="features" class="mx-auto px-4 py-20 xl:container">
    <h2 class="mb-12 text-center text-3xl font-bold">
      Características
    </h2>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
      <div class="feature-card">
        <div flex items-center justify-between>
          <IconGithub max-w-25 />
          <DBadge>
            BETA
          </DBadge>
        </div>
        <h3 class="mb-2 text-xl font-bold">
          Descarga de GitHub
        </h3>
        <p>Descarga repositorios y archivos individuales de GitHub fácilmente.</p>
      </div>
      <div class="feature-card">
        <div flex items-center justify-between>
          <IconYoutube max-w-30 />
          <DBadge>
            BETA
          </DBadge>
        </div>
        <h3 class="mb-2 text-xl font-bold">
          Descarga de YouTube
        </h3>
        <p>Obtén videos y listas de reproducción de YouTube en varios formatos.</p>
      </div>
      <div class="feature-card">
        <div flex items-center justify-between>
          <IconFacebook max-w-35 />
          <DBadge>
            BETA
          </DBadge>
        </div>

        <h3 class="mb-2 text-xl font-bold">
          Descarga de Facebook
        </h3>
        <p>Descarga videos y fotos de Facebook con facilidad.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .feature-card {
    --uno: p-4 lg:p-8 rounded-lg border border-gray-200 transition-all duration-300 ease-in-out;
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .feature-card:hover {
    box-shadow:
      0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transform: translateY(-5px);
    cursor: pointer;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  #features {
    animation: fadeInUp 0.8s ease-out;
  }
</style>
