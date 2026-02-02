const version = 5;

export default {
  lang: 'en-US',
  title: 'wsrv.nl',
  description: 'Image cache &amp; resize service',
  cleanUrls: true,
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#a72376' }],
    ['meta', { name: 'msapplication-TileColor', content: '#a72376' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }]
  ],
  themeConfig: {
    logo: {
      light: '/logo.svg',
      dark: '/logo-dark.svg',
      alt: 'Logo'
    },
    nav: [
      { text: 'Documentation', link: '/docs/', activeMatch: '/docs/' },
      { text: 'News', link: '/news/', activeMatch: '/news/' },
      { text: 'FAQ', link: '/faq/', activeMatch: '/faq/' },
      {
        text: `v${version}`,
        items: [
          {
            text: 'Changelog',
            link: `https://github.com/weserv/images/blob/${version}.x/CHANGELOG.md`
          },
          {
            text: 'Privacy Policy',
            link: `https://github.com/weserv/images/blob/${version}.x/Privacy-Policy.md`
          }
        ]
      }
    ],
    sidebar: {
      '/docs/': {
        base: '/docs/',
        items: [
          {
            text: 'Documentation',
            items: [
              { text: 'Introduction', link: '/' },
              { text: 'Quick reference', link: 'quick-reference' },
              { text: 'Size', link: 'size' },
              { text: 'Fit', link: 'fit' },
              { text: 'Crop', link: 'crop' },
              { text: 'Mask', link: 'mask' },
              { text: 'Orientation', link: 'orientation' },
              { text: 'Adjustment', link: 'adjustment' },
              { text: 'Format', link: 'format' }
            ]
          }
        ]
      },
      '/news/': {
        base: '/news/',
        items: [
          {
            text: 'News',
            items: [
              { text: 'Introducing API version 5', link: '2019/09/01/introducing-api-5' },
              { text: 'Introducing API version 4', link: '2018/07/29/introducing-api-4' }
            ]
          }
        ]
      }
    },
    editLink: {
      pattern: 'https://github.com/weserv/docs/edit/master/:path',
      text: 'Suggest changes to this page'
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/weserv/images' }],
    footer: {
      message: `Released under the <a href='https://github.com/weserv/images/blob/${version}.x/LICENSE' target='_blank'>BSD 3-Clause License</a>.`,
      copyright:
        'Copyright &copy; 2007-present <a href="https://github.com/weserv/images/graphs/contributors" target="_blank">wsrv.nl contributors</a>.'
    },
    search: {
      provider: 'algolia',
      options: {
        appId: 'FVJ36DNUJC',
        apiKey: '7563ec929d69f24be83776fd79b57a1b',
        indexName: 'images_weserv'
      }
    }
  },
  markdown: {
    gfmAlerts: false
  },
  vue: {
    template: {
      transformAssetUrls: {
        includeAbsolute: false
      }
    }
  },
  outDir: 'dist'
};
