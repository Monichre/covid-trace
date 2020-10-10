import React from 'react'
import classNames from 'classnames'
import {
  Grid,
  Typography,
  isWidthUp,
  withWidth,
  withStyles,
} from '@material-ui/core'
import PriceCard from './PriceCard'
import calculateSpacing from './calculateSpacing'
const styles = (theme: any) => ({
  containerFix: {
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    overflow: 'hidden',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  cardWrapper: {
    [theme.breakpoints.down('xs')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: 340,
    },
  },
  cardWrapperHighlighted: {
    [theme.breakpoints.down('xs')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: 360,
    },
  },
})
type PricingSectionProps = {
  width: any
  classes: any
}
const PricingSection: React.SFC<PricingSectionProps> = (props) => {
  const { width, classes } = props
  return (
    <div className='lg-p-top' style={{ backgroundColor: '#FFFFFF' }}>
      <Typography variant='h3' align='center' className='lg-mg-bottom'>
        Pricing
      </Typography>
      <div className={classNames('container-fluid', classes.containerFix)}>
        <Grid
          container
          spacing={calculateSpacing(width)}
          className={classes.gridContainer}
        >
          <Grid
            item
            className={classes.cardWrapperHighlighted}
            xs={12}
            sm={6}
            lg={4}
            data-aos='zoom-in-up'
            data-aos-delay='200'
          >
            <PriceCard
              highlighted
              title='Starter'
              pricing={
                <span>
                  $29.99
                  <Typography display='inline'> / month</Typography>
                </span>
              }
              features={['Feature 1', 'Feature 2', 'Feature 3']}
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            sm={6}
            lg={4}
            data-aos='zoom-in-up'
            data-aos-delay={isWidthUp('md', width) ? '400' : '0'}
          >
            <PriceCard
              title='Business'
              pricing={
                <span>
                  $49.99
                  <Typography display='inline'> / month</Typography>
                </span>
              }
              features={['Feature 1', 'Feature 2', 'Feature 3']}
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            sm={6}
            lg={4}
            data-aos='zoom-in-up'
            data-aos-delay={isWidthUp('md', width) ? '600' : '200'}
          >
            <PriceCard
              title='Elevated'
              pricing={
                <span>
                  $99.99
                  <Typography display='inline'> / month</Typography>
                </span>
              }
              features={['Feature 1', 'Feature 2', 'Feature 3']}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
export default withStyles(styles, { withTheme: true })(
  withWidth()(PricingSection)
)
