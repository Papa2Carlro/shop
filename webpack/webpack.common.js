const Path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const routerConfig = [
    {
        name: 'index',
        template: 'index'
    },
    {
        name: 'test',
        template: 'ui'
    }
];


module.exports = {
    entry: {
        app: Path.resolve(__dirname, '../src/scripts/index.js')
    },
    output: {
        path: Path.join(__dirname, '../build'),
        filename: 'js/[name].js'
    },
/*    optimization: {
        splitChunks: {
            chunks: 'all',
            name: false
        }
    },*/
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {from: Path.resolve(__dirname, '../static'), to: 'static'}
        ]),
        ...routerConfig.reduce((routing, routeConfig) => {
            let route = new HtmlWebpackPlugin({
                filename: `${routeConfig.name}.html`,
                template: Path.resolve(__dirname, `../src/templates/${routeConfig.template}.njk`),
                minify: {
                    collapseWhitespace: false
                }
            });

            routing.push(route);

            return routing;
        }, [])
    ],
    resolve: {
        alias: {
            '~': Path.resolve(__dirname, '../src'),
            '@': Path.resolve(__dirname, '../'),
        }
    },
    module: {
        rules: [
            {
                test: /\.njk$/,
                use: [
                    {
                        loader: 'simple-nunjucks-loader',
                        options: {
                            searchPaths: [
                                './src/templates/'
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: 'javascript/auto'
            },
            {
                test: /\.svg$/,
                use: [
                    'svg-sprite-loader',
                    'svgo-loader'
                ]
            },
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }
            },
        ]
    }
};
