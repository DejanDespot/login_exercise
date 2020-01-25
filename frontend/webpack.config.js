const HtmlWebPackPlugin = require("html-webpack-plugin");
let path = require('path');

module.exports = (env, argv) => {
    console.log('MODE ' + argv.mode);

    return (
        {
            entry: './src/index.js',
            output: {
                path: path.resolve(__dirname, 'build'),
                filename: 'bundle.[hash].js',
                chunkFilename: '[name][hash].bundle.js',
                publicPath: argv.mode === 'development' ? '/' : './'
            },
            optimization : {
                splitChunks : {
                    cacheGroups: {
                        commons: {
                            test: /[\\/]node_modules[\\/]/,
                            name: 'vendors',
                            chunks: 'all'
                        }
                    }
                }
            },
            module: {
                rules: [
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        use: {
                            loader: "babel-loader"
                        }
                    },
                    {
                        test: /\.html$/,
                        use: [
                            {
                                loader: "html-loader"
                            }
                        ]
                    },
                    {
                        test: /\.scss$/,
                        exclude: [/node_modules/, /src\/styles\/core/],
                        use: [{
                            loader: 'style-loader',
                        }, {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    mode: 'local',
                                    localIdentName: "[name]__[local]___[hash:base64:5]"
                                },
                                sourceMap: true,
                            }
                        }, {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            }
                        }]
                    },
                    {
                        test: /\.css$/,
                        use: ['style-loader', 'css-loader'],
                    },
                    {
                        test: /\.(png|jpg|gif|svg|mp3)$/,
                        use: [
                            {
                                loader: 'file-loader',
                                options: {}
                            }
                        ]
                    }
                ]
            },
            devServer: {
                historyApiFallback: true,
            },
            plugins: [
                new HtmlWebPackPlugin({
                    template: "./src/index.html",
                    filename: "./index.html"
                })
            ],
            devtool: argv.mode === 'development' ? "source-map" : ""
        }
    )
};
