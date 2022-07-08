import 'styled-components'

import theme from './src/components/theme'

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
    // colors: {
    //   lightRed: string
    //   black: string
    //   sunYellow: string
    //   veryLightPink: string
    //   greyishBrown: string
    //   black0: string
    //   black60: string
    //   veryLightPinkTwo: string
    //   brownGrey: string
    //   cornFlower: string
    //   yellowIshorange: string
    //   aqua: string
    //   brownishGrey: string
    //   veryLightPinkThree: string
    //   veryLightPinkFour: string
    // }

    // typography: {
    //   montserrat: string
    //   roboto: string
    //   buttonSize: string
    
    //   montserratStyle: {
    //     'font-family': '"Montserrat", sans-serif',
    //     'font-weight': 'normal',
    //     'font-style': 'normal',
    //     'font-stretch': 'normal',
    //     'line-height': 'normal',
    //     'letter-spacing': 'normal',
    //   },
    
    //   robotoStyle: {
    //     'font-family': '"Montserrat", sans-serif',
    //     'font-weight': 'normal',
    //     'font-style': 'normal',
    //     'font-stretch': 'normal',
    //     'line-height': 'normal',
    //     'letter-spacing': 'normal',
    //   },
    // }
}