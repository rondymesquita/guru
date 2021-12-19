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
    {{ label }}
  </div>
</template>

<style lang="scss">
.ui-nav-button {
  @apply py-2 px-4 font-semibold text-zinc-800 text-2xl;
  @apply bg-primary-500 hover:bg-primary-700;
  font-variant: small-caps;

  &--active {
    @apply bg-primary-600;
    @apply shadow-inner shadow-primary-900;
  }
}
</style>
