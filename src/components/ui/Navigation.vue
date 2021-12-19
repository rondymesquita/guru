<script setup lang="ts">
import UINavButton from '../ui/UINavButton.vue';
</script>

<template>
  <nav>
    <router-link
      to="/"
      v-slot="{ href, route, navigate, isActive, isExactActive }"
    >
      <UINavButton
        label="Planning Poker"
        :is-active="isExactActive"
      ></UINavButton>
    </router-link>
    <router-link
      to="/luck-day"
      v-slot="{ href, route, navigate, isActive, isExactActive }"
    >
      <UINavButton
        label="Sorte do Dia!"
        :is-active="isExactActive"
      ></UINavButton>
    </router-link>
  </nav>
</template>

<style lang="scss">
nav {
  @apply flex flex-row justify-center pt-4;
  // @apply -z-0;
}
</style>
