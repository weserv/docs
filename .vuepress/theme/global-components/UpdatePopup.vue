<template>
  <SWUpdatePopup>
    <div
      slot-scope="{ enabled, reload, message, buttonText }"
      v-if="enabled"
      class="weserv-update-popup"
    >
      {{ message }}<br>
      <button @click="reload">{{ buttonText }}</button>
    </div>
  </SWUpdatePopup>
</template>


<script>
import SWUpdatePopup from '@vuepress/plugin-pwa/lib/SWUpdatePopup.vue'

export default {
  components: {SWUpdatePopup}
}
</script>

<style lang="stylus">
  .weserv-update-popup
    position fixed
    right 1em
    bottom 1em
    padding 1em
    border 1px solid $accentColor
    border-radius 3px
    background #fff
    box-shadow 0 4px 16px rgba(0, 0, 0, 0.5)
    text-align center
    z-index 2

  .weserv-update-popup > button
    margin-top 0.5em
    padding 0.25em 2em
</style>
