<template>
  <div class="tw-text-center tw-h-lvh">
    <test-component />

    <div class="tw-flex tw-justify-end">
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vero
        voluptatum cumque inventore assumenda, cupiditate accusantium
        repudiandae esse. Ipsam molestias necessitatibus quod consequatur
        repellat dolorem debitis quibusdam in facere nulla eveniet laborum culpa
        natus dolores pariatur sapiente, blanditiis modi omnis possimus
        temporibus atque reprehenderit dolorum error! Ex et quae officia.
      </div>

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vero
        voluptatum cumque inventore assumenda, cupiditate accusantium
        repudiandae esse. Ipsam molestias necessitatibus quod consequatur
        repellat dolorem
      </div>
    </div>

    <v-btn
      block
      prepend-icon="mdi-check-circle"
      append-icon="mdi-account-circle"
    >
      <template #prepend>
        <v-icon color="success"></v-icon>
      </template>

      <span class="tw-font-semibold"> Button </span>

      <template #append>
        <v-icon color="warning"></v-icon>
      </template>
    </v-btn>

    <v-parallax
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    ></v-parallax>
  </div>
</template>

<script setup lang="ts">
import TestComponent from '../components/TestComponent.vue'

definePageMeta({
  layout: 'default',
})
</script>
