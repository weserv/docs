<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()

const hasFeatures = computed(() => {
  return frontmatter.value.features && frontmatter.value.features.length > 0
})

const features = computed(() => {
  return frontmatter.value.features ? frontmatter.value.features : []
})
</script>

<template>
  <div v-if="hasFeatures" class="home-features">
    <div class="wrapper">
      <div class="container">
        <div class="features">
          <section
            v-for="(feature, index) in features"
            :key="index"
            class="feature"
          >
            <i v-if="feature.icon" class="icon las la-fw" :class="feature.icon"/>
            <h2 class="title" v-if="feature.title">{{ feature.title }}</h2>
            <p class="details" v-if="feature.details">{{ feature.details }}</p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.home-features {
  margin: 0 auto;
  padding: 2.5rem 0 2.75rem;
  max-width: 960px;
}

.home-hero + .home-features {
  padding-top: 0;
}

@media (min-width: 420px) {
  .home-features {
    padding: 3.25rem 0 3.5rem;
  }

  .home-hero + .home-features {
    padding-top: 0;
  }
}

@media (min-width: 720px) {
  .home-features {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }
}

.wrapper {
  padding: 0 1.5rem;
}

.home-hero + .home-features .wrapper {
  border-top: 1px solid var(--c-divider);
  padding-top: 2.5rem;
}

@media (min-width: 420px) {
  .home-hero + .home-features .wrapper {
    padding-top: 3.25rem;
  }
}

@media (min-width: 720px) {
  .wrapper {
    padding-right: 0;
    padding-left: 0;
  }
}

.container {
  margin: 0 auto;
  max-width: 392px;
}

@media (min-width: 720px) {
  .container {
    max-width: 960px;
  }
}

.features {
  display: flex;
  flex-wrap: wrap;
  margin: -20px -24px;
}

.feature {
  flex-shrink: 0;
  padding: 20px 15px;
  width: 100%;
  text-align: center;
}

.feature.small {
  margin: 40px auto;
}

.feature a {
  display: block;
  color: var(--c-text);
}

.feature:hover,
.feature:hover .icon,
.feature:hover a {
  color: var(--c-brand);
  text-decoration: none;
}

@media (min-width: 420px) {
  .feature.small {
    width: calc(100% / 2);
  }
}

@media (min-width: 720px) {
  .feature {
    width: calc(100% / 3);
  }
  .feature.small {
    width: calc(100% / 4);
  }
}

.icon {
  position: relative;
  margin: 0 auto;
  font-size: 8rem;
  color: var(--c-text);
}

.icon.small {
  font-size: 5rem;
}

.title {
  margin: 0;
  border-bottom: 0;
  line-height: 1.4;
  font-size: 1.25rem;
  font-weight: 500;
}

@media (min-width: 420px) {
  .title {
    font-size: 1.4rem;
  }
}

@media (max-width: 420px) {
  .cloudflare-logo {
    width: 100%;
    margin: 1.2rem;
  }
}

.details {
  margin: 0;
  line-height: 1.6;
  font-size: 1rem;
  color: var(--c-text-light);
}

.title + .details {
  padding-top: 0.25rem;
}
</style>
