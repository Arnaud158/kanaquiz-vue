import type { LockLevel } from '@/types/lockLevel'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLockStore = defineStore('lockState', () => {
  const isLocked = ref<boolean>(false)
  const lockLevel = ref<LockLevel>('1')

  function changeLockLevel(level: LockLevel): void {
    lockLevel.value = level
  }

  return { isLocked, lockLevel, changeLockLevel }
})
