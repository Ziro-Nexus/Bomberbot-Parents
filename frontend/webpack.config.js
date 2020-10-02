const path = require("path");

module.exports = {
    entry: {
        login: './src/index.js',
    },
    watch: true,
    mode: "development",
    devtool: 'source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules',
                use: [
                    {
                      loader: 'babel-loader',
                      options: {
                        presets: ['@babel/react']
                      }
                    }
                ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
                
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: ['url-loader?limit=100000'],
            }
        ]
    },
    resolve: {
        extensions: [
            '.js'
        ]
    }
}
