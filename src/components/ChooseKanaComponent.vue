<script setup lang="ts">
import { useChoosenKanaStore } from '@/stores/choosenKanaStore'
import type KanaGroup from '@/types/kanaGroup'
import { computed, ref } from 'vue'

interface Props {
  kanaGroups: KanaGroup[]
  title: string
}

const props = defineProps<Props>()
const choosenKanaStore = useChoosenKanaStore()

const showAlternatives = ref<boolean>(false)
const showAlike = ref<boolean>(false)
const pressedGroupName = ref<string | null>(null)

const handlePress = (name: string) => (pressedGroupName.value = name)
const handleRelease = () => (pressedGroupName.value = null)

const baseGroups = computed(() =>
  props.kanaGroups.filter((g) => !g.name.endsWith('_alternative') && !g.name.endsWith('_alike')),
)

const altGroups = computed(() => props.kanaGroups.filter((g) => g.name.endsWith('_alternative')))

const alikeGroups = computed(() => props.kanaGroups.filter((g) => g.name.endsWith('_alike')))

const getSelectionStatus = (groups: KanaGroup[]): 'none' | 'some' | 'all' => {
  if (groups.length === 0) return 'none'
  const selectedCount = groups.filter((g) => choosenKanaStore.isAlreadyPresent(g)).length
  if (selectedCount === groups.length) return 'all'
  if (selectedCount > 0) return 'some'
  return 'none'
}

const altSelectionStatus = computed(() => getSelectionStatus(altGroups.value))

const alikeSelectionStatus = computed(() => getSelectionStatus(alikeGroups.value))

const toggleKanaGroup = (kanaGroup: KanaGroup) => {
  if (choosenKanaStore.isAlreadyPresent(kanaGroup)) {
    choosenKanaStore.removeKanaGroup(kanaGroup)
  } else {
    choosenKanaStore.addKanaGroup(kanaGroup)
  }
}

const handleToggleGroup = (groups: KanaGroup[], status: 'none' | 'some' | 'all', event: Event) => {
  event.stopPropagation()

  if (status === 'all') {
    choosenKanaStore.removeKanaGroups(groups)
  } else {
    choosenKanaStore.addKanaGroups(groups)
  }
}

const selectAll = () => choosenKanaStore.addKanaGroups(props.kanaGroups)
const selectNone = () => choosenKanaStore.removeKanaGroups(props.kanaGroups)
const selectAllAlt = () => choosenKanaStore.addKanaGroups(altGroups.value)
const selectNoneAlt = () => choosenKanaStore.removeKanaGroups(altGroups.value)

const isSelected = (kanaGroup: KanaGroup): boolean => choosenKanaStore.isAlreadyPresent(kanaGroup)
const getRomaji = (kanaGroup: KanaGroup): string =>
  kanaGroup.kanas.map((kana) => kana.romaji[0]).join(' · ')

const getKana = (kanaGroup: KanaGroup): string => {
  return kanaGroup.kanas.map((kana) => kana.kana).join(' · ')
}
</script>

<template>
  <div class="col-sm-6">
    <div class="panel panel-default">
      <div class="panel-heading">{{ props.title }}</div>
      <div class="panel-body selection-areas">
        <div
          v-for="kanaGrp in baseGroups"
          :key="kanaGrp.name"
          class="choose-row"
          @click="() => toggleKanaGroup(kanaGrp)"
          @mousedown="handlePress(kanaGrp.name)"
          @mouseup="handleRelease"
          @touchstart="handlePress(kanaGrp.name)"
          @touchend="handleRelease"
        >
          <span
            class="glyphicon glyphicon-small"
            :class="isSelected(kanaGrp) ? 'glyphicon-check' : 'glyphicon-unchecked'"
          ></span>
          {{ pressedGroupName === kanaGrp.name ? getKana(kanaGrp) : getRomaji(kanaGrp) }}
        </div>
        <div
          v-if="altGroups.length > 0"
          class="choose-row"
          @click="showAlternatives = !showAlternatives"
        >
          <span
            class="glyphicon glyphicon-small"
            :class="{
              'glyphicon-check': altSelectionStatus === 'all' || altSelectionStatus === 'some',
              half: altSelectionStatus === 'some',
              'glyphicon-unchecked': altSelectionStatus === 'none',
            }"
            @click="(e) => handleToggleGroup(altGroups, altSelectionStatus, e)"
          ></span>
          <span class="toggle-caret">{{ showAlternatives ? '▲' : '▼' }}</span>
          Alternative characters (ga · ba · kya..)
        </div>

        <template v-if="showAlternatives">
          <div
            v-for="kanaGrp in altGroups"
            :key="kanaGrp.name"
            class="choose-row alt-row"
            :class="{
              'divider-row': [
                'hiragana_group_16_alternative',
                'katakana_group_18_alternative',
                'katakana_group_29_alternative',
              ].includes(kanaGrp.name),
            }"
            @click="toggleKanaGroup(kanaGrp)"
            @mousedown="handlePress(kanaGrp.name)"
            @mouseup="handleRelease"
            @touchstart="handlePress(kanaGrp.name)"
            @touchend="handleRelease"
          >
            <span
              class="glyphicon glyphicon-small"
              :class="isSelected(kanaGrp) ? 'glyphicon-check' : 'glyphicon-unchecked'"
            ></span>
            {{ pressedGroupName === kanaGrp.name ? getKana(kanaGrp) : getRomaji(kanaGrp) }}
          </div>
        </template>

        <div v-if="alikeGroups.length > 0" class="choose-row" @click="showAlike = !showAlike">
          <span
            class="glyphicon glyphicon-small"
            :class="{
              'glyphicon-check': alikeSelectionStatus === 'all' || alikeSelectionStatus === 'some',
              half: alikeSelectionStatus === 'some',
              'glyphicon-unchecked': alikeSelectionStatus === 'none',
            }"
            @click="(e) => handleToggleGroup(alikeGroups, alikeSelectionStatus, e)"
          ></span>
          <span class="toggle-caret">{{ showAlike ? '▲' : '▼' }}</span>
          Look-alike characters
        </div>

        <template v-if="showAlike">
          <div
            v-for="kanaGrp in alikeGroups"
            :key="kanaGrp.name"
            class="choose-row alt-row"
            :class="{
              'divider-row': [
                'hiragana_group_16_alternative',
                'katakana_group_18_alternative',
                'katakana_group_29_alternative',
              ].includes(kanaGrp.name),
            }"
            @click="toggleKanaGroup(kanaGrp)"
            @mousedown="handlePress(kanaGrp.name)"
            @mouseup="handleRelease"
            @touchstart="handlePress(kanaGrp.name)"
            @touchend="handleRelease"
          >
            <span
              class="glyphicon glyphicon-small"
              :class="isSelected(kanaGrp) ? 'glyphicon-check' : 'glyphicon-unchecked'"
            ></span>
            {{ pressedGroupName === kanaGrp.name ? getKana(kanaGrp) : getRomaji(kanaGrp) }}
          </div>
        </template>
      </div>
      <div class="panel-footer">
        <button type="button" class="btn btn-link" @click="selectAll">All</button>
        &nbsp;&middot;&nbsp;
        <button type="button" class="btn btn-link" @click="selectNone">None</button>
        &nbsp;&middot;&nbsp;
        <button type="button" class="btn btn-link" @click="selectAllAlt">All alternative</button>
        &nbsp;&middot;&nbsp;
        <button type="button" class="btn btn-link" @click="selectNoneAlt">No alternative</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn {
  padding: 0px;
}

.choose-characters {
  .panel-heading {
    font-weight: bold;
  }
  .panel-heading span {
    color: #aaa;
  }
  .panel-footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .panel-footer a {
    text-decoration: none;
    color: #337ab7;
  }
  .choose-row {
    font-size: 1em;
    padding: 5px;
  }
  .choose-row:not(:last-child) {
    border-bottom: 1px #eee solid;
  }
  .alt-row {
    padding-left: 20px;
    background-color: #fafafa;
  }
  .divider-row {
    border-top: 2px #ddd solid;
  }
  .toggle-caret {
    margin: 0 4px;
  }
  @media (min-width: 768px) {
    .choose-row:hover {
      background-color: #f4f4f4;
    }
  }
  .choose-row:hover {
    cursor: pointer;
  }
  .glyphicon {
    font-size: 0.9em;
  }
  .glyphicon-check {
    color: green;
  }
  .glyphicon-check.half {
    color: #ccc;
  }
  .glyphicon-unchecked {
    color: #ccc;
  }
  .selection-areas {
    padding: 7px;
  }
  .success-percent {
    color: #ccc;
  }
}
</style>
