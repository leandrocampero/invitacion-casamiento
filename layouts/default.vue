<template>
  <v-app>
    <v-app-bar :elevation="2">
      <template v-if="mobile" #append>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </template>

      <v-container>
        <v-row no-gutters align="center">
          <v-col cols="3" md="1" class="mr-4">
            <AppBarIcon />
          </v-col>

          <v-col>
            <v-app-bar-title>Boda Lour y Lean</v-app-bar-title>
          </v-col>

          <nav-bar v-if="!mobile" :links="links" />
        </v-row>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-if="mobile" v-model="drawer" location="right">
      <nav-bar :links="links" direction="vertical" />
    </v-navigation-drawer>

    <main class="tw-pt-16 tw-min-h-dvh">
      <slot />
    </main>
  </v-app>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'
import AppBarIcon from '../components/icons/AppBar.vue'

const { mobile } = useDisplay()

const drawer = ref(false)

const links = ref([
  { to: '/', name: 'Inicio' },
  { to: '/galeria', name: 'Galeria' },
  { to: '/contacto', name: 'Contacto' },
])
</script>
