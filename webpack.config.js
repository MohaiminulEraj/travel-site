const path = require('path');

postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]

module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app') 
    },
    devServer: {
        before: function (app, server) {
            server._watch('./app/**/*.html')
        },
        contentBase: path.join(__dirname, 'app'),
        hot: true, //(hotmodule replacement/hot) is To inject new css and js into the browsers memory without needing a relode/refresh
        port: 3000,
        host: '0.0.0.0'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,                       // RegExp for to support css file thorw webpack
                                                      // This object declearation is only for the files ends with .css 
                use: ['style-loader','css-loader', {loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]   // css-loader let's webpack understand or bundle css file 
                                                    // style-loader applies or uses those css in the browser itself
            }
        ]
    }
}