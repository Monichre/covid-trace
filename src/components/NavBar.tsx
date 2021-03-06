// @ts-nocheck

import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Hidden,
  IconButton,
  withStyles,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import HowToRegIcon from '@material-ui/icons/HowToReg'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import BookIcon from '@material-ui/icons/Book'
import NavigationDrawer from './NavigationDrawer'
import { BlackMoleculeLogo, LogoAlt } from './Logo'

const styles = (theme) => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuButtonText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight,
  },
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400,
  },
  noDecoration: {
    textDecoration: 'none !important',
  },
})
type NavBarProps = {
  classes?: any
  handleMobileDrawerOpen?: (...args: any[]) => any
  handleMobileDrawerClose?: (...args: any[]) => any
  mobileDrawerOpen?: boolean
  selectedTab?: string
  openRegisterDialog?: (...args: any[]) => any
  openLoginDialog?: (...args: any[]) => any
  openDemo?: (...args: any[]) => any
}
const NavBar: React.SFC<NavBarProps> = (props) => {
  const {
    classes,
    openRegisterDialog,
    openLoginDialog,
    handleMobileDrawerOpen,
    handleMobileDrawerClose,
    mobileDrawerOpen,
    selectedTab,
    openDemo,
  } = props
  const menuItems = [
    {
      name: 'Demo',
      onClick: openDemo,
      icon: <HowToRegIcon className='text-white' />,
    },
    {
      name: 'Register',
      onClick: openRegisterDialog,
      icon: <HowToRegIcon className='text-white' />,
    },
    {
      name: 'Login',
      onClick: openLoginDialog,
      icon: <LockOpenIcon className='text-white' />,
    },
  ]
  return (
    <div className={classes.root}>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div>
            <LogoAlt />
          </div>
          <div>
            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
                onClick={handleMobileDrawerOpen}
                aria-label='Open Navigation'
              >
                <MenuIcon color='primary' />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              {menuItems.map((element) => {
                if (element.link) {
                  return (
                    <Link
                      key={element.name}
                      to={element.link}
                      className={classes.noDecoration}
                      onClick={handleMobileDrawerClose}
                    >
                      <Button
                        color='secondary'
                        size='large'
                        classes={{ text: classes.menuButtonText }}
                      >
                        {element.name}
                      </Button>
                    </Link>
                  )
                }
                return (
                  <Button
                    color='secondary'
                    size='large'
                    onClick={element.onClick}
                    classes={{ text: classes.menuButtonText }}
                    key={element.name}
                  >
                    {element.name}
                  </Button>
                )
              })}
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
      <NavigationDrawer
        menuItems={menuItems}
        anchor='right'
        open={mobileDrawerOpen}
        selectedItem={selectedTab}
        onClose={handleMobileDrawerClose}
      />
    </div>
  )
}
export default withStyles(styles, { withTheme: true })(memo(NavBar))
