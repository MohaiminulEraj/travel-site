const path = require('path');

postCSSPlugins = [
    require('postcss-import'),
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
    mode: 'development',
    watch: true,
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