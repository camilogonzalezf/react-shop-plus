const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: `${__dirname}/src/index.js`,
    output:{
        path: `${__dirname}/react-shop-plus`,
        filename: 'bundle.js',
        publicPath: '/react-shop-plus/'
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@pages' : path.resolve(__dirname,'src/pages/'),
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname,'src/containers/'),
            '@styles' : path.resolve (__dirname,'src/styles/'),
            '@routes' : path.resolve(__dirname,'src/routes/'),
            '@icons': path.resolve(__dirname,'src/assets/icons/'),
            '@logos': path.resolve(__dirname,'src/assets/logos/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@context': path.resolve(__dirname, 'src/context/')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            filename: 'index.html'
        }),
      new HtmlWebpackPlugin({  // Also generate a test.html
        filename: '404.html',
        template: 'public/404.html'
      }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        },)
    ],
    devServer: {
        historyApiFallback: {
        rewrites: [{ from: /\/react-shop-plus\/[^?]/, to: '/404.html' }],
      },
    },

}