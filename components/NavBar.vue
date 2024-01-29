<template>
  <div class="tw-flex" :class="{ 'tw-flex-col': direction == 'vertical' }">
    <v-btn
      v-for="(link, index) in links"
      :key="link.name"
      variant="text"
      :ripple="false"
      nuxt
      :active="false"
      :to="link.to"
      :class="{ 'mt-8': index > 0 && mobile }"
    >
      {{ link.name }}
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'

interface Props {
  links: { to: string; name: string }[]
  direction?: 'horizontal' | 'vertical'
}
const { mobile } = useDisplay()

const { links } = withDefaults(defineProps<Props>(), {
  direction: 'horizontal',
})
</script>
