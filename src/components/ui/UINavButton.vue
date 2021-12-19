<script setup lang="ts">
interface PropsType {
  label: string;
  isActive: boolean;
}
defineProps<PropsType>();
</script>

<template>
  <div class="ui-nav-button-shadow">
    <div class="ui-nav-button-border">
      <div
        class="ui-nav-button"
        :class="{
          'ui-nav-button--active': isActive,
        }"
      >
        <span>{{ label }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.ui-nav-button-shadow {
  // @apply py-0 px-0 rounded-md;
  // // @apply bg-red-500;
  // @apply shadow-md shadow-zinc-800;
  display: inline-block;

  .ui-nav-button-border {
    // @apply rounded-md;
    // @apply border-2 border-zinc-400;
    display: inline-block;

    .ui-nav-button {
      @apply font-semibold text-xl;
      @apply py-1 px-4 rounded-md;
      @apply bg-gradient-to-b from-yellow-600  to-yellow-800;
      @apply text-orange-200;
      @apply border-2 border-zinc-800;
      box-shadow: inset 1px 1px 3px #3f3f46, inset -1px -1px 3px #3f3f46;

      font-variant: small-caps;

      &--active {
        @apply text-yellow-50;
        @apply bg-gradient-to-b from-yellow-500 via-amber-500 to-yellow-800;
        @apply border-2 border-zinc-800;
        box-shadow: inset 1px 1px 1px #a1a1aa, inset -1px -1px 1px #a1a1aa;
      }

      span {
        text-shadow: 0px 1px 1px #000;
      }
    }
  }
}
</style>
