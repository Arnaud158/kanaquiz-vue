<script setup lang="ts">
import type Kana from '@/types/kana'
import type { GameQuestion } from '@/types/questions'
import { computed } from 'vue'

interface Props {
  previousQuestion?: GameQuestion
  correctAnswer?: boolean
}

const props = defineProps<Props>()

const formattedAnswer = computed(() => {
  const question = props.previousQuestion
  if (!question) return ''

  if ('correctAnswer' in question) {
    if (Array.isArray(question.correctAnswer)) {
      const answers = question.correctAnswer as [Kana, Kana, Kana]
      return `${answers[0].kana}${answers[1].kana}${answers[2].kana} = ${answers[0].romaji[0]}${answers[1].romaji[0]}${answers[2].romaji[0]}`
    }
    const answer = question.correctAnswer as Kana
    return `${answer.kana} = ${answer.romaji[0]}`
  }

  return ''
})
</script>
<template>
  <div v-if="props.correctAnswer === true" class="previous-result correct" title="Correct answer!">
    <span class="pull-left glyphicon glyphicon-none"></span>
    {{ formattedAnswer }}
    <span class="pull-right glyphicon glyphicon-ok"></span>
  </div>
  <div
    v-else-if="props.correctAnswer === false"
    class="previous-result wrong"
    title="Wrong answer!"
  >
    <span class="pull-left glyphicon glyphicon-none"></span>
    {{ formattedAnswer }}
    <span class="pull-right glyphicon glyphicon-remove"></span>
  </div>
  <div v-else class="previous-result none">Let's go! Which character is this?</div>
</template>
<style lang="scss" scoped>
.previous-result {
  max-width: 360px;
  padding: 8px;
  margin: 30px auto 28px;
  border-radius: 3px;
  @media (max-width: 768px) {
    margin: 0px auto 0px;
  }
}
.none {
  color: #f5f5f5;
  background-color: #aaa;
}
.correct {
  color: #f5f5f5;
  background-color: #5cb85c;
}
.wrong {
  color: #f5f5f5;
  background-color: #d9534f;
}
</style>
