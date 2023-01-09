const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function relpath(fp) {
    return path.resolve(__dirname, ...fp.split('/'));
}

module.exports = {
    mode: 'production',
    entry: {
        index: relpath('src/index.js'),
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Example Webapp',
            template: relpath('src/index.html'),
        }),
    ],
    output: {
        clean: true,
        filename: '[name].[contenthash].bundle.js',
        path: relpath('dist'),
    },
    devServer: {
        static: relpath('dist'),
    },
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    performance: {
        // hides the performance warnings for now
        // TODO: proper code splitting
        hints: false,
    },
    module: {
        rules: [
            // sass support with `import './styles.scss'`
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            // css support with `import './styles.css'`
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            // image support with `import Image from './image.png'`
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};
