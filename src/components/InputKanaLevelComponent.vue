<script setup lang="ts">
import { useQuestionStore } from '@/stores/questionStore'
import type Kana from '@/types/kana'
import { cartesianProductMultiple } from '@/utils/arrayUtils'
import { computed, ref } from 'vue'

interface Props {
  correctAnswer: Kana[]
}

const props = defineProps<Props>()

const questionStore = useQuestionStore()

const userInput = ref<string>('')

const formatedQuestion = computed<string>((): string => {
  return props.correctAnswer.map((kana) => kana.kana).join('')
})

const computeAllAnswerPossibilities = computed<string[]>(() => {
  const romajis = props.correctAnswer.map((kana) => kana.romaji)
  if (romajis.length === 1) {
    return cartesianProductMultiple(romajis[0]!).map((str) => str.join(''))
  } else if (romajis.length === 3) {
    const test = cartesianProductMultiple(romajis[0]!, romajis[1]!, romajis[2]!).map((str) =>
      str.join(''),
    )
    console.log(test)
    return test.flat()
  }
  return ['']
})

const handleAnswer = (e: SubmitEvent) => {
  e.preventDefault()
  const isCorrectAnswer = computeAllAnswerPossibilities.value.includes(
    userInput.value.trim().toLowerCase(),
  )
  questionStore.handleQuestionAnswer(isCorrectAnswer)
  userInput.value = ''
}
</script>
<template>
  <div class="big-character">{{ formatedQuestion }}</div>
  <div class="answer-container">
    <div class="answer-form-container">
      <form @submit="handleAnswer">
        <input autofocus class="answer-input" type="text" v-model="userInput" />
      </form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
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
</style>
