import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { GameState } from '@/types/gameState'

export const useGameStateStore = defineStore('gameState', () => {
  const gameState = ref<GameState>('chooseCharacters')

  function changeState(newState: GameState): void {
    gameState.value = newState
  }

  return { gameState, changeState }
})
