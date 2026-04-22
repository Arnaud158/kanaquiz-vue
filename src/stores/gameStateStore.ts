import { defineStore } from 'pinia'
import { readonly, ref } from 'vue'
import type { GameState } from '@/types/gameState'
import { useStageStore } from './stageStore'
import router from '@/router'

export const useGameStateStore = defineStore('gameState', () => {
  const gameState = ref<GameState>('chooseCharacters')

  const stageStore = useStageStore()

  function startGame() {
    gameState.value = 'game'
    stageStore.changeToNewStageLevel('1')
  }

  function finishGame() {
    gameState.value = 'chooseCharacters'
    router.push('/')
  }

  return { gameState: readonly(gameState), startGame, finishGame }
})
