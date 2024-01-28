<template>
  <div class="tw-flex" :class="{ 'tw-flex-col': direction == 'vertical' }">
    <v-btn
      v-for="link in links"
      :key="link.name"
      variant="text"
      :ripple="false"
      nuxt
      :active="false"
      :to="link.to"
    >
      {{ link.name }}
    </v-btn>
  </div>
</template>

<script setup lang="ts">
interface Props {
  links: { to: string; name: string }[]
  direction?: 'horizontal' | 'vertical'
}

const { links } = withDefaults(defineProps<Props>(), {
  direction: 'horizontal',
})
</script>
