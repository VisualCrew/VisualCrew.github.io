var webpack = require('webpack');


module.exports = {
    entry: './frontend/main.js',
    output: {
        filename:'./build/bundle.js'
    },
    resolve:{

    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader: 'babel',
                exclude:/node_modules|picker\.data\.js|picker\.js/
            },
            {
                test:/\.css$/,
                loader:'style!css'
            },
            {test: /\.(png|jpg|gif)$/, loader: 'url' },
            {test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'url'}
        ]
    }
}
