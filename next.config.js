const withSass = require('@zeit/next-sass');
const prod = process.env.NODE_ENV === 'production';

module.exports = withSass({
   distDir: 'build',
   cssModules: true,
   cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: prod ? '[hash:base64:5]' : '[local]',
   },
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
