import type { StageLevel } from '@/types/stageLevel'
import { defineStore } from 'pinia'
import { readonly, ref } from 'vue'
import { useLockStore } from './lockStore'
import { quizSettings } from '@/assets/quizSettings'
import { useQuestionStore } from './questionStore'
import router from '@/router'

export const useStageStore = defineStore('stage', () => {
  const currentStage = ref<StageLevel>('1')
  const currentProgress = ref<number>(1)
  const stageLength = ref<number>(0)

  const lockStore = useLockStore()
  const questionStore = useQuestionStore()

  function getCurrentStage(): StageLevel {
    if (lockStore.isLocked) {
      return lockStore.lockLevel
    }

    return currentStage.value
  }

  function changeToNewStageLevel(stageLevel: StageLevel, changeRoute: boolean = true) {
    if (lockStore.isLocked) {
      currentStage.value = lockStore.lockLevel
    } else {
      currentStage.value = stageLevel
      questionStore.resetPreviousQuestion()
    }
    stageLength.value = quizSettings.stageLength[stageLevel]
    currentProgress.value = 0
    questionStore.generateNextQuestion()
    if (changeRoute) {
      router.push('/game/' + currentStage.value)
    }
  }

  function correctAnswer() {
    currentProgress.value = Math.min(stageLength.value, currentProgress.value + 1)
  }

  function badAnswser() {
    currentProgress.value = Math.max(0, currentProgress.value - 1)
  }

  function isStageFinished(): boolean {
    return currentProgress.value === stageLength.value
  }

  return {
    currentProgress: readonly(currentProgress),
    stageLength: readonly(stageLength),
    getCurrentStage,
    changeToNewStageLevel,
    correctAnswer,
    badAnswser,
    isStageFinished,
  }
})
