import React, { Fragment } from 'react'
import { Typography, withStyles } from '@material-ui/core'
const styles: any = (theme: {
  shape: { borderRadius: any }
  spacing: (arg0: number) => number
}) => ({
  iconWrapper: {
    borderRadius: theme.shape.borderRadius,
    textAlign: 'center',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
    padding: theme.spacing(1) * 1.5,
  },
})
function shadeColor(hex: string, percent: number) {
  const f = parseInt(hex.slice(1), 16)
  const t = percent < 0 ? 0 : 255
  const p = percent < 0 ? percent * -1 : percent
  const R = f >> 16
  const G = (f >> 8) & 0x00ff
  const B = f & 0x0000ff
  return `#${(
    0x1000000 +
    (Math.round((t - R) * p) + R) * 0x10000 +
    (Math.round((t - G) * p) + G) * 0x100 +
    (Math.round((t - B) * p) + B)
  )
    .toString(16)
    .slice(1)}`
}
type FeatureCardProps = {
  classes: any
  Icon: JSX.Element
  color: string
  headline: string
  text: string
}
const FeatureCard: React.SFC<FeatureCardProps> = (props) => {
  const { classes, Icon, color, headline, text } = props
  return (
    <Fragment>
      <div
        // We will set color and fill here, due to some prios complications
        className={classes.iconWrapper}
        style={{
          color: color,
          backgroundColor: shadeColor(color, 0.5),
          fill: color,
        }}
      >
        {Icon}
      </div>
      <Typography variant='h5' paragraph>
        {headline}
      </Typography>
      <Typography variant='body1' color='textSecondary'>
        {text}
      </Typography>
    </Fragment>
  )
}
export default withStyles(styles, { withTheme: true })(FeatureCard)
