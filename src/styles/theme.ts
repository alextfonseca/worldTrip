import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    whiteAlpha: {
      "200": "#DADADA",
      "100": "#F5F8FA",
      "50": "#FFFFFF",
    },
    dark: {
      "200": "#000000",
      "100": "#47585B",
      "50": "#999999",
    },
    yellow: {
      "200": "#FFBA08",
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'white.200',
        color: 'dark.100'
      }
    }
  }
})