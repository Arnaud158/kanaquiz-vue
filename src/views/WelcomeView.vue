<script setup lang="ts">
import { kanaDictionary } from '@/assets/kanaDictionary'
import ChooseKanaComponent from '@/components/ChooseKanaComponent.vue'
import LockLevelComponent from '@/components/LockLevelComponent.vue'
import { useChoosenKanaStore } from '@/stores/choosenKanaStore'
import { useGameStateStore } from '@/stores/gameStateStore'
import { useStageStore } from '@/stores/stageStore'
import { onMounted, onUnmounted, ref, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const choosenKanaStore = useChoosenKanaStore()
const gameStore = useGameStateStore()
const stageStore = useStageStore()
const router = useRouter()
const { t } = useI18n()
const cantStartGameBecauseNothingIsChoosed = ref<boolean>(false)

const startButtonRef = ref<HTMLElement | null>(null)
const isStartVisible = ref(true)
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (startButtonRef.value) {
    observer = new IntersectionObserver((entries) => {
      isStartVisible.value = entries[0]?.isIntersecting ?? false
    })
    observer.observe(startButtonRef.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})

const scrollToStartButton = () => {
  if (startButtonRef.value) {
    startButtonRef.value.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }
}

const startGame = () => {
  if (choosenKanaStore.choosenKana.length === 0) {
    cantStartGameBecauseNothingIsChoosed.value = true
    return
  }
  gameStore.startGame()
  const currentStage = stageStore.getCurrentStage()
  router.push({ path: '/game/' + currentStage })
}

watchEffect(() => {
  if (!cantStartGameBecauseNothingIsChoosed.value) {
    return
  }

  if (choosenKanaStore.choosenKana.length !== 0) {
    cantStartGameBecauseNothingIsChoosed.value = false
  }
})
</script>

<template>
  <div class="outercontainer">
    <div class="container game">
      <div class="choose-characters">
        <div class="row">
          <div class="col-xs-12">
            <div class="panel panel-default">
              <div class="panel-body welcome">
                <h4>{{ t('welcomeView.welcomePanelTitle') }}</h4>
                <p>{{ t('welcomeView.welcomePanelSubtitle') }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <ChooseKanaComponent
            :title="t('chooseKanaComponent.chooseKanaHiraganaTitle')"
            :kanaGroups="kanaDictionary.hiragana"
          />
          <ChooseKanaComponent
            :title="t('chooseKanaComponent.chooseKanaKatakanaTitle')"
            :kanaGroups="kanaDictionary.katakana"
          />
          <div class="col-sm-3 col-xs-12 pull-right">
            <LockLevelComponent />
          </div>
          <div class="col-sm-offset-3 col-sm-6 col-xs-12 text-center">
            <div v-if="cantStartGameBecauseNothingIsChoosed" class="error-message">
              {{ t('welcomeView.welcomePanelErrorNothingIsChoosed') }}
            </div>
            <button ref="startButtonRef" class="btn btn-danger" @click="startGame">
              {{ t('welcomeView.welcomeStartButton') }}
            </button>
          </div>
          <div v-show="!isStartVisible" class="down-arrow" @click="scrollToStartButton">
            {{ t('welcomeView.welcomeScrollToStartButton') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.welcome {
  p:last-child {
    margin-bottom: 0;
  }
  h4 {
    margin-top: 0;
  }
}
.error-message {
  color: #d9534f;
  padding-bottom: 10px;
}

.down-arrow {
  user-select: none;
  cursor: pointer;
  border-radius: 4px 4px 0 0;
  display: block;
  position: fixed;
  bottom: 20px;
  right: 12px;
  color: #fff;
  background: #d43f3a;
  padding: 7px 0 2px;
  width: 60px;
  text-align: center;
}

.down-arrow:after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  top: 100%;
  width: 0;
  height: 0;
  border-top: 10px solid #d43f3a;
  border-right: 30px solid transparent;
  border-bottom: 0 solid transparent;
  border-left: 30px solid transparent;
}
</style>
