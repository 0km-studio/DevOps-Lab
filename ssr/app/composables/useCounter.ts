import { ref } from 'vue'

export const useCounter = () => {
  const count = ref(0)
  const increment = () => count.value++
  return { count, increment }
}
