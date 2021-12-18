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
  @apply py-2 px-4 font-semibold rounded-lg shadow-lg;
  @apply text-black text-xl bg-primary-500 hover:bg-primary-700;

  &--disabled {
    @apply bg-primary-700;
  }
}
</style>
