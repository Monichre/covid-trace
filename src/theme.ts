// @ts-nocheck
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'

// colors
const primary: any = '#b3294e'
const secondary: any = '#4829B2'
const black: any = '#343a40'
const darkBlack: any = 'rgb(36, 40, 44)'
const background: any = '#f5f5f5'
const warningLight: any = 'rgba(253, 200, 69, .3)'
const warningMain: any = 'rgba(253, 200, 69, .5)'
const warningDark: any = 'rgba(253, 200, 69, .7)'

// border
const borderWidth: any = 2
const borderColor: any = 'rgba(0, 0, 0, 0.13)'

// breakpoints
const xl: any = 1920
const lg: any = 1280
const md: any = 960
const sm: any = 600
const xs: any = 0

// spacing
const spacing: any = 8

const theme: any = createMuiTheme({
  palette: {
    primary: { main: primary },
    secondary: { main: secondary },
    common: {
      black,
      darkBlack,
    },
    warning: {
      light: warningLight,
      main: warningMain,
      dark: warningDark,
    },
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
    background: {
      default: background,
    },
    spacing,
  },
  breakpoints: {
    // Define custom breakpoint values.
    // These will apply to Material-UI components that use responsive
    // breakpoints, such as `Grid` and `Hidden`. You can also use the
    // theme breakpoint functions `up`, `down`, and `between` to create
    // media queries for these breakpoints
    values: {
      xl,
      lg,
      md,
      sm,
      xs,
    },
  },
  border: {
    borderColor: borderColor,
    borderWidth: borderWidth,
  },
  overrides: {
    MuiExpansionPanel: {
      root: {
        position: 'static',
      },
    },
    MuiTableCell: {
      root: {
        paddingLeft: spacing * 2,
        paddingRight: spacing * 2,
        borderBottom: `${borderWidth}px solid ${borderColor}`,
        [`@media (max-width:  ${sm}px)`]: {
          paddingLeft: spacing,
          paddingRight: spacing,
        },
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: borderColor,
        height: borderWidth,
      },
    },
    MuiPrivateNotchedOutline: {
      root: {
        borderWidth: borderWidth,
      },
    },
    MuiListItem: {
      divider: {
        borderBottom: `${borderWidth}px solid ${borderColor}`,
      },
    },
    MuiDialog: {
      paper: {
        width: '100%',
        maxWidth: 430,
        marginLeft: spacing,
        marginRight: spacing,
      },
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: darkBlack,
      },
    },
    MuiExpansionPanelDetails: {
      root: {
        [`@media (max-width:  ${sm}px)`]: {
          paddingLeft: spacing,
          paddingRight: spacing,
        },
      },
    },
  },
  typography: {
    useNextVariants: true,
  },
})

export default responsiveFontSizes(theme)
