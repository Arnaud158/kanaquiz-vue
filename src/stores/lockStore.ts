import type { StageLevel } from '@/types/stageLevel'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLockStore = defineStore('lock', () => {
  const isLocked = ref<boolean>(false)
  const lockLevel = ref<StageLevel>('1')

  return { isLocked, lockLevel }
})
