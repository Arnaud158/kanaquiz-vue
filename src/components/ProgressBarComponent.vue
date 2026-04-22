<script setup lang="ts">
import { useLockStore } from '@/stores/lockStore'
import { useStageStore } from '@/stores/stageStore'
import { computed } from 'vue'

const lockStore = useLockStore()
const stageStore = useStageStore()

const stageProgressPercentage = computed<number>(() => {
  return Math.round((stageStore.currentProgress / stageStore.stageLength) * 100)
})
</script>
<template>
  <div class="progress">
    <progress
      class="native-progress"
      aria-label="Stage progress"
      :value="stageStore.currentProgress"
      :max="stageStore.stageLength"
      :style="{ '--progress-percent': stageProgressPercentage + '%' }"
    ></progress>

    <span class="progress-text">
      Stage {{ stageStore.getCurrentStage() }}
      <span v-if="lockStore.isLocked">&nbsp;(Locked)</span>
    </span>
  </div>
</template>
<style lang="scss" scoped>
.progress {
  position: relative;
  background-color: #ddd;
  height: 30px;
  border-radius: 4px;
  overflow: hidden;
  @media (max-width: 768px) {
    max-width: 360px;
    margin: 0 auto;
  }
  .native-progress {
    appearance: none;
    -webkit-appearance: none;
    width: 100%;
    height: 100%;
    border: none;

    background-color: transparent;
    background-image: linear-gradient(#5bc0de, #5bc0de);
    background-repeat: no-repeat;
    background-size: var(--progress-percent, 0%) 100%;
    transition: background-size 0.4s ease-in-out;

    &::-webkit-progress-bar {
      background-color: transparent;
    }
    &::-webkit-progress-value {
      background-color: transparent;
    }

    &::-moz-progress-bar {
      background-color: transparent;
    }
  }
  .progress-text {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #444;
    pointer-events: none;
  }
}
</style>
