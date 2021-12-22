<script setup lang="ts">
interface PropsType {
  label: string;
  disabledLabel: string;
  isDisabled: boolean;
}
defineProps<PropsType>();
</script>

<template>
  <button
    class="ui-button"
    :disabled="isDisabled"
    :class="{
      'ui-button--disabled': isDisabled,
    }"
  >
    <span v-if="isDisabled">{{ disabledLabel }}</span>
    <span v-else>{{ label }}</span>
  </button>
</template>

<style lang="scss">
.ui-button {
  display: inline-block;
  @apply font-bold;
  @apply py-2 px-8 rounded-md;
  @apply text-xl;
  @apply bg-yellow-500 text-zinc-900;

  &--disabled {
    @apply opacity-50;
  }
  &:hover {
    @apply bg-yellow-400 text-zinc-800;
  }
}
</style>
