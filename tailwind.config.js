/* eslint-disable sort-keys-fix/sort-keys-fix */

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#F8F8F8',
          800: '#E8E8E8',
          700: '#ECECEC',
          600: '#E5E5E5',
          500: '#303941',
          400: '#727783',
          300: '#A6A6A6',
          100: '#2E2E2F',
        },
        red: {
          800: '#F84E55',
          700: '#F55065',
          600: '#D64D54',
        },
        blue: {
          700: '#3339D9',
          600: '#1D5CFF',
          500: '#2B32CB',
        },
        dark: {
          800: '#20133D',
          700: '#29123E',
          500: '#3C2D50',
        },
      },
      fontSize: {
        '2xs': '.625rem', // 10px
      },
      width: {
        'fit': 'fit-content'
      },
      fontFamily: {
        robotoBlack: 'Roboto Black',
        robotoBold: 'Roboto Bold',
        robotoMedium: 'Roboto Medium',
        robotoRegular: 'Roboto Regular',
        robotoLight: 'Roboto Light',

        avenirLTStdBook: 'AvenirLTStd Book',
        avenirLTStdRoman: 'AvenirLTStd Roman',
        avenirLTStdBlack: 'AvenirLTStd Black',

        benzGroteskHeavy: 'BenzGrotesk Heavy',

        snyderSpeedBrush: 'SnyderSpeedBrush',

        generatorBlack: 'Generator Black',
        generatorUltraBold: 'Generator UltraBold',
        generatorSemiBold: 'Generator SemiBold',
        generatorBold: 'Generator Bold',
        generatorMedium: 'Generator Medium',
        generatorRegular: 'Generator Regular',
        generatorLight: 'Generator Light',
        generatorUltraLight: 'Generator UltraLight',
        generatorThin: 'Generator Thin',
        
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
