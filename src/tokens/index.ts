/**
 * VERDANT — Centralized Design System Tokens
 * Contemporary Luxury Fine Dining Design System
 * 
 * Strict adherence to the approved brand palette:
 * - Primary Sage Green: #879780
 * - Warm Ivory Background: #F8F5ED
 * - Soft Cream Surface: #EAE5D9
 * - Muted Olive Accent: #626F52
 * - Deep Forest Text: #26372D
 */

export const colors = {
  sage: {
    DEFAULT: '#879780',
    50: '#F4F6F3',
    100: '#E6EAE4',
    200: '#CCD5C9',
    300: '#B2BFAE',
    400: '#9CAA96',
    500: '#879780',
    600: '#6E7E67',
    700: '#55624F',
    800: '#3D4638',
    900: '#262B22',
  },
  ivory: {
    DEFAULT: '#F8F5ED',
    light: '#FCFAF5',
    dark: '#F0EAE0',
  },
  cream: {
    DEFAULT: '#EAE5D9',
    light: '#F3F0E8',
    dark: '#DDD6C5',
  },
  olive: {
    DEFAULT: '#626F52',
    light: '#768564',
    dark: '#4F5A41',
  },
  forest: {
    DEFAULT: '#26372D',
    light: '#354C3E',
    dark: '#18231C',
  },
} as const

export const typography = {
  fonts: {
    heading: '"Cormorant Garamond", Georgia, serif',
    body: '"DM Sans", system-ui, -apple-system, sans-serif',
  },
  tracking: {
    tight: '-0.02em',
    normal: '0',
    wide: '0.05em',
    editorial: '0.15em',
    badge: '0.25em',
  },
} as const

export const spacing = {
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    wide: '1440px',
  },
} as const

export const transitions = {
  fast: '150ms ease-out',
  default: '250ms ease-out',
  slow: '400ms ease-out',
} as const
