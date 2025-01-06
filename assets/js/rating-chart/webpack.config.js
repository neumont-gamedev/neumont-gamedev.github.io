const path = require('path');

module.exports = {
  entry: './src/Rating-Chart.tsx',  // Match your exact filename
  output: {
    filename: 'rating-chart.js',
    path: path.resolve(__dirname),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(__dirname, './tsconfig.json')
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }
};