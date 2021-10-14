module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        extend: {
            colors:{
                'body': '#121822',
                'module': '#202837',
                'box': '#283143',
                'aux': '#7CD5B6',
                'auxdark': '#58957f',
                'danger': '#FF5D61',
            },
            spacing:{
                '72': '18rem',
                '80': '20rem',
                '93': '23rem',
                '400': '100rem'
            }
        },
    },
    variants: {},
    plugins: [
		require('@tailwindcss/custom-forms')
	],
}
