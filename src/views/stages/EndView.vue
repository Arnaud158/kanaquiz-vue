<script setup lang="ts">
import { useGameStateStore } from '@/stores/gameStateStore'
import { useLockStore } from '@/stores/lockStore'

const gameStateStore = useGameStateStore()
const lockStore = useLockStore()

const handleKeepPlaying = () => {
  lockStore.isLocked = true
  lockStore.lockLevel = '4'
  gameStateStore.startGame()
}
</script>
<template>
  <div class="text-center show-end">
    <h1>Congratulations!</h1>
    <h3>You have passed all 4 stages.</h3>
    <h4>Would you like to keep playing or go back to menu?</h4>
    <p>
      <button class="btn btn-danger keep-playing" @click="handleKeepPlaying">Keep playing</button>
    </p>
    <p>
      <button class="btn btn-danger back-to-menu" @click="gameStateStore.finishGame">
        Back to menu
      </button>
    </p>
  </div>
</template>
<style lang="scss" scoped>
.keep-playing {
  margin: 20px 0 20px;
}
.back-to-menu {
  margin: 0 0 20px;
}
.show-stage {
  margin-top: 130px;
  h3 {
    margin-top: 30px;
  }
  @media (max-width: 768px) {
    margin-top: 100px;
    margin-bottom: 100px;
  }
}
.show-end {
  margin-top: 80px;
  h3,
  h4 {
    margin-top: 20px;
  }
}

.stage-enter {
  opacity: 0.01;
}

.stage-enter.stage-enter-active {
  opacity: 1;
  transition: opacity 1s ease-in;
}

.stage-exit {
  opacity: 1;
}

.stage-exit.stage-exit-active {
  opacity: 0.01;
  transition: opacity 1s ease-in;
}
</style>
