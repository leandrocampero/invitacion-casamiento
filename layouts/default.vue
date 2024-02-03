<template>
  <v-app>
    <v-app-bar :elevation="2">
      <template v-if="mobile" #append>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </template>

      <v-container>
        <v-row no-gutters align="center">
          <v-col cols="3" md="1" class="mr-4">
            <nuxt-link to="/">
            <icons-app-bar class="tw-max-h-12" />
            </nuxt-link>
          </v-col>

          <v-col>
            <nuxt-link to="/">
            <v-app-bar-title class="serif-font">
                <span class="tw-text-2xl sm:tw-text-3xl">
                  Boda Lour y Lean
                </span>
            </v-app-bar-title>
            </nuxt-link>
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

    <v-dialog v-model="dialog" width="500">
      <template #default="{ isActive }">
        <v-card>
          <v-card-text class="tw-text-center">
            Esta invitación la hicimos con mucho cariño y viene con una sorpresa
            musical. Dale play para escucharla mientras estes aquí.
          </v-card-text>

          <v-card-text class="tw-flex tw-justify-center">
            <v-btn
              icon="mdi-play"
              variant="flat"
              color="red-lighten-4"
              @click="
                () => {
                  isActive.value = false
                  handleAudio()
                }
              "
            />
          </v-card-text>
        </v-card>
      </template>
    </v-dialog>

    <div v-if="!dialog" class="tw-fixed tw-bottom-1 tw-right-2">
      <v-btn
        :icon="isPlaying ? 'mdi-pause' : 'mdi-play'"
        variant="flat"
        color="red-lighten-4"
        @click="handleAudio"
      />
    </div>
  </v-app>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'
import { useSoundPlayer } from '~/composables/useSoundPlayer'

const { mobile } = useDisplay()
const { handleAudio, isPlaying } = useSoundPlayer()

const drawer = ref(false)
const dialog = ref(true)

const links = ref([
  { to: '/', name: 'Inicio' },
  { to: '/galeria', name: 'Galeria' },
])
</script>
