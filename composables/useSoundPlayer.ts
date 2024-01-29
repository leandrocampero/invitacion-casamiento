import ThousandYearsAudio from '~/assets/media/thousand-years.mp3'

export const useSoundPlayer = () => {
  let player: HTMLAudioElement

  if (process.client) {
    player = reactive(new Audio(ThousandYearsAudio))
  }
  const isPlaying = ref(false)

  function handleAudio() {
    if (isPlaying.value) {
      player.pause()
    } else {
      player.play()
    }

    isPlaying.value = !isPlaying.value
  }

  return { isPlaying, handleAudio }
}
