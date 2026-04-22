<script setup lang="ts">
import ChooseKanaLevelComponent from '@/components/ChooseKanaLevelComponent.vue'
import PreviousAnswerComponent from '@/components/PreviousAnswerComponent.vue'
import ProgressBarComponent from '@/components/ProgressBarComponent.vue'
import { useGameStateStore } from '@/stores/gameStateStore'
import { useQuestionStore } from '@/stores/questionStore'
import { useStageStore } from '@/stores/stageStore'
import type { LevelOneQuestion } from '@/types/questions'
import { computed, onBeforeMount, watch } from 'vue'

const questionStore = useQuestionStore()
const stageStore = useStageStore()
const gameStateStore = useGameStateStore()

const question = computed<LevelOneQuestion>(() => questionStore.currentQuestion as LevelOneQuestion)
const progression = computed<number>(() => stageStore.currentProgress)

watch(progression, () => {
  if (!stageStore.isStageFinished()) return
  stageStore.changeToNewStageLevel('2')
})

onBeforeMount(() => {
  gameStateStore.startGame()
})
</script>
<template>
  <div class="text-center question col-xs-12">
    <PreviousAnswerComponent
      :previous-question="questionStore.previousQuestion ?? undefined"
      :correct-answer="questionStore.previousQuestionWasCorrect ?? undefined"
    />
    <ChooseKanaLevelComponent
      :correct-answer="question.correctAnswer"
      :possibilties="question.possibleAnswers"
      mode="showKana"
    />
    <ProgressBarComponent />
  </div>
</template>
<style lang="scss" scoped>
.question {
  .progress {
    position: relative;
    background-color: #ddd;
    height: 30px;
    @media (max-width: 768px) {
      max-width: 360px;
      margin: 0 auto;
    }
  }
  .progress span {
    position: absolute;
    top: 5px;
    color: #444;
    display: block;
    width: 100%;
  }
  .previous-result {
    max-width: 360px;
    padding: 8px;
    margin: 30px auto 28px;
    border-radius: 3px;
    @media (max-width: 768px) {
      margin: 0px auto 0px;
    }
  }
  .size-up {
    font-size: 1.1em;
  }
  .none {
    background-color: #aaa;
    color: #f5f5f5;
  }
  .correct {
    color: #f5f5f5;
    background-color: #5cb85c;
  }
  .wrong {
    color: #f5f5f5;
    background-color: #d9534f;
  }
  .previous-result-none {
    max-width: 360px;
    padding: 6px;
    margin: 30px auto;
    color: #f5f5f5;
  }
  .big-character {
    font-size: 5em;
  }
  .answer-container {
    max-width: 360px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .answer-form-container {
    max-width: 100px;
    margin: 0 auto;
  }
  .answer-button {
    min-width: 90px;
    font-size: 2em;
    margin: 30px 0 60px;
    @media (max-width: 768px) {
      margin: 0px 0 15px;
    }
  }
  .answer-input,
  .answer-input:focus {
    outline: none;
    width: 110px;
    text-align: center;
    font-size: 2em;
    margin: 25px 0 60px;
    background: none;
    border: none;
    border-bottom: solid 1px #aaa;
    @media (max-width: 768px) {
      margin: 0px 0 25px;
    }
  }
  .no-hover {
    /* disables hover effect on touch screens */
    background-color: #fff;
    border-color: #ccc;
  }
}
</style>
