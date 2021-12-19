<script setup lang="ts">
interface PropsType {
  label: string;
  disabledLabel: string;
  isDisabled: boolean;
}
defineProps<PropsType>();
</script>

<template>
  <div class="ui-button-shadow">
    <div class="ui-button-border">
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
    </div>
  </div>
</template>

<style lang="scss">
.ui-button-shadow {
  // @apply py-0 px-0 rounded-md;
  // @apply shadow-md shadow-zinc-800;
  display: inline-block;

  .ui-button-border {
    // @apply rounded-md;
    // @apply border-2 border-zinc-400;
    display: inline-block;

    .ui-button {
      @apply font-semibold;
      @apply py-1 px-4 rounded-md;
      @apply text-zinc-100 text-3xl;
      @apply bg-gradient-to-b from-yellow-500 via-amber-500 to-yellow-800;
      @apply border-2 border-zinc-800;
      box-shadow: inset 1px 1px 1px #a1a1aa, inset -1px -1px 1px #a1a1aa;
      font-variant: small-caps;

      &--disabled {
        @apply bg-gradient-to-b from-yellow-600  to-yellow-800;
        @apply text-yellow-200;
        box-shadow: inset 1px 1px 3px #3f3f46, inset -1px -1px 3px #3f3f46;
      }
      &:hover {
        @apply bg-gradient-to-b from-yellow-300  to-yellow-700;
      }
      span {
        text-shadow: 0px 1px 1px #000;
      }
    }
  }
}
</style>
