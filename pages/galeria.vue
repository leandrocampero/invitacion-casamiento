<template>
  <div
    class="tw-grid tw-grid-cols-1 tw-gap-4 tw-p-4 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-px-40 lg:tw-py-10 xl:tw-px-60"
  >
    <v-img
      v-for="(img, index) in images"
      :key="index"
      aspect-ratio=" 1"
      cover
      :src="img"
      class=""
    ></v-img>
  </div>
</template>

<script setup lang="ts">
import srcAbrazo from '~/assets/images/abrazo.jpg'
import srcAquarium from '~/assets/images/aquarium.jpg'
import srcCasamiento from '~/assets/images/casamiento.jpg'
import srcCenaEgresados from '~/assets/images/cena-egresados.jpg'
import srcCumpleaños from '~/assets/images/cumpleaños.jpg'
import srcJardinJapones1 from '~/assets/images/jardin-japones-1.jpg'
import srcJardinJapones2 from '~/assets/images/jardin-japones-2.jpg'
import srcJardinJapones3 from '~/assets/images/jardin-japones-3.jpg'
import srcPlaya from '~/assets/images/playa.jpg'

const images = reactive([
  srcAbrazo,
  srcAquarium,
  srcCasamiento,
  srcCenaEgresados,
  srcCumpleaños,
  srcJardinJapones1,
  srcJardinJapones2,
  srcJardinJapones3,
  srcPlaya,
])
</script>
