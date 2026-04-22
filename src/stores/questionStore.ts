import { defineStore } from 'pinia'
import { readonly, ref } from 'vue'
import { useChoosenKanaStore } from './choosenKanaStore'
import { useStageStore } from './stageStore'
import type { AllQuestionTypes, GameQuestion } from '@/types/questions'
import { QuestionFactory } from '@/utils/questionFactory'
import type { StageLevel } from '@/types/stageLevel'

export const useQuestionStore = defineStore('question', () => {
  const choosenKanaStore = useChoosenKanaStore()
  const stageStore = useStageStore()

  const currentQuestion = ref<AllQuestionTypes | null>(null)
  const previousQuestion = ref<GameQuestion | null>(null)
  const previousQuestionWasCorrect = ref<boolean | null>(null)

  const generators: Record<StageLevel, () => AllQuestionTypes> = {
    '1': () => QuestionFactory.level1(choosenKanaStore.getRandomKanas(3)),
    '2': () => QuestionFactory.level2(choosenKanaStore.getRandomKanas(3)),
    '3': () => QuestionFactory.level3(choosenKanaStore.getRandomKanas(1)[0]!),
    '4': () => QuestionFactory.level4(choosenKanaStore.getRandomKanas(3)),
  }

  function generateNextQuestion() {
    const stage = stageStore.getCurrentStage()
    const generator = generators[stage]

    currentQuestion.value = generator()
  }

  function handleQuestionAnswer(isCorrectAnswer: boolean) {
    if (isCorrectAnswer) {
      stageStore.correctAnswer()
    } else {
      stageStore.badAnswser()
    }
    previousQuestion.value = currentQuestion.value
    previousQuestionWasCorrect.value = isCorrectAnswer
    generateNextQuestion()
  }

  return {
    currentQuestion: readonly(currentQuestion),
    previousQuestion: readonly(previousQuestion),
    previousQuestionWasCorrect: readonly(previousQuestionWasCorrect),
    generateNextQuestion,
    handleQuestionAnswer,
  }
})
