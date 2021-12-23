<script setup lang="ts">
import { version } from '../../../package.json';
import Navigation from '../ui/Navigation.vue';
</script>

<template>
  <header>
    <h1>Chicken Guru</h1>
    <span class="pb-4">Versão: {{ version }}</span>

    <Navigation />
  </header>
</template>

<style lang="scss">
header {
  @apply flex flex-col;

  img {
    max-width: 100px;
    @apply place-self-center;
  }
}
</style>
