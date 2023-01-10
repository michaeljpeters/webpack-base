const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function relpath(fp) {
    return path.resolve(__dirname, ...fp.split('/'));
}

module.exports = {
    // note: production disables the in-memory cache
    mode: 'development', // 'production',
    entry: {
        index: relpath('src/index.js'),
    },
    // enable source mapping (disable for much smaller files)
    devtool: 'inline-source-map',
    // auto-generate index.html file with webpack bundles
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
        runtimeChunk: 'single',
        // enable caching with vendors in a seperate chunk
        moduleIds: 'deterministic',
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
        // these are especially apparent with source maps enabled
        hints: false,
    },
    module: {
        rules: [
            // sass support with `import './styles.scss'`
            {
                include: relpath('src'),
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            // css support with `import './styles.css'`
            {
                include: relpath('src'),
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            // image support with `import Image from './image.png'`
            {
                include: relpath('src'),
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};
