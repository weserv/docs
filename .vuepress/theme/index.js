module.exports = {
  extend: '@vuepress/theme-default',
  plugins: [
    ['@vuepress/back-to-top'],
    ['@vuepress/blog', {
      directories: [
        {
          id: 'news',
          dirname: '_news',
          path: '/news/',
          itemPermalink: '/news/:year/:month/:day/:slug',
          layout: 'News',
          pagination: {
            layout: 'News',
            lengthPerPage: 5,
          },
        },
      ]
    }],
    ['@vuepress/pwa', {
      serviceWorker: true,
      popupComponent: 'UpdatePopup',
      updatePopup: {
        message: "New content is available.",
        buttonText: "Refresh"
      }
    }]
  ],
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        // discard whitespace between template tags
        options.compilerOptions.preserveWhitespace = false
        return options
      })
  }
}
