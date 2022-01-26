<script>
import { defineComponent, h } from 'vue'

let uuid = 0;

export default defineComponent({
  name: 'CodeGroup',

  setup(_, { slots }) {
    uuid += 1

    return () => {
      // Get CodeGroupItem children
      const items = (slots.default?.() || [])
        .filter((vnode) => vnode.type.name === 'CodeGroupItem')
        .map((vnode) => {
          if (vnode.props === null) {
            vnode.props = {}
          }
          return vnode
        })

      // Do not render anything if there is no CodeGroupItem
      if (items.length === 0) {
        return null
      }

      // Find the index of the CodeGroupItem with `active` props
      let activeIndex = items.findIndex(
        (vnode) => vnode.props.active === '' || vnode.props.active === true
      )

      // If there is no `active` props on CodeGroupItem, set the first item active
      if (activeIndex === -1) {
        activeIndex = 0
      }

      return h('div', { class: 'code-group' }, [
        items.map((vnode, i) => {
          return [
            h(
              'input',
              {
                class: 'code-group-tab',
                name: 'code-group-' + uuid,
                type: 'radio',
                id: 'tab-' + uuid + '-' + i,
                checked: i === activeIndex
              }
            ),
            h(
              'label',
              {
                class: 'code-group-label',
                for: 'tab-' + uuid + '-' + i
              },
              vnode.props.title
            ),
            vnode
          ]
        }),
      ])
    }
  }
})
</script>

<style>
.code-group {
  display: flex;
  flex-wrap: wrap;
  margin: .85rem auto;
  border-radius: 6px;
  background-color: var(--code-bg-color);
}

.code-group-tab {
  display: none;
}

.code-group-label {
  padding: 10px 20px;
  cursor: pointer;
  font-size: .85rem;
  color: var(--c-white-dark);
  font-weight: 600;
}

.code-group-tab:checked + .code-group-label {
  border-bottom: var(--c-brand) 1px solid;
}

.code-group-item {
  width: 100%;
  order: 1;
  display: none;
}

.code-group-item div {
  margin: 0;
}

.code-group-tab:checked + .code-group-label + .code-group-item {
  display: block;
}
</style>
