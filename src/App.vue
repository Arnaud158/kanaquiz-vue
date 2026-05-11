<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarComponent from './components/NavbarComponent.vue'
import { useI18n } from 'vue-i18n'
import { onMounted, watchEffect } from 'vue'
import { localStorageVersion } from './main'

const { t, locale } = useI18n()

watchEffect(() => {
  document.title = t('html.htmlTitle')
  document.documentElement.lang = locale.value
})

onMounted(() => {
  const currentLocalStorageVersion = localStorage.getItem('localStorageVersion')
  if (
    currentLocalStorageVersion === null ||
    Number(currentLocalStorageVersion) !== localStorageVersion
  ) {
    localStorage.clear()
    localStorage.setItem('localStorageVersion', localStorageVersion.toString())
    globalThis.location.reload()
  }
})
</script>

<template>
  <header>
    <NavbarComponent />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
@use 'sass:color';
html {
  height: 100%; /* height sets are for android chrome background fix */
  min-height: 100%;
}
body {
  min-height: 100%;
  font-family:
    /* Latin characters */
    'Trebuchet MS',
    'Lucida Grande',
    'Lucida Sans Unicode',
    'Lucida Sans',
    Tahoma,
    /* Japanese characters */ 'Hiragino Sans',
    'Hiragino Kaku Gothic ProN',
    'Meiryo',
    'Yu Gothic',
    'Noto Sans CJK JP',
    'Noto Sans JP',
    /* default */ sans-serif;
  background-color: #e5e5e5;
  color: #111;
}

*:focus-visible:not([tabindex='-1']) {
  outline: none !important;
  border-radius: 4px;
  box-shadow: 0 0 0 3px rgba(66, 139, 202, 0.5) !important;
  transition: box-shadow 0.2s ease;
  position: relative;
  z-index: 10;
}
.outercontainer {
  background-color: #f5f5f5;
  padding-bottom: 20px;
  border-bottom: 1px #dadada solid;
  min-height: 500px; /* 690 */
  @media (max-width: 768px) {
    min-height: auto;
  }
}
.container {
  margin: 0 auto;
  max-width: 968px;
}
.row {
  margin: 0;
}
.login-button {
  font-size: 1.3em;
  margin-top: 15px;
  margin-bottom: 0;
  a {
    color: #888;
  }
}
.game {
  padding-top: 70px;
}
.glyphicon-none:before {
  content: '\2122';
  color: transparent !important;
}
.btn-link {
  color: #31699b;
}
a[href] {
  color: #31699b;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;

  &:hover,
  &:active {
    color: color.adjust(#3473a7, $lightness: -15%);
    text-decoration-thickness: 2px;
  }
}
.btn-danger {
  background-color: #d43f3a;
}
.form-control,
select {
  color: #696969;
}
</style>
