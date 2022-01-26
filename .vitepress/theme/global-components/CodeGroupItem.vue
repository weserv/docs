<template>
  <section class="code-group-item">
    <slot />
  </section>
</template>

<script>
export default {
  name: "CodeGroupItem"
}
</script>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: false,
    default: false,
  }
})
</script>
