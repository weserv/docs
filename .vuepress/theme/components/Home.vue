<template>
  <main class="home" aria-labelledby="main-title">
    <header class="hero">
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        :alt="data.heroAlt || 'hero'"
      >

      <h1 v-if="data.heroText" id="main-title">{{ data.heroText }}</h1>

      <h2 v-if="data.tagline" class="description">{{ data.tagline }}</h2>
      <h2 v-if="data.description" class="description">{{ data.description }}</h2>

      <p
        class="action"
        v-if="data.actionText && data.actionLink"
      >
        <NavLink
          class="action-button"
          :item="actionLink"
        />
      </p>
    </header>

    <Content class="theme-default-content custom"/>

    <NewsList/>

    <div
      class="footer">
      <Credits/>
    </div>
  </main>
</template>

<script>
import ParentHome from '@parent-theme/components/Home.vue'
import NewsList from '@theme/components/NewsList.vue'
import Credits from '@theme/components/Credits.vue'

export default {
  extends: ParentHome,
  components: {NewsList, Credits}
}
</script>

<style lang="stylus">
  .home
    .hero
      h1
        color #000

      img
        max-height 210px

      .description
        margin 0
        color $textColor
        max-width none

    .features
      &.small
        border-top none
        padding 0
        margin-top 0

    .feature
      text-align center

      &.small
        max-width 25%

      &:hover
        .feature-icon, .feature-icon-small, h2, h3
          color $accentColor

      h2
        text-transform uppercase
        font-weight 600
        color $textColor

      h3
        font-weight 500
        border-bottom none
        padding-bottom 0
        color $textColor

      p
        color $textColor

    .feature-icon
      height 100px
      display flex
      align-items center
      justify-content center
      position relative
      margin 1rem 0
      color $textColor

      i
        font-size 130px
        position absolute
        left 50%
        top 50%
        transform translateX(-50%) translateY(-50%)

      &:hover, &:focus, &.active
        text-decoration none

      h2
        background #fff
        line-height 1
        z-index 1
        text-transform uppercase
        font-weight 600
        margin 0
        display block
        font-size 1rem

    .feature-icon-small
      color $textColor

      i
        font-size 70px

      h3
        text-transform none

    h2
      border-bottom none

  @media (max-width: $MQMobile)
    .home
      .features
        &.small
          flex-direction row;

      .feature
        &.small
          max-width 100%

      .cloudflare-logo
        width 50vw

  @media (max-width: $MQMobileNarrow)
    .home
      .cloudflare-logo
        width 100%
        padding 1.2rem
</style>
