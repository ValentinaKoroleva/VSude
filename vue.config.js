module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("csv")
      .test(/\.csv$/)
      .use("csv-loader")
      .loader("csv-loader")
      .options({
        dynamicTyping: true,
        header: true,
        skipEmptyLines: true,
        delimiter: "|",
      })
      .end();
    config.module
      .rule("pdf")
      .test(/\.(pdf)(\?.*)?$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "assets/pdf/[name].[hash:8].[ext]",
      });
    config.module
      .rule("docx")
      .test(/\.(docx)(\?.*)?$/)
      .use("file-loader")
      .loader("file-loader")

  },
  pwa: {
    name: 'VSude',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'no',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      icons:[
        {
          src:"./img/icons/apple-touch-icon.png",
          sizes:"192x192",
          type:"image/png"
        },
        {
          src:"./img/icons/android-chrome-192x192.png",
          sizes:"192x192",
          type:"image/png"
        },
        {
          src:"./img/icons/android-chrome-512x512.png",
          sizes:"512x512",
          type:"image/png"
        },
        {
          src:"./img/icons/android-chrome-maskable-192x192.png",
          sizes:"192x192",
          type:"image/png",
          purpose:"maskable"
        },
        {
          src:"./img/icons/android-chrome-maskable-512x512.png",
          sizes:"512x512",
          type:"image/png",
          purpose:"maskable"
        }
      ]
    }
    // // configure the workbox plugin
    // workboxPluginMode: 'InjectManifest',
    // workboxOptions: {
    //   // swSrc is required in InjectManifest mode.
    //   swSrc: 'src/noopServiceWorker.js',
    //   // ...other Workbox options...
    // }
  }
};
