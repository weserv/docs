import { withBase } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import CustomLayout from './CustomLayout.vue'
import CodeGroup from './global-components/CodeGroup.vue'
import CodeGroupItem from './global-components/CodeGroupItem.vue'
import NewsList from './global-components/NewsList.vue'
import QueryString from './global-components/QueryString.vue'

import './styles/vars.css'
import './styles/layout.css'
import './node_modules/line-awesome/dist/line-awesome/css/line-awesome.min.css'

export default {
  Layout: CustomLayout,
  NotFound: DefaultTheme.NotFound,
  enhanceApp({ app }) {
    // expose $withBase
    Object.defineProperty(app.config.globalProperties, '$withBase', {
      get() {
        return withBase
      }
    })
    app.component('CodeGroup', CodeGroup)
    app.component('CodeGroupItem', CodeGroupItem)
    app.component('NewsList', NewsList)
    app.component('NotFound', DefaultTheme.NotFound)
    app.component('QueryString', QueryString)
  }
}
