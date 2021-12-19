<script setup lang="ts">
import { ref, onMounted } from 'vue';
import UIButton from '../ui/UIButton.vue';

const estimatives = [1, 2, 3, 5, 8, 13, 21];
const phrases: any = {
  1: [
    'Bastante simples, pra quem vem pedir minha ajuda.',
    'Você está de brincadeira comigo, só pode.',
  ],
  2: ['Eu nem criaria um card pra essa', 'Eu priorizaria essa pra ontem.'],
  3: ['Essa é muito fácil. Já deveria ter feito.'],
  5: ['Se juntar 2 devs, vocês conseguem fazer logo depois da Planning.'],
  8: ['Esse, dá pra fazer no intervalo do almoço.'],
  13: ['Treze é meu número da sorte (Ou do azar)', 'Fonte: Confia!'],
  21: [
    'O cliente vai adorar essa estimativa',
    'O PO vai amar essa estimativa.',
  ],
};
const estimative = ref('0');
const estimativePhrase = ref('');
const isGuessing = ref(false);

function generateRandomEstimative(): number {
  const random = Math.floor(Math.random() * estimatives.length);
  const value = estimatives[random];
  if (value.toString() === estimative.value) {
    return generateRandomEstimative();
  }
  return value;
}

function generatePhraseFromEstimative(estimative: number): string {
  const estimativePhrases = phrases[estimative];
  const random = Math.floor(Math.random() * estimativePhrases.length);
  return estimativePhrases[random];
}

function animateEstimative() {
  return new Promise((resolve) => {
    const timer = setInterval(() => {
      estimative.value = generateRandomEstimative().toString();
    }, 100);

    setTimeout(() => {
      clearInterval(timer);
      resolve({});
    }, 2000);
  });
}

async function onGuessButtonClick() {
  isGuessing.value = true;
  estimativePhrase.value = '';
  await animateEstimative();

  const randomEstimative = generateRandomEstimative();

  estimative.value = randomEstimative.toString();
  estimativePhrase.value = `"${generatePhraseFromEstimative(
    randomEstimative
  )}"`;
  isGuessing.value = false;
}
</script>

<template>
  <div class="page-home">
    <h3>Deixe-me ajudá-lo com suas estimativas!</h3>
    <div
      class="estimative font-fancy"
      :class="{
        'estimative--disabled': isGuessing,
      }"
    >
      <span>{{ estimative }}</span>
    </div>
    <p class="estimative-phrase">
      {{ estimativePhrase }}
    </p>
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
  @apply py-4 mt-2 rounded-lg;
  // @apply bg-zinc-800;
  @apply bg-gradient-to-b from-zinc-800  to-zinc-900;
  @apply border-2 border-zinc-800;
  // @apply shadow-red-500 shadow-md;
  box-shadow: inset 1px 1px 1px #a1a1aa, inset -1px -1px 1px #a1a1aa,
    0px -1px 4px #080808;
  @apply z-10;

  .estimative {
    @apply text-9xl pt-2;

    &--disabled {
      @apply text-zinc-500;
    }
  }
  .estimative-phrase {
    @apply py-2 text-xl italic;
    min-height: 50px;
  }
}
</style>
