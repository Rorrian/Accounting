import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from '@vanilla-extract/css'

const root = createGlobalTheme(':root', {
  content: {
    accent: '#f78838',
    accent2: '#1414b8',

    white: '#ffffff',
    lightGrey: '#b3b3b3',
    darkGrey: '#222222',

    link: '#f78838',

    disabled: '#b5b0b0',
    error: '#ff0700',
  },

  background: {
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
    secondary: null,
  },

  background: {
    primary: null,
    secondary: null,
    button: {
      primary: null,
      secondary: null,
      tertiary: null,
      accent: null,
      transparent: null,
    },
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
    secondary: '#ffffff',
  },

  background: {
    primary: '#ffffff',
    secondary: '#f6f5f4',

    button: {
      primary: '#f78838',
      secondary: '#f5c7a6',
      tertiary: '#f6f5f4',
      accent: '#deaebf',
      transparent: 'transparent',
    },
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
    secondary: '#222222',
  },

  background: {
    primary: '#222222',
    secondary: '#171717',

    button: {
      primary: '#e27a2f',
      secondary: '#363636',
      tertiary: '#171717',
      accent: '#692731',
      transparent: 'transparent',
    },
  },

  pageBackground: {
    auth: 'url(/images/auth/authBg1.webp)',
  },

  textShadow: '1px 1px #fff, 2px 2px #222',
  filter: 'invert(1)',
})

export const vars = { ...root, themeVariables }
