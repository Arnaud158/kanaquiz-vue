import type Kana from '@/types/kana'
import type KanaGroup from '@/types/kanaGroup'
import { shuffleArray } from '@/utils/arrayUtils'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useChoosenKanaStore = defineStore('choosenKana', () => {
  const choosenKana = ref<KanaGroup[]>([])

  const choosenKanaNames = computed(() => {
    return new Set(choosenKana.value.map((k) => k.name))
  })

  function addKanaGroup(kanaGroupToAdd: KanaGroup): void {
    if (isAlreadyPresent(kanaGroupToAdd)) {
      return
    }
    choosenKana.value.push(kanaGroupToAdd)
  }

  function addKanaGroups(kanaGroupsToAdd: KanaGroup[]): void {
    const newGroups = kanaGroupsToAdd.filter(
      (toAdd) => !choosenKana.value.some((existing) => existing.name === toAdd.name),
    )

    choosenKana.value.push(...newGroups)
  }

  function removeKanaGroup(kanaGroupToRemove: KanaGroup): void {
    choosenKana.value = choosenKana.value.filter(
      (kanaGroup) => kanaGroup.name !== kanaGroupToRemove.name,
    )
  }

  function removeKanaGroups(kanaGroupsToRemove: KanaGroup[]): void {
    const namesToRemove = new Set(kanaGroupsToRemove.map((k) => k.name))

    choosenKana.value = choosenKana.value.filter((kanaGroup) => !namesToRemove.has(kanaGroup.name))
  }

  function getRandomKanas(numberOfKanas: number): Kana[] {
    if (choosenKana.value.length === 0) {
      throw new Error('The choosen kana list is empty.')
    }

    const allKanas: Kana[] = choosenKana.value.flatMap((group) => group.kanas)

    if (numberOfKanas > allKanas.length) {
      throw new Error('The number of kana asked is too high')
    }

    const shuffled = shuffleArray(allKanas)

    return shuffled.slice(0, numberOfKanas)
  }

  function isAlreadyPresent(kanaGroupToVerify: KanaGroup): boolean {
    return choosenKanaNames.value.has(kanaGroupToVerify.name)
  }

  return {
    choosenKana,
    addKanaGroup,
    addKanaGroups,
    removeKanaGroup,
    removeKanaGroups,
    getRandomKanas,
    isAlreadyPresent,
  }
})
