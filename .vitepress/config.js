module.exports = {
  lang: 'en-US',
  title: 'Images.weserv.nl',
  description: 'Image cache &amp; resize service',
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#a72376' }],
    ['meta', { name: 'msapplication-TileColor', content: '#a72376' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    repo: 'weserv/images',
    repoLabel: 'GitHub',
    docsRepo: 'weserv/docs',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    algolia: {
      appId: 'FVJ36DNUJC',
      apiKey: '7563ec929d69f24be83776fd79b57a1b',
      indexName: 'images_weserv'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/docs/' },
      { text: 'News', link: '/news/' },
      { text: 'FAQ', link: '/faq/' }
    ],
    sidebar: {
      '/docs/': [
        {
          text: 'Documentation',
          children: [
            { text: 'Introduction', link: '/docs/' },
            { text: 'Quick reference', link: '/docs/quick-reference' },
            { text: 'Size', link: '/docs/size' },
            { text: 'Fit', link: '/docs/fit' },
            { text: 'Crop', link: '/docs/crop' },
            { text: 'Mask', link: '/docs/mask' },
            { text: 'Orientation', link: '/docs/orientation' },
            { text: 'Adjustment', link: '/docs/adjustment' },
            { text: 'Format', link: '/docs/format' },
          ]
        }
      ],
      '/news/': [
        {
          text: 'News',
          children: [
            { text: 'Introducing API version 5', link: '/news/2019/09/01/introducing-api-5' },
            { text: 'Introducing API version 4', link: '/news/2018/07/29/introducing-api-4' },
          ]
        }
      ],
      '/faq/': [{ text: 'FAQ', link: '/faq/' }]
    }
  },
  outDir: 'dist'
}
