<script setup lang="ts">
import Navigation from '../ui/Navigation.vue';
</script>

<template>
  <header>
    <h1>Chicken Guru</h1>
    <img class="" src="../../assets/chicken-white.png" />

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
