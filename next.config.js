const withSass = require('@zeit/next-sass');

module.exports = withSass({
   cssModules: true,
   // cssLoaderOptions: {
   //     importLoaders: 1,
   //     localIdentName: "[local]___[hash:base64:5]",
   // },
   webpack: function(config) {
      config.module.rules.push({
         test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
         use: {
            loader: 'url-loader',
            options: {
               limit: 100000,
               name: '[name].[ext]',
            },
         },
      });
      return config;
   },
   sassLoaderOptions: {
      includePaths: ['absolute/path/a', 'absolute/path/b'],
   },
});
