<script>
import Home from './components/Home.vue'
import DefaultTheme from 'vitepress/theme'

export default {
  name: 'CustomLayout',

  components: {
    Home,
    ParentLayout: DefaultTheme.Layout,
  }
}
</script>

<template>
  <ParentLayout>
    <template #home>
      <Home />
    </template>
  </ParentLayout>
</template>
