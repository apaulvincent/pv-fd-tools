var path = require('path');
var webpack = require('webpack');

const PROD = (process.env.NODE_ENV == 'production') ? true : false;

const PATHS = {
  build: path.join(__dirname, './dist')
};

const webpackListPlugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ];

const webpackPlugins = PROD ? webpackListPlugins : [] ;


module.exports = {
  entry: './client/index',
  output: {
    path: PATHS.build,
    filename: PROD ? 'bundle.min.js' : 'bundle.js',
    publicPath: '/'
  },
	devServer: {
		inline: true,
		contentBase: PATHS.build,
		port: 3000
	},
  module: {
    rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ["latest", "stage-0", "react"]
        }
      }
    },
    {
      test: /\.(ttf|eot|woff|woff2)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'autoprefixer-loader']
    },
    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'autoprefixer-loader', 'sass-loader']
    }
    ]
  },
   plugins: webpackPlugins
};