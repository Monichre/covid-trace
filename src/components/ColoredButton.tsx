import React, { memo } from 'react'
import { Button, createMuiTheme, MuiThemeProvider } from '@material-ui/core'
type ColoredButtonProps = {
  color: string
  theme: any
  children: any
}
const ColoredButton: React.SFC<ColoredButtonProps> = (props) => {
  const { color, children, theme } = props
  const buttonTheme = createMuiTheme({
    ...theme,
    palette: {
      primary: {
        main: color,
      },
    },
  })

  const buttonProps = (({ color, theme, children, ...o }) => o)(props)
  return (
    <MuiThemeProvider theme={buttonTheme}>
      <Button {...buttonProps} color='primary'>
        {children}
      </Button>
    </MuiThemeProvider>
  )
}
export default memo(ColoredButton)
