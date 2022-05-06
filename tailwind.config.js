module.exports = {
    content : [
        "./dist/**/*.{html,js,py,php}"
    ],
    theme : {
        extend : {},
    },
    corePlugins : {
        aspectRatio : false,
    },
    plugins : [
        require( '@tailwindcss/line-clamp' ),
        require( '@tailwindcss/aspect-ratio' ),
        require( '@tailwindcss/forms' ),
        require( '@tailwindcss/typography' ),
    ],
}
