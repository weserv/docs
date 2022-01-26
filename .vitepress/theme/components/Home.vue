<script setup>
import HomeHero from './HomeHero.vue'
import HomeFeatures from './HomeFeatures.vue'
import HomeFooter from './HomeFooter.vue'
</script>

<template>
  <main class="home" aria-labelledby="main-title">
    <HomeHero />
    <HomeFeatures />
    <div class="home-content">
      <Content />
    </div>
    <HomeFooter />
  </main>
</template>

<style scoped>
.home {
  padding-top: var(--header-height);
}
.home-content {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
</style>

