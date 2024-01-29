<template>
  <v-app>
    <v-app-bar :elevation="2">
      <template v-if="mobile" #append>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </template>

      <v-container>
        <v-row no-gutters align="center">
          <v-col cols="3" md="1" class="mr-4">
            <icons-app-bar class="tw-max-h-12" />
          </v-col>

          <v-col>
            <v-app-bar-title class="serif-font">
              <span class="tw-text-2xl sm:tw-text-3xl"> Boda Lour y Lean </span>
            </v-app-bar-title>
          </v-col>

          <nav-bar v-if="!mobile" :links="links" />
        </v-row>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-if="mobile" v-model="drawer" location="right">
      <div class="tw-flex tw-h-full tw-flex-col tw-justify-center">
        <nav-bar :links="links" direction="vertical" />
      </div>
    </v-navigation-drawer>

    <main class="tw-min-h-dvh tw-pt-16">
      <slot />
    </main>
  </v-app>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()

const drawer = ref(false)

const links = ref([
  { to: '/', name: 'Inicio' },
  { to: '/galeria', name: 'Galeria' },
  { to: '/contacto', name: 'Contacto' },
])
</script>
