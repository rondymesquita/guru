<script setup lang="ts">
interface PropsType {
  label: string;
  isActive: boolean;
}
defineProps<PropsType>();
</script>

<template>
  <div
    class="ui-nav-button"
    :class="{
      'ui-nav-button--active': isActive,
    }"
  >
    <span>{{ label }}</span>
  </div>
</template>

<style lang="scss">
.ui-nav-button {
  display: inline-block;
  @apply font-bold;
  @apply py-2 px-8;
  @apply text-xl;
  // @apply bg-amber-400 text-zinc-800;
  @apply bg-yellow-500 text-zinc-900;

  &--active {
    @apply opacity-50;
    @apply shadow-inner shadow-gray-900;
    @apply bg-amber-500 text-zinc-800;
  }
}
</style>
