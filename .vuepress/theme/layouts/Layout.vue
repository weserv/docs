<template>
  <ParentLayout>
    <Credits slot="page-bottom"/>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import Credits from '@theme/components/Credits.vue'

export default {
  components: {ParentLayout, Credits}
}
</script>
