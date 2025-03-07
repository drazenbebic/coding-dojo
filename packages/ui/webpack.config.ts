import type webpack from 'webpack';
import path from 'path';

const config: webpack.Configuration = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: {
      type: 'module',
    }
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg/,
        type: 'asset/resource',
      },
    ],
  },
  experiments: {
    outputModule: true
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

module.exports = config;
