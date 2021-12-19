<script setup lang="ts">
import Header from './components/ui/Header.vue';
</script>

<template>
  <main class="main">
    <Header />
    <section class="page">
      <router-view></router-view>
    </section>
  </main>
</template>

<style lang="scss">
#app {
  @apply container mx-auto min-h-screen py-4 px-10;

  /* Normal */
  @apply bg-white;

  /* Dark */
  @apply text-white dark:bg-zinc-800;

  background: linear-gradient(to bottom, #302e2e 0%, #000000 100%);

  font-family: 'Lora', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .font-fancy {
    font-family: 'Lora', Avenir, Helvetica, Arial, sans-serif;
  }

  .main {
    @apply text-center;

    .page {
      @apply py-8;
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
    @apply text-5xl;
  }
  h2 {
    @apply text-4xl;
  }
  h3 {
    @apply text-3xl;
  }
  h3 {
    @apply text-2xl;
  }
}
</style>
