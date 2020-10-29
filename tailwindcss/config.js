module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
       
        scale:{
            '25':'.25'
        },
        extend: {
            colors:{
                // colores degradado fondo
                'bgl':'#2D303B',
                'bgd':'#1B1F2A',

                'menu':{
                    default:'#141820',
                    50:'rgb(20,24,32,.5)', 
                },
                'button':'#2A80CC',
                'input':{
                    default:'#424750',
                    50:'rgb(66,71,80,.5)',    
                }
            },
            height:{
                'line':'1px'
            }
        },
        customForms: theme => ({
            default: {
              input: {  
                borderRadius: theme('borderRadius.lg'),
                backgroundColor: theme('colors.input.50'),
                fontSize: theme('fontSize.sm'),
                color: theme('colors.button'),
                margin: theme('margin.2'),
                height: theme('height.10'),
                '&::placeholder': {
                    color: theme('colors.input'),
                },
              },
              select: {
                borderRadius: theme('borderRadius.lg'),
                boxShadow: theme('boxShadow.default'),
              },
              checkbox: {
                width: theme('spacing.5'),
                height: theme('spacing.5'),
                borderRadius: theme('borderRadius.full'),
                backgroundColor: theme('colors.transparent'),
                icon:'',
           
              },
            },
          })
    },
    variants: {},
    plugins: [
		require('@tailwindcss/custom-forms')
	],
}
