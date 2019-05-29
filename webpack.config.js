const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'landing-madres.js'
    },
    module: {
        rules: [{
            test: /\.(scss|css)$/,
            use: [
                MiniCssExtractPlugin.loader, // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        },{
            test: /\.(eot|woff2|woff|ttf)$/, 
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 115000         
                    }
                }
            ]
        },{
            test: /\.(jpg|png|svg)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }
            ]
        },
        {
            test: /\.(js)$/,
            exclude: /node_modules/ ,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.(vue)$/,
            loader: 'vue-loader'
        }
    ]
    },
    resolve:{
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: [
            '*', '.js', '.vue', '.json'
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'landing-madres.css',
            chunkFilename: 'id.css'
        })
    ]
};
