const path = require('path');

module.exports = {
    mode: 'development', // Set this to 'development' or 'production' based on your needs
    entry: './assets/js/custom-slider-block.js',
    output: {
        filename: 'custom-slider-block.build.js',
        path: path.resolve(__dirname, 'dist'),
        // module: 'es6',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};
