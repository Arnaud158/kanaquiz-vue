<script setup lang="ts">
import { useLockStore } from '@/stores/lockStore'
import type { StageLevel } from '@/types/stageLevel'
import { ref, watchEffect } from 'vue'
const lockStore = useLockStore()

const lockLevel = ref<string>(lockStore.lockLevel)

watchEffect(() => {
  if (!lockLevel.value) return
  const data = lockLevel.value as StageLevel
  lockStore.lockLevel = data
})
</script>
<template>
  <span class="pull-right lock"
    >Lock to stage &nbsp;
    <select v-model="lockLevel" v-if="lockStore.isLocked" class="stage-choice">
      <option value="1" selected>1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
    <input type="checkbox" v-model="lockStore.isLocked" @change="() => (lockLevel = '1')" />
  </span>
</template>
<style lang="scss" scoped>
.lock {
  color: #888;
  margin-bottom: 10px;
}
.stage-choice {
  border: 1px solid #999;
  padding-left: 5px;
  border-radius: 5px;
  margin-right: 5px;
  outline: none;
}
</style>
