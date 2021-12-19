<script setup lang="ts">
import Header from './components/ui/Header.vue';
</script>

<template>
  <main class="main">
    <Header />
    <section class="page">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </section>
  </main>
</template>

<style lang="scss">
#app {
  /* Normal */
  @apply bg-white;

  /* Dark */
  @apply text-white bg-gradient-to-b from-zinc-800 to-neutral-900;

  font-family: 'Lora', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .font-fancy {
    font-family: 'Lora', Avenir, Helvetica, Arial, sans-serif;
  }

  .main {
    @apply text-center;
    @apply container mx-auto min-h-screen py-2 px-4;

    .page {
      // @apply py-8;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Lora', Avenir, Helvetica, Arial, sans-serif;
    line-height: inherit;
  }

  h1 {
    @apply text-4xl;
  }
  h2 {
    @apply text-3xl;
  }
  h3 {
    @apply text-2xl;
  }
  h3 {
    @apply text-xl;
  }
}
</style>
