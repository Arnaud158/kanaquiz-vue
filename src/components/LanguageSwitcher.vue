<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { watch } from 'vue'
import IconLanguage from './icons/IconLanguage.vue'

const { t, locale } = useI18n()

const supportedLocales = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
]

watch(locale, (newLocale) => {
  localStorage.setItem('user-locale', newLocale)
})
</script>

<template>
  <div class="lang-switcher">
    <IconLanguage />

    <select
      v-model="locale"
      class="lang-select"
      :aria-label="t('languageSwitcher.languageSwitcherAria')"
    >
      <option v-for="lang in supportedLocales" :key="lang.code" :value="lang.code">
        {{ lang.name }}
      </option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
.lang-switcher {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #e0e0e0;
}

.lang-select {
  background: transparent;
  color: inherit;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  outline: none;

  appearance: auto;
  padding: 2px 6px;
}

.lang-select:focus-visible {
  background-color: rgba(255, 255, 255, 0.1);
}

.lang-select option {
  background: #fff;
  color: #333;
}

.lang-select:hover {
  color: #fff;
}
</style>
