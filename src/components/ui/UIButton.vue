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
  @apply py-2 px-4 font-semibold shadow-lg;
  @apply text-zinc-800 text-2xl bg-primary-500 hover:bg-primary-600;
  font-variant: small-caps;

  &--disabled {
    @apply bg-primary-600;
  }
}
</style>
