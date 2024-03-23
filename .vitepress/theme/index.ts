import DefaultTheme, { VPImage } from 'vitepress/theme';

import NewsList from './global-components/NewsList.vue';

import './styles/custom.css';
import './styles/layout.css';
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('NewsList', NewsList);
    // https://github.com/vuejs/vitepress/issues/2813#issuecomment-1683915241
    app.component('Image', VPImage);
  }
};
