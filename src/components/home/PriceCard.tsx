import React from 'react'
import { Typography, Box, withStyles } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check'
const styles: any = (theme: any) => ({
  card: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    marginTop: theme.spacing(2),
    border: `3px solid ${theme.palette.primary.dark}`,
    borderRadius: theme.shape.borderRadius * 2,
  },
  cardHightlighted: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    border: `3px solid ${theme.palette.primary.dark}`,
    borderRadius: theme.shape.borderRadius * 2,
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(2),
    },
  },
  title: {
    color: theme.palette.primary.main,
  },
})
type PriceCardProps = {
  classes: any
  theme: any
  title: string
  pricing: React.ReactNode | string
  highlighted?: boolean
  features?: any
}
const PriceCard: React.SFC<PriceCardProps> = (props) => {
  const { classes, theme, title, pricing, features, highlighted } = props
  return (
    <div className={highlighted ? classes.cardHightlighted : classes.card}>
      <Box mb={2}>
        <Typography
          variant={highlighted ? 'h5' : 'h6'}
          className={highlighted ? 'text-white' : classes.title}
        >
          {title}
        </Typography>
      </Box>
      <Box mb={2}>
        <Typography
          variant={highlighted ? 'h3' : 'h4'}
          className={highlighted ? 'text-white' : ''}
        >
          {pricing}
        </Typography>
      </Box>
      {features.map(
        (
          feature: React.ReactNode,
          index: string | number | null | undefined
        ) => (
          <Box display='flex' alignItems='center' mb={1} key={index}>
            <CheckIcon
              style={{
                color: highlighted
                  ? theme.palette.common.white
                  : theme.palette.primary.dark,
              }}
            />
            <Box ml={1}>
              <Typography
                className={highlighted ? 'text-white' : ''}
                variant={highlighted ? 'h6' : 'body1'}
              >
                {feature}
              </Typography>
            </Box>
          </Box>
        )
      )}
    </div>
  )
}
export default withStyles(styles, { withTheme: true })(PriceCard)
