const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        './src/**/*.html',
        './src/**/*.vue'
    ],
    whitelist: ['random', 'yep', 'button'],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
    plugins: [
        require('tailwindcss')('./tailwindcss'),
        require('autoprefixer'),
        ...process.env.NODE_ENV === 'production'
            ? [purgecss]
            : []
    ]
};