const path = require('path')
var nodeExternals = require('webpack-node-externals');

const commonConfig = {
  context: path.resolve(__dirname, 'src'),
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ]
  },
  devtool: 'source-map'
}

const serverConfig = {
  ...commonConfig,
  entry: './server.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'express.server.js'
  },
  externals: [nodeExternals()]
};

const clientConfig = {
  ...commonConfig,
  entry: './client.js',
  output: {
    path: path.resolve(__dirname, 'dist', 'public'),
    filename: 'bundle.js'
  }
};

module.exports = [serverConfig, clientConfig];