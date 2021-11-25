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
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'no',
    appleMobileWebAppStatusBarStyle: 'black',
  }

  // publicPath: '/'
};
