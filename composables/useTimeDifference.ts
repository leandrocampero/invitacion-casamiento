export function useTimeDifference(target: Date) {
  const dayjs = useDayjs()

  const eventDate = ref(dayjs(target))
  const now = ref(dayjs())
  const timer: Ref<NodeJS.Timeout | null> = ref(null)

  onMounted(() => {
    timer.value = setTimeout(() => {
      now.value = dayjs()
    }, 1000)
  })

  onBeforeUnmount(() => {
    clearTimeout(timer.value!)
  })

  watch(now, () => {
    clearTimeout(timer.value!)

    timer.value = setTimeout(() => {
      now.value = dayjs()
    }, 1000)
  })

  const remainingTime = computed(() => {
    return {
      days: eventDate.value.diff(now.value, 'day'),
      hours: eventDate.value.diff(now.value, 'hour') % 24,
      minutes: eventDate.value.diff(now.value, 'minute') % 60,
      seconds: eventDate.value.diff(now.value, 'second') % 60,
    }
  })

  return { remainingTime, eventDate }
}
