<script setup lang="ts">
import { data as news } from '../news.data.js';
</script>

<template>
  <div class="news">
    <ul>
      <li class="item" v-for="(page, index) in news" :key="index">
        <span class="item-date">{{ page.date.string }}</span>
        <h2 class="item-title">
          <a :href="page.url" :title="page.title">
            {{ page.title }}
          </a>
        </h2>
        <p v-if="page.excerpt" class="item-excerpt">
          {{ page.excerpt }}
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
