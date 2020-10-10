import React, { Fragment } from 'react'
import classNames from 'classnames'
import {
  Grid,
  Typography,
  Card,
  Button,
  Hidden,
  Box,
  withStyles,
  withWidth,
  isWidthUp,
} from '@material-ui/core'

const styles: any = (theme: any) => ({
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up('sm')]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  extraLargeButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up('xs')]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  card: {
    boxShadow: theme.shadows[4],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('xs')]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down('lg')]: {
      width: 'auto',
    },
  },
  wrapper: {
    position: 'relative',
    backgroundColor: theme.palette.secondary.main,
    paddingBottom: theme.spacing(2),
  },
  image: {
    maxWidth: '100%',
    verticalAlign: 'middle',
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
  },
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(9),
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(6),
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
    },
  },
  containerFix: {
    [theme.breakpoints.up('md')]: {
      maxWidth: 'none !important',
    },
  },
  waveBorder: {
    paddingTop: theme.spacing(4),
  },
})
type HeadSectionProps = {
  classes?: any
  width?: string
  theme?: any
}
const HeadSection: React.SFC<HeadSectionProps> = (props) => {
  const { classes, theme, width }: any = props
  return (
    <Fragment>
      <div className={classNames('lg-p-top', classes.wrapper)}>
        <div className={classNames('container-fluid', classes.container)}>
          <Box display='flex' justifyContent='center' className='row'>
            <Card
              className={classes.card}
              data-aos-delay='200'
              data-aos='zoom-in'
            >
              <div className={classNames(classes.containerFix, 'container')}>
                <Box justifyContent='space-between' className='row'>
                  <Grid item xs={12} md={5}>
                    <Box
                      display='flex'
                      flexDirection='column'
                      justifyContent='space-between'
                      height='100%'
                    >
                      <Box mb={4}>
                        <Typography
                          variant={isWidthUp('lg', width) ? 'h3' : 'h4'}
                        >
                          Workplace Safety for the modern age
                        </Typography>
                      </Box>
                      <div>
                        <Box mb={2}>
                          <Typography
                            variant={isWidthUp('lg', width) ? 'h6' : 'body1'}
                            color='textSecondary'
                          >
                            Contact free | Contact tracing
                          </Typography>
                        </Box>
                      </div>
                    </Box>
                  </Grid>
                  <Hidden smDown>
                    <Grid item md={6}>
                      Covid Trace
                    </Grid>
                  </Hidden>
                </Box>
              </div>
            </Card>
          </Box>
        </div>
      </div>
    </Fragment>
  )
}
export default withWidth()(withStyles(styles, { withTheme: true })(HeadSection))
