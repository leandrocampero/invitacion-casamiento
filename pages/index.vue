<template>
  <div>
    <!-- HERO -->
    <v-parallax :src="imgRings" :height="mobile ? 442 : 480">
      <div
        class="d-flex flex-column fill-height text-white tw-px-10 tw-backdrop-brightness-0 tw-backdrop-opacity-25"
      >
        <div
          class="tw-mx-auto tw-flex tw-h-full tw-w-full tw-max-w-md tw-flex-col tw-items-center tw-justify-center"
        >
          <div
            class="tw-grid tw-w-full tw-grid-cols-7 tw-items-center tw-justify-items-stretch tw-gap-4"
          >
            <div class="tw-col-span-2">
              <div class="tw-h-0.5 tw-w-full tw-bg-slate-50" />
            </div>

            <div
              class="tw-col-span-3 tw-text-center tw-text-base tw-font-extrabold sm:tw-text-lg"
            >
              {{ eventDate.format('DD-MM-YYYY') }}
            </div>

            <div class="tw-col-span-2">
              <div class="tw-h-0.5 tw-w-full tw-bg-slate-50" />
            </div>
          </div>

          <div
            class="font-weight-thin mb-4 mt-2 letter-font tw-text-5xl tw-leading-none sm:tw-text-7xl"
          >
            Lour y Lean
          </div>

          <div class="tw-h-0.5 tw-w-full tw-bg-slate-50" />

          <div
            class="tw-mt-4 tw-grid tw-grid-rows-4 tw-items-center tw-justify-items-center tw-text-2xl tw-font-extrabold sm:tw-text-3xl"
          >
            <div>{{ '"' }}</div>
            <div>{{ 'Tantos siglos, tantos mundos,' }}</div>
            <div>{{ 'tanto espacio y coincidir' }}</div>
            <div>{{ '"' }}</div>
          </div>
        </div>
      </div>
    </v-parallax>

    <!-- COUNTDOWN -->
    <div class="tw-flex tw-p-4 tw-text-center">
      <div class="tw-mx-auto tw-w-full tw-max-w-md">
        <div class="serif-font tw-mb-4 tw-text-4xl">Falta</div>

        <v-row no-gutters>
          <v-col>
            <div class="serif-font tw-text-5xl">{{ remainingTime.days }}</div>
            <div class="tw-mt-2">Días</div>
          </v-col>
          <v-col class="flex-grow-0 serif-font tw-text-5xl">:</v-col>
          <v-col>
            <div class="serif-font tw-text-5xl">{{ remainingTime.hours }}</div>
            <div class="tw-mt-2">Horas</div>
          </v-col>
          <v-col class="flex-grow-0 serif-font tw-text-5xl">:</v-col>
          <v-col>
            <div class="serif-font tw-text-5xl">
              {{ remainingTime.minutes }}
            </div>
            <div class="tw-mt-2">Minutos</div>
          </v-col>
          <v-col class="flex-grow-0 serif-font tw-text-5xl">:</v-col>
          <v-col>
            <div class="serif-font tw-text-5xl">
              {{ remainingTime.seconds }}
            </div>
            <div class="tw-mt-2">Segundos</div>
          </v-col>
        </v-row>

        <v-btn
          variant="flat"
          color="red-lighten-3"
          rounded="0"
          size="x-large"
          class="tw-mt-4"
          target="_blank"
          :href="eventURL"
        >
          <span class="text-capitalize tw-text-xl tw-font-bold tw-text-white">
            Agendar fecha
          </span>
        </v-btn>
      </div>
    </div>

    <!-- LOCATION -->
    <v-sheet color="red-lighten-5" class="tw-p-8">
      <v-row justify="center" align="center">
        <v-col cols="12" md="4">
          <div class="tw-flex tw-items-center">
            <div class="serif-font tw-text-7xl">Fiesta</div>

            <party-icon class="tw-w-16" />
          </div>

          <div class="tw-my-8 tw-font-extrabold">
            <div class="tw-mb-2 tw-text-2xl tw-underline">Canzonieri Park</div>
            <div class="tw-text-xl">
              {{ eventDate.format('DD/MM/YYYY, HH:mm') }}
            </div>
            <div class="tw-text-xl">Av. Aconquija 3450</div>
            <div class="tw-text-xl">Yerba Buena, Tucumán</div>
          </div>

          <v-row no-gutters class="align-center tw-flex-nowrap">
            <v-col>
              <v-btn
                variant="flat"
                color="red-lighten-3"
                rounded="0"
                size="large"
                :ripple="false"
                href="https://maps.app.goo.gl/RMmdyVgjphcdQ7ij8"
                target="_blank"
              >
                <span
                  class="text-capitalize tw-text-xl tw-font-bold tw-text-white"
                >
                  Cómo llegar
                </span>
              </v-btn>
            </v-col>

            <v-col class="pl-4">
              <div class="tw-h-0.5 tw-w-full tw-bg-gray-200" />
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" md="4">
          <v-img
            :aspect-ratio="xlAndUp ? 2 : 1"
            cover
            :src="imgAbrazo"
            class="tw-mt-8 md:tw-mt-0"
          ></v-img>
        </v-col>
      </v-row>
    </v-sheet>

    <!-- GIFT/ASSINTANCE -->
    <v-sheet class="pa-8">
      <v-row justify="center" align="center">
        <v-col cols="12" md="4" order-md="last" class="">
          <div class="serif-font tw-mb-2 tw-text-6xl md:tw-text-5xl">
            Tu presencia será nuestro mayor regalo
          </div>

          <div class="tw-text-2xl">
            por eso te pedimos que abones tu tarjeta con
            <span class="tw-font-bold">$ 26.700 </span> (valor hasta el 30/6).
            Menores de 11 pagan $ 10.800, menores de 4 no pagan. Se puede ir
            pagando de una tarjeta.
          </div>
          <div class="tw-text-2xl">
            De esa forma nos ayudas a cumplir nuestro sueño.
            <span class="text-upper tw-font-bold">
              Esperamos contar con vos</span
            >.
          </div>

          <v-row
            no-gutters
            class="mt-4 tw-text-center md:tw-text-end"
            justify="center"
            justify-md="end"
            align="center"
          >
            <v-col cols="12" md="6" offset-md="6">
              <v-dialog width="500">
                <template #activator="{ props }">
                  <v-btn
                    variant="flat"
                    color="red-lighten-3"
                    rounded="0"
                    size="large"
                    :ripple="false"
                    v-bind="props"
                  >
                    <span
                      class="text-capitalize tw-text-xl tw-font-bold tw-text-white"
                    >
                      Datos bancarios
                    </span>
                  </v-btn>
                </template>

                <template #default="{ isActive }">
                  <v-card title="Datos bancarios">
                    <v-card-text class="px-4">
                      <v-table density="compact">
                        <tbody>
                          <tr>
                            <td>Banco</td>
                            <td>Galicia</td>
                          </tr>
                          <tr>
                            <td>CBU</td>
                            <td>0070089430004195207250</td>
                          </tr>
                          <tr>
                            <td>ALIAS</td>
                            <td>LCAMPERO.GALICIA</td>
                          </tr>
                        </tbody>
                      </v-table>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn
                        text="Cerrar"
                        @click="isActive.value = false"
                      ></v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </v-col>

            <v-col cols="4" md="6" class="pr-md-4">
              <div class="tw-my-8 tw-h-0.5 tw-bg-gray-200" />
            </v-col>

            <v-col cols="12" md="6">
              <v-btn
                variant="flat"
                color="red-lighten-3"
                rounded="0"
                :ripple="false"
                size="large"
                href="https://api.whatsapp.com/send?phone=543814099125&text=%C2%A1Confirmo%20mi%20asistencia!%F0%9F%98%80"
                target="_blank"
              >
                <span
                  class="text-capitalize tw-text-xl tw-font-bold tw-text-white"
                >
                  Confirmar asistencia
                </span>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" md="4" order-md="first">
          <v-img
            :aspect-ratio="xlAndUp ? 2 : 1"
            cover
            :src="imgJardin"
            class="tw-mt-8"
          ></v-img>
        </v-col>
      </v-row>
    </v-sheet>

    <!-- DRESS CODE AND MUSIC -->
    <v-sheet class="tw-p-8">
      <v-row justify="center" align="center">
        <v-col cols="12" md="4">
          <div class="tw-mb-4 tw-flex tw-items-center">
            <div class="serif-font tw-mb-2 tw-mr-4 tw-text-5xl sm:tw-text-6xl">
              Dress code
            </div>

            <icons-dress-code class="tw-w-16" />
          </div>

          <div class="tw-mb-8 tw-text-2xl">
            El código de vestimenta es
            <span class="tw-font-bold"
              >formal (no ir de color blanco y/o azul)</span
            >.
          </div>

          <div class="tw-mb-4 tw-flex tw-items-center">
            <div class="serif-font tw-mb-2 tw-mr-4 tw-text-5xl sm:tw-text-6xl">
              Música
            </div>

            <icons-play-list class="tw-w-10" />
          </div>

          <div class="tw-mb-4 tw-text-2xl">
            ¿Cuál es la canción que no debe faltar en la PlayList de la fiesta?
          </div>

          <v-btn
            variant="flat"
            color="red-lighten-3"
            rounded="0"
            :ripple="false"
            size="large"
            href="https://open.spotify.com/playlist/4m4m2wIQSJodw3myMq7Bh9?si=39bc7bacac364a7a&pt=b4aad93532f6a9da4fd624009c8ff3dc"
            target="_blank"
          >
            <span class="text-capitalize tw-text-xl tw-font-bold tw-text-white">
              Sugerir canciones
            </span>
          </v-btn>
        </v-col>

        <v-col cols="12" md="4">
          <v-img
            aspect-ratio="1"
            :cover="!xlAndUp"
            :src="imgCena"
            class="tw-relative tw-mt-8"
          >
          </v-img>
        </v-col>
      </v-row>
    </v-sheet>

    <div
      class="text-red-lighten-3 letter-font tw-my-10 tw-text-center tw-text-7xl"
    >
      Lour y Lean
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'
import srcImgAbrazo from '~/assets/images/abrazo.jpg'
import srcImgCena from '~/assets/images/cena-egresados.jpg'
import srcImgJardinJapones3 from '~/assets/images/jardin-japones-3.jpg'
import srcImgRings from '~/assets/images/rings-desktop.webp'
import PartyIcon from '~/components/icons/PartyIcon.vue'
import { useTimeDifference } from '~/composables/useTimeDifference'
import { EVENT_TIMESTAMP } from '~/constants'

useHead({
  title: 'Boda de Lour y Lean | Invitación',
})

definePageMeta({
  layout: 'default',
})

const { mobile, xlAndUp } = useDisplay()
const imgRings = ref(srcImgRings)
const imgAbrazo = ref(srcImgAbrazo)
const imgJardin = ref(srcImgJardinJapones3)
const imgCena = ref(srcImgCena)

const { remainingTime, eventDate } = useTimeDifference(
  new Date(EVENT_TIMESTAMP)
)

const eventURL = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Boda%20Lourdes%20y%20Leandro&dates=20240908T123000Z%2F20240908T210000`
</script>
