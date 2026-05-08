<script setup lang="ts">
import { useChoosenKanaStore } from '@/stores/choosenKanaStore'
import type KanaGroup from '@/types/kanaGroup'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

interface Props {
  kanaGroups: KanaGroup[]
  title: string
}

const props = defineProps<Props>()
const choosenKanaStore = useChoosenKanaStore()
const { t } = useI18n()

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

const accessibleTitle = computed(() => {
  const parts = props.title.split('·')
  if (parts.length === 2) {
    return { western: parts[0]!.trim(), japanese: parts[1]!.trim() }
  }
  return null
})

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

const getFirstPart = (str: string) => {
  const parts = str.split('(')
  return parts[0]
}

const selectAll = () => choosenKanaStore.addKanaGroups(props.kanaGroups)
const selectNone = () => choosenKanaStore.removeKanaGroups(props.kanaGroups)
const selectAllAlt = () => choosenKanaStore.addKanaGroups(altGroups.value)
const selectNoneAlt = () => choosenKanaStore.removeKanaGroups(altGroups.value)

const isSelected = (kanaGroup: KanaGroup): boolean => choosenKanaStore.isAlreadyPresent(kanaGroup)
const getRomaji = (kanaGroup: KanaGroup): string =>
  kanaGroup.kanas.map((kana) => kana.romaji[0]).join(' · ')

const getAccessibleText = (kanaGroup: KanaGroup): string => {
  return kanaGroup.kanas.map((kana) => kana.romaji[0]).join(', ')
}

const getKana = (kanaGroup: KanaGroup): string => {
  return kanaGroup.kanas.map((kana) => kana.kana).join(' · ')
}
</script>

<template>
  <div class="col-sm-6">
    <div class="panel panel-default">
      <div class="panel-heading">
        <span aria-hidden="true">{{ props.title }}</span>

        <span v-if="accessibleTitle" class="sr-only">
          <span lang="ja">{{ accessibleTitle.western }}</span>
        </span>
        <span v-else class="sr-only">{{ props.title }}</span>
      </div>
      <div class="panel-body selection-areas">
        <template v-for="kanaGrp in baseGroups" :key="kanaGrp.name">
          <span :id="`a11y_${kanaGrp.name}`" hidden lang="ja">
            {{ getAccessibleText(kanaGrp) }}
          </span>

          <input
            :id="`checkbox_${kanaGrp.name}`"
            type="checkbox"
            class="sr-only-checkbox"
            :checked="isSelected(kanaGrp)"
            :aria-labelledby="`a11y_${kanaGrp.name}`"
            @change="toggleKanaGroup(kanaGrp)"
          />

          <label
            :for="`checkbox_${kanaGrp.name}`"
            class="choose-row"
            aria-hidden="true"
            @mousedown="handlePress(kanaGrp.name)"
            @mouseup="handleRelease"
            @touchstart="handlePress(kanaGrp.name)"
            @touchend="handleRelease"
          >
            <span
              class="glyphicon glyphicon-small"
              :class="isSelected(kanaGrp) ? 'glyphicon-check' : 'glyphicon-unchecked'"
            ></span>

            <span>
              {{ pressedGroupName === kanaGrp.name ? getKana(kanaGrp) : getRomaji(kanaGrp) }}
            </span>
          </label>
        </template>
        <div v-if="altGroups.length > 0" class="choose-row header-row">
          <button
            type="button"
            class="icon-action"
            @click="(e) => handleToggleGroup(altGroups, altSelectionStatus, e)"
            :aria-label="t('chooseKanaComponent.chooseKanaAlternativeCharactersButtonAria')"
          >
            <span
              class="glyphicon glyphicon-small"
              :class="{
                'glyphicon-check': altSelectionStatus === 'all' || altSelectionStatus === 'some',
                half: altSelectionStatus === 'some',
                'glyphicon-unchecked': altSelectionStatus === 'none',
              }"
              aria-hidden="true"
            ></span>
          </button>
          <button
            type="button"
            class="text-action"
            @click="showAlternatives = !showAlternatives"
            :aria-label="getFirstPart(t('chooseKanaComponent.chooseKanaAlternativeCharacters'))"
          >
            <span class="toggle-caret" aria-hidden="true">{{ showAlternatives ? '▲' : '▼' }}</span>
            <span aria-hidden="true">{{
              t('chooseKanaComponent.chooseKanaAlternativeCharacters')
            }}</span>
          </button>
        </div>

        <template v-if="showAlternatives">
          <template v-for="kanaGrp in altGroups" :key="kanaGrp.name">
            <span :id="`a11y_${kanaGrp.name}`" hidden lang="ja">
              {{ getAccessibleText(kanaGrp) }}
            </span>

            <input
              :id="`checkbox_alt_${kanaGrp.name}`"
              type="checkbox"
              class="sr-only-checkbox"
              :checked="isSelected(kanaGrp)"
              :aria-labelledby="`a11y_${kanaGrp.name}`"
              @change="toggleKanaGroup(kanaGrp)"
            />

            <label
              :for="`checkbox_alt_${kanaGrp.name}`"
              class="choose-row alt-row"
              :class="{
                'divider-row': [
                  'hiragana_group_16_alternative',
                  'katakana_group_18_alternative',
                  'katakana_group_29_alternative',
                ].includes(kanaGrp.name),
              }"
              @mousedown="handlePress(kanaGrp.name)"
              @mouseup="handleRelease"
              @touchstart="handlePress(kanaGrp.name)"
              @touchend="handleRelease"
            >
              <span
                class="glyphicon glyphicon-small"
                :class="isSelected(kanaGrp) ? 'glyphicon-check' : 'glyphicon-unchecked'"
                aria-hidden="true"
              ></span>

              <span aria-hidden="true">
                {{ pressedGroupName === kanaGrp.name ? getKana(kanaGrp) : getRomaji(kanaGrp) }}
              </span>
            </label>
          </template>
        </template>
        <div v-if="alikeGroups.length > 0" class="choose-row header-row">
          <button
            type="button"
            class="icon-action"
            @click="(e) => handleToggleGroup(alikeGroups, alikeSelectionStatus, e)"
            :aria-label="t('chooseKanaComponent.chooseKanaLookAlikeCharactersButtonAria')"
          >
            <span
              class="glyphicon glyphicon-small"
              :class="{
                'glyphicon-check':
                  alikeSelectionStatus === 'all' || alikeSelectionStatus === 'some',
                half: alikeSelectionStatus === 'some',
                'glyphicon-unchecked': alikeSelectionStatus === 'none',
              }"
            ></span>
          </button>
          <button type="button" class="text-action" @click="showAlike = !showAlike">
            <span class="toggle-caret" aria-hidden="true">{{ showAlike ? '▲' : '▼' }}</span>
            {{ t('chooseKanaComponent.chooseKanaLookAlikeCharacters') }}
          </button>
        </div>

        <template v-if="showAlike">
          <template v-for="kanaGrp in alikeGroups" :key="kanaGrp.name">
            <span :id="`a11y_${kanaGrp.name}`" hidden lang="ja">
              {{ getAccessibleText(kanaGrp) }}
            </span>

            <input
              :id="`checkbox_alike_${kanaGrp.name}`"
              type="checkbox"
              class="sr-only-checkbox"
              :checked="isSelected(kanaGrp)"
              :aria-labelledby="`a11y_${kanaGrp.name}`"
              @change="toggleKanaGroup(kanaGrp)"
            />

            <label
              :for="`checkbox_alike_${kanaGrp.name}`"
              class="choose-row alt-row"
              :class="{
                'divider-row': [
                  'hiragana_group_16_alternative',
                  'katakana_group_18_alternative',
                  'katakana_group_29_alternative',
                ].includes(kanaGrp.name),
              }"
              @mousedown="handlePress(kanaGrp.name)"
              @mouseup="handleRelease"
              @touchstart="handlePress(kanaGrp.name)"
              @touchend="handleRelease"
            >
              <span
                class="glyphicon glyphicon-small"
                :class="isSelected(kanaGrp) ? 'glyphicon-check' : 'glyphicon-unchecked'"
                aria-hidden="true"
              ></span>

              <span aria-hidden="true">
                {{ pressedGroupName === kanaGrp.name ? getKana(kanaGrp) : getRomaji(kanaGrp) }}
              </span>
            </label>
          </template>
        </template>
      </div>
      <div class="panel-footer">
        <button type="button" class="btn btn-link" @click="selectAll">
          {{ t('chooseKanaComponent.chooseKanaFilterAll') }}
        </button>
        <span aria-hidden="true">&nbsp;&middot;&nbsp;</span>
        <button type="button" class="btn btn-link" @click="selectNone">
          {{ t('chooseKanaComponent.chooseKanaFilterNone') }}
        </button>
        <span aria-hidden="true">&nbsp;&middot;&nbsp;</span>
        <button type="button" class="btn btn-link" @click="selectAllAlt">
          {{ t('chooseKanaComponent.chooseKanaFilterAllAlternative') }}
        </button>
        <span aria-hidden="true">&nbsp;&middot;&nbsp;</span>
        <button type="button" class="btn btn-link" @click="selectNoneAlt">
          {{ t('chooseKanaComponent.chooseKanaFilterNoAlternative') }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn {
  padding: 0;
}

.icon-action,
.text-action {
  background: transparent;
  border: none;
  color: inherit;
  font-family: inherit;
  cursor: pointer;
  margin: 0;
  font-weight: normal;
}

label.choose-row,
label.alt-row {
  margin: 0;
  font-weight: normal;
  cursor: pointer;
}

.choose-row {
  display: block;
  width: 100%;
  text-align: left;
  font-size: 1em;
  padding: 5px;

  &:not(:last-child) {
    border-bottom: 1px solid #eee;
  }

  @media (min-width: 768px) {
    &:hover {
      background-color: #f4f4f4;
    }
  }

  .glyphicon-small {
    margin-right: 5px;
  }
}

.alt-row {
  padding-left: 20px;
  background-color: #fafafa;
}

.divider-row {
  border-top: 2px solid #ddd;
}

div.header-row {
  display: flex;
  align-items: center;
  padding: 0 !important;
}

.icon-action {
  padding: 5px;
}

.text-action {
  padding: 5px 5px 5px 0;
  flex-grow: 1;
  text-align: left;
}

.sr-only-checkbox {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

input.sr-only-checkbox:focus-visible + label.choose-row,
input.sr-only-checkbox:focus-visible + label.alt-row {
  outline: none !important;
  border-radius: 4px;
  box-shadow: 0 0 0 3px rgba(66, 139, 202, 0.5) !important;
  position: relative;
  z-index: 10;
}
.panel-heading {
  font-weight: bold;
}

.panel-body.selection-areas {
  padding: 7px;
}

.panel-footer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.toggle-caret {
  margin: 0 4px;
}

.glyphicon {
  font-size: 0.9em;

  &-check {
    color: green;

    &.half {
      color: #737373;
    }
  }

  &-unchecked {
    color: #737373;
  }
}
</style>
