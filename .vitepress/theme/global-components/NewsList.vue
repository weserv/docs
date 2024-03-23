<script setup lang="ts">
import { useData, withBase } from 'vitepress';

const { frontmatter: fm } = useData();
</script>

<template>
  <div class="news">
    <ul>
      <li class="item" v-for="(page, index) in fm.news" :key="index">
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
  font-weight: 300;
}
.item-date {
  padding-top: 24px;
  float: right;
  font-size: small;
}
</style>
