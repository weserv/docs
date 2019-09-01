<template>
  <div class="news">
    <h2 id="news"><a href="/news" aria-hidden="true" class="header-anchor">#</a> News</h2>
    <ul>
      <li class="item" v-for="(page, index) in $pagination.pages" :key="index">
        <span class="item-date">{{page.frontmatter.date | formatDate }}</span>
        <h3 class="item-title">
          <router-link :title="page.title" :to="page.path">
            {{ page.title }}
          </router-link>
        </h3>
        <p class="item-summary" v-if="page.frontmatter.summary">
          {{ page.frontmatter.summary }}
        </p>
      </li>
    </ul>
    <div class="page-nav" v-if="$pagination.hasPrev || $pagination.hasNext">
      <p class="inner">
        <span
          v-if="$pagination.hasPrev"
          class="prev"
        >
          ←
          <router-link
            v-if="$pagination.hasPrev"
            class="prev"
            :to="$pagination.prevLink"
          >
            Prev
          </router-link>
        </span>

        <span
          v-if="$pagination.hasNext"
          class="next"
        >
          <router-link
            v-if="$pagination.hasNext"
            :to="$pagination.nextLink"
          >
            Next
          </router-link>
          →
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    $pagination() {
      return this.$getPagination('news')
    },
  },
  filters: {
    formatDate: function (value) {
      if (!value) return ''
      return new Date(value).toDateString()
    }
  }
}
</script>

<style lang="stylus">
  .item
    list-style none

  .item-title
    margin-top 2rem
    margin-bottom 1rem
    font-weight 300

  .item-date
    float right
    font-size small

  .news
    .page-nav
      max-width initial
      padding 0

</style>
