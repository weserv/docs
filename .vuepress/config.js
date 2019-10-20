module.exports = {
  dest: 'dist',
  title: 'Images.weserv.nl',
  description: 'Image cache & resize service',
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#a72376' }],
    ['meta', { name: 'msapplication-TileColor', content: '#a72376' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
  ],
  theme: '@weserv/docs-theme',
  themeConfig: {
    algolia: {
      indexName: 'images_weserv',
      apiKey: '206416be8208020aafb1730fd2c7d813'
    },
    logo: '/logo.svg',
    repo: 'weserv/images',
    repoLabel: 'Feedback? GitHub!',
    docsRepo: 'weserv/docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    sidebarDepth: 3,
    smoothScroll: true,
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Documentation',
        link: '/docs/',
      },
      {
        text: 'FAQ',
        link: '/faq/',
      },
    ],
    sidebar: {
      '/docs/': [
        '',
        'quick-reference',
        'size',
        'fit',
        'crop',
        'mask',
        'orientation',
        'adjustment',
        'format'
      ],
    }
  }
}
