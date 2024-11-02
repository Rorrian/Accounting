import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from '@vanilla-extract/css'

const root = createGlobalTheme(':root', {
  content: {
    darkGrey: '#222222',
    white: '#ffffff',
    lightGrey: '#b3b3b3',

    link: '#f78838',

    disabled: '#b5b0b0',
    error: '#ff0700',
  },

  background: {
    secondary: '#f6f5f4',

    disabled: '#efedeb',
    transparent: 'rgba(255, 255, 255, 0.14)',

    overlay: {
      light: 'rgba(0, 0, 0, 0.4)',
      dark: 'rgba(37, 40, 48, 0.8)',
    },
  },

  borderRadius: {
    xs: '8px',
    sm: '12px',
    lg: '24px',

    round: '50%',
  },

  spaces: {
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },

  font: {
    family: {
      base: 'Inter',
      accent: 'PP Object Sans',
    },
    size: {
      base: '16px',
    },
  },

  transition: '0.3s ease-in-out',
})

const themeVariables = createThemeContract({
  content: {
    primary: null,
    tertiary: null,
  },

  background: {
    primary: null,
  },
  pageBackground: {
    auth: null,
  },
  textShadow: null,
  filter: null,
})

export const lightTheme = createTheme(themeVariables, {
  content: {
    primary: '#222222',
    tertiary: '#ffffff',
  },

  background: {
    primary: '#ffffff',
  },
  pageBackground: {
    auth: 'url(/images/auth/authBg2.webp)',
  },
  textShadow: '1px 1px #fff, 2px 2px #777',
  filter: '',
})

export const darkTheme = createTheme(themeVariables, {
  content: {
    primary: '#ffffff',
    tertiary: '#222222',
  },

  background: {
    primary: '#222222',
  },
  pageBackground: {
    auth: 'url(/images/auth/authBg1.webp)',
  },
  textShadow: '1px 1px #fff, 2px 2px #222',
  filter: 'invert(1)',
})

export const vars = { ...root, themeVariables }
