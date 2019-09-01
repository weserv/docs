<script>
export default {
  functional: true,
  props: {
    text: String,
  },
  render(h, {props, slots}) {
    return h('span', {
      class: ['param']
    }, props.text || slots().default)
  }
}
</script>

<style lang="stylus">
  .param
    display inline-block
    font-size 14px
    height 18px
    line-height 18px
    border-radius 3px
    padding 0 6px
    color white
    margin-right 5px
    vertical-align middle
    background-color $accentColor
</style>
