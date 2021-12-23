<script setup lang="ts">
interface PropsType {
  isAnimated: boolean;
}
defineProps<PropsType>();
</script>

<template>
  <img
    class="chicken"
    :class="{
      'chicken--animated': isAnimated,
    }"
    src="../../assets/chicken-white.png"
  />
</template>

<style lang="scss" scoped>
@keyframes shake {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(15deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-15deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.chicken {
  max-width: 100px;
  @apply place-self-center;

  &--animated {
    animation: shake 1s ease-in-out infinite;
  }
}
</style>
