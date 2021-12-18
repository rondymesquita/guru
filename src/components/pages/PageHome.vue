<script setup lang="ts">
import { ref, onMounted } from 'vue';
import UIButton from '../ui/UIButton.vue';

const estimatives = [1, 2, 3, 5, 8, 13, 21, 34];

const estimative = ref('0');
const isGuessing = ref(false);

function generateRandomEstimative(): string {
  const random = Math.floor(Math.random() * estimatives.length);
  const value = estimatives[random].toString();
  if (value === estimative.value) {
    return generateRandomEstimative();
  }
  return value;
}

function animateEstimative() {
  return new Promise((resolve) => {
    const timer = setInterval(() => {
      estimative.value = generateRandomEstimative();
    }, 100);

    setTimeout(() => {
      clearInterval(timer);
      resolve({});
    }, 2000);
  });
}

async function onGuessButtonClick() {
  isGuessing.value = true;
  await animateEstimative();

  const randomEstimative = generateRandomEstimative();
  estimative.value = randomEstimative;

  isGuessing.value = false;
}
</script>

<template>
  <div class="page-home">
    <h3>Deixe me ajudá-lo com suas estimativas!</h3>
    <div
      class="estimative font-fancy"
      :class="{
        'estimative--disabled': isGuessing,
      }"
    >
      <span>{{ estimative }}</span>
    </div>
    <UIButton
      label="Adivinhar"
      disabled-label="Adivinhando..."
      :is-disabled="isGuessing"
      @click="onGuessButtonClick"
    ></UIButton>
  </div>
</template>

<style lang="scss">
.page-home {
  @apply text-center;

  .estimative {
    @apply text-9xl pt-8;

    &--disabled {
      @apply text-zinc-500;
    }
  }
}
</style>
