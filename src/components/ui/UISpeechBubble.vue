<template>
  <!-- <h1>asdas</h1> -->
  <div class="ui-speech">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
:slotted(p) {
  @apply text-zinc-800;
}

.ui-speech {
  &::after {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 9px solid;
    border-right: 9px solid transparent;
    border-top: 9px solid;
    border-bottom: 9px solid transparent;
    right: calc(50% - 9px);
    bottom: -8px;
    transform: rotate(225deg);
    @apply border-l-zinc-100 border-t-zinc-100;
  }
  // width: 400px;
  @apply px-8 py-4 mb-4 rounded-3xl;
  @apply relative;
  @apply bg-zinc-100;
  @apply text-xl italic;
}
</style>
