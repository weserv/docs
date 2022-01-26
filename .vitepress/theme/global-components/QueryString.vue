<script setup>
defineProps({
  field: String,
  value: String,
  bool: { type: Boolean, default: false },
})
</script>

<template>
  <span class="query" v-if="bool">
    &{{ field }}
  </span>
  <span class="query" v-else>
    &{{ field }}={{ value }}
  </span>
</template>

<style scoped>
  .query {
    display: inline-block;
    font-size: 14px;
    height: 18px;
    line-height: 18px;
    border-radius: 3px;
    padding: 0 6px;
    color: #fff;
    margin-right: 5px;
    vertical-align: middle;
    background-color: var(--c-brand);
  }
</style>
