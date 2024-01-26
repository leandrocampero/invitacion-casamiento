<template>
  <div class="tw-text-center">
    <test-component />

    <span>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vero
      voluptatum cumque inventore assumenda, cupiditate accusantium repudiandae
      esse. Ipsam molestias necessitatibus quod consequatur repellat dolorem
      debitis quibusdam in facere nulla eveniet laborum culpa natus dolores
      pariatur sapiente, blanditiis modi omnis possimus temporibus atque
      reprehenderit dolorum error! Ex et quae officia.
    </span>
  </div>
</template>

<script setup lang="ts">
import TestComponent from '../components/TestComponent.vue'

definePageMeta({
  layout: 'default',
})
</script>
