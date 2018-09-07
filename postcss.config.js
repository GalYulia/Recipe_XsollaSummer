module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-preset-env')({
            browsers: 'last 2 versions',
            stage: 0,
        })
    ]
}