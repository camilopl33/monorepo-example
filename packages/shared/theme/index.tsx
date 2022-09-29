import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'
import { ThemeOptions } from '@mui/material/styles'

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#FFAA00',
      light: '#FFE66F',
      dark: '#B88500',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#009081',
      dark: '#006255',
      light: '#50C1B0'
    },
    text: {
      primary: '#535464',
      secondary: '#9898A2',
      disabled: '#CBCCD1'
    },
    success: {
      main: '#2E7D32',
      light: '#4CAF50',
      dark: '#1B5E20'
    },
    error: {
      main: '#D32F2F',
      dark: '#C62828',
      light: '#EF5350'
    },
    warning: {
      main: '#ED6C02',
      light: '#FF9800',
      dark: '#E65100'
    },
    info: {
      main: '#0288D1',
      light: '#03A9F4',
      dark: '#01579B'
    },
    white: {
      main: '#ffffff'
    },
    divider: '#E6E5E5',
    grayC: {
      main: '#a2a5b5',
      dark: '#F6F6F6',
      light: '#FFFFFF',
      contrastText: '#242A25'
    },
    whiteInput: {
      main: 'white',
      dark: 'white',
      light: 'white',
      contrastText: '#404352'
    },
    whiteButton: {
      main: 'white',
      dark: 'white',
      light: 'white',
      contrastText: '#535464'
    }
  }
}

lightThemeOptions.components = {
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: '150px',
        '&.MuiInputBase-multiline .MuiOutlinedInput-notchedOutline': {
          borderRadius: '24px'
        }
      }
    }
  },
  MuiButton: {
    styleOverrides: {
      contained: {
        borderRadius: '10em',
        boxShadow: 'none'
      },
      outlined: {
        borderRadius: '10em'
      }
    }
  },
  MuiSelect: {
    styleOverrides: {
      select: {
        '& .MuiListItemIcon-root': {
          display: 'none'
        }
      }
    }
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        borderRadius: '2rem',
        '&.Mui-focusVisible': {
          background: 'rgba(0, 0, 0, 0.04)'
        },
        '&.Mui-selected': {
          backgroundColor: '#ffffff',
          //@ts-ignore
          color: lightThemeOptions.palette?.primary.main
        },
        '&.Mui-selected .MuiListItemIcon-root': {
          //@ts-ignore
          color: lightThemeOptions.palette?.primary.main
        },
        '&.Mui-selected:hover': {
          backgroundColor: '#ffffff'
        },
        '&.Mui-selected.Mui-focusVisible': {
          backgroundColor: '#ffffff'
        }
      }
    }
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        padding: '.5rem 0',
        '&.Mui-selected': {
          //@ts-ignore
          backgroundColor: lightThemeOptions.palette?.white.main,
          '& .MuiListItemButton-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)'
          }
        }
      }
    }
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        fontSize: '1.25rem'
      }
    }
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        borderRadius: '2rem',
        padding: '.375rem .5rem',
        '&.Mui-selected': {
          backgroundColor: 'rgba(0, 0, 0, 0.04)'
        },
        '&.Mui-selected:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.04)'
        },
        '& .MuiListItemIcon-root': {
          minWidth: 0,
          marginRight: '.75rem'
        },
        '& .MuiListItemText-root': {
          flex: 2,
          margin: 0,
          '& span': {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }
        }
      }
    }
  },
  MuiPaper: {
    styleOverrides: {
      elevation1: {
        boxShadow:
          '0px 2px 1px -1px rgba(0, 0, 0, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05), 0px 1px 3px rgba(0, 0, 0, 0.01)'
      },
      elevation2: {
        boxShadow:
          '0px 3px 1px -2px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.05), 0px 1px 5px rgba(0, 0, 0, 0.02)'
      },
      elevation3: {
        boxShadow:
          '0px 3px 3px -2px rgba(0, 0, 0, 0.1), 0px 3px 4px rgba(0, 0, 0, 0.04), 0px 1px 8px rgba(0, 0, 0, 0.02)'
      },
      elevation4: {
        boxShadow:
          '0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 5px rgba(0, 0, 0, 0.02), 0px 1px 10px rgba(0, 0, 0, 0.02)'
      },
      elevation5: {
        boxShadow:
          '0px 3px 5px -1px rgba(0, 0, 0, 0.1), 0px 5px 8px rgba(0, 0, 0, 0.04), 0px 1px 14px rgba(0, 0, 0, 0.02)'
      },
      elevation6: {
        boxShadow:
          '0px 3px 5px -1px rgba(0, 0, 0, 0.1), 0px 6px 10px rgba(0, 0, 0, 0.04), 0px 1px 18px rgba(0, 0, 0, 0.02)'
      },
      elevation7: {
        boxShadow:
          '0px 4px 5px -2px rgba(0, 0, 0, 0.1), 0px 7px 10px 1px rgba(0, 0, 0, 0.04), 0px 2px 16px 1px rgba(0, 0, 0, 0.02)'
      },
      elevation8: {
        boxShadow:
          '0px 5px 5px -3px rgba(0, 0, 0, 0.06), 0px 8px 10px 1px rgba(0, 0, 0, 0.02), 0px 3px 14px 2px rgba(0, 0, 0, 0.02)'
      },
      elevation9: {
        boxShadow:
          '0px 5px 6px -3px rgba(0, 0, 0, 0.1), 0px 9px 12px 1px rgba(0, 0, 0, 0.04), 0px 3px 16px 2px rgba(0, 0, 0, 0.02)'
      },
      elevation10: {
        boxShadow:
          '0px 6px 6px -3px rgba(0, 0, 0, 0.1), 0px 10px 14px 1px rgba(0, 0, 0, 0.04), 0px 4px 18px 3px rgba(0, 0, 0, 0.02)'
      },
      elevation11: {
        boxShadow:
          '0px 6px 7px -4px rgba(0, 0, 0, 0.1), 0px 11px 15px 1px rgba(0, 0, 0, 0.04), 0px 4px 20px 3px rgba(0, 0, 0, 0.02)'
      },
      elevation12: {
        boxShadow:
          '0px 7px 8px -4px rgba(0, 0, 0, 0.06), 0px 12px 17px 2px rgba(0, 0, 0, 0.02), 0px 5px 22px 4px rgba(0, 0, 0, 0.02)'
      },
      elevation13: {
        boxShadow:
          '0px 7px 8px -4px rgba(0, 0, 0, 0.1), 0px 13px 19px 2px rgba(0, 0, 0, 0.04), 0px 5px 24px 4px rgba(0, 0, 0, 0.02)'
      },
      elevation14: {
        boxShadow:
          '0px 7px 9px -4px rgba(0, 0, 0, 0.1), 0px 14px 21px 2px rgba(0, 0, 0, 0.04), 0px 5px 26px 4px rgba(0, 0, 0, 0.02)'
      },
      elevation15: {
        boxShadow:
          '0px 8px 9px -5px rgba(0, 0, 0, 0.1), 0px 15px 22px 2px rgba(0, 0, 0, 0.04), 0px 6px 28px 5px rgba(0, 0, 0, 0.02)'
      },
      elevation16: {
        boxShadow:
          '0px 8px 10px -5px rgba(0, 0, 0, 0.07), 0px 16px 24px 2px rgba(0, 0, 0, 0.02), 0px 6px 30px 5px rgba(0, 0, 0, 0.02)'
      },
      elevation17: {
        boxShadow:
          '0px 8px 11px -5px rgba(0, 0, 0, 0.1), 0px 17px 26px 2px rgba(0, 0, 0, 0.04), 0px 6px 32px 5px rgba(0, 0, 0, 0.02)'
      },
      elevation18: {
        boxShadow:
          '0px 9px 11px -5px rgba(0, 0, 0, 0.1), 0px 18px 28px 2px rgba(0, 0, 0, 0.04), 0px 7px 34px 6px rgba(0, 0, 0, 0.02)'
      },
      elevation19: {
        boxShadow:
          '0px 9px 12px -6px rgba(0, 0, 0, 0.1), 0px 19px 29px 2px rgba(0, 0, 0, 0.04), 0px 7px 36px 6px rgba(0, 0, 0, 0.02)'
      },
      elevation20: {
        boxShadow:
          '0px 10px 13px -6px rgba(0, 0, 0, 0.06), 0px 20px 31px 3px rgba(0, 0, 0, 0.02), 0px 8px 38px 7px rgba(0, 0, 0, 0.02)'
      },
      elevation21: {
        boxShadow:
          '0px 10px 13px -6px rgba(0, 0, 0, 0.1), 0px 21px 33px 3px rgba(0, 0, 0, 0.04), 0px 8px 40px 7px rgba(0, 0, 0, 0.02)'
      },
      elevation22: {
        boxShadow:
          '0px 10px 14px -6px rgba(0, 0, 0, 0.1), 0px 22px 35px 3px rgba(0, 0, 0, 0.04), 0px 8px 42px 7px rgba(0, 0, 0, 0.02)'
      },
      elevation23: {
        boxShadow:
          '0px 11px 14px -7px rgba(0, 0, 0, 0.1), 0px 23px 36px 3px rgba(0, 0, 0, 0.04), 0px 9px 44px 8px rgba(0, 0, 0, 0.02)'
      },
      elevation24: {
        boxShadow:
          '0px 11px 15px -7px rgba(0, 0, 0, 0.06), 0px 24px 38px 3px rgba(0, 0, 0, 0.02), 0px 9px 46px 8px rgba(0, 0, 0, 0.02)'
      }
    }
  }
}

lightThemeOptions.typography = {
  fontFamily: [
    'Poppins',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
  ].join(','),
  button: {
    textTransform: 'none',
    mb: 0
  }
}

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    white: Palette['primary']
    grayC: Palette['primary']
    whiteInput: Palette['primary']
    whiteButton: Palette['primary']
  }
  interface PaletteOptions {
    white: PaletteOptions['primary']
    grayC: Palette['primary']
    whiteInput: Palette['primary']
    whiteButton: Palette['primary']
  }
  interface PaletteColor {
    white?: string
    grayC?: string
    whiteInput?: string
    whiteButton?: string
  }
  interface SimplePaletteColorOptions {
    white?: string
    grayC?: string
    whiteInput?: string
    whiteButton?: string
  }
}

declare module '@mui/material' {
  interface AppBarPropsColorOverrides {
    white: true
  }

  interface TextFieldPropsColorOverrides {
    grayC?: true
  }
  interface SelectPropsColorOverrides {
    whiteInput: true
  }

  interface ButtonPropsColorOverrides {
    grayC: true
    whiteButton: true
  }
}

// Create a theme instance.
const theme = createTheme(lightThemeOptions)
export default theme
