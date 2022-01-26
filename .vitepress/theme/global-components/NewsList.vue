<script setup>
import { useData, withBase } from 'vitepress'
const { frontmatter } = useData()
</script>

<template>
  <div class="news">
    <ul>
      <li class="item" v-for="(page, index) in frontmatter.news" :key="index">
        <span class="item-date">{{ new Date(page.date).toDateString() }}</span>
        <h2 class="item-title">
          <a :href="withBase(page.link)" :title="page.title">
            {{ page.title }}
          </a>
        </h2>
        <p class="item-summary" v-if="page.summary">
          {{ page.summary }}
        </p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.item {
  list-style: none;
}
.item-title {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-weight: 300;
}
.item-date {
  float: right;
  font-size: small;
}
</style>
