<script setup lang="ts">
import { kanaDictionary } from '@/assets/kanaDictionary'
import ChooseKanaComponent from '@/components/ChooseKanaComponent.vue'
import LockLevelComponent from '@/components/LockLevelComponent.vue'
</script>

<template>
  <div class="outercontainer">
    <div class="container game">
      <div class="choose-characters">
        <div class="row">
          <div class="col-xs-12">
            <div class="panel panel-default">
              <div class="panel-body welcome">
                <h4>Welcome to Kana Pro!</h4>
                <p>Please choose the groups of characters that you'd like to be studying.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <ChooseKanaComponent title="Hiragana · ひらがな" :kanaGroups="kanaDictionary.hiragana" />
          <ChooseKanaComponent title="Katakana · カタカナ" :kanaGroups="kanaDictionary.katakana" />
          <div class="col-sm-3 col-xs-12 pull-right">
            <LockLevelComponent />
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
</style>
