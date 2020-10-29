module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
       
        scale:{
            '25':'.25',
            '10':'.10'
        },
        extend: {
            colors:{
                'orange':{
                    default:'#EC6633',
                    60: 'rgb(236,102,51,.6)'
            },
                'turquoise':{
                    default:'#5DDBD2',
                    50:'rgb(93,219,210,.5)'
                },
                'purple':{
                    default:'#B65DDB',
                    60:'rgb(182,93,219,.6)'
                },
                'green':{
                    default:'#AADC1E',
                    50: 'rgb(170,220,30,.5)'
                },
                'danger':'#F26564',
                
                // colores degradado fondo
                'bgl':'#2D303B',
                'bgd':'#1B1F2A',
                ////

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
                'line':'1px',
                '1/12':'8.333333',
                '2/3':'66.66666%',
                '1/2':'50%'
            },
            width:{
                '1/9':'11,1111%',
                'line':'1px'
            }
        },
        customForms: theme => ({
            default: {
              input: {  
                borderRadius: theme('borderRadius.lg'),
                backgroundColor: theme('colors.input.50'),
                fontSize: theme('fontSize.sm'),
                color: theme('colors.white'),
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
          }),
        //   fontFamily:{
        //       'sans':["SegoeUI"]
        //   }
    },
    variants: {
        visibility:['hover']
    },
    plugins: [
		require('@tailwindcss/custom-forms')
	],
}
