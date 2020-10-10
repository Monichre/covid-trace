import React from 'react'
import { useState, useEffect } from 'react'
import { AmplifyAuthenticator } from '@aws-amplify/ui-react'
import { API, Auth, graphqlOperation } from 'aws-amplify'
import { getUserAuthGroups } from '../../services/admin.service'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'

export interface VenueLoginProps {}

const VenueLogin: React.SFC<VenueLoginProps> = () => {
  const [authState, setAuthState] = React.useState<AuthState>(null)
  const [user, setUser] = React.useState<object | undefined>(null)

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      console.log('nextAuthState: ', nextAuthState)
      console.log('authData: ', authData)
      setAuthState(nextAuthState)
      setUser(authData)
    })
  }, [])

  const checkUser = async () => {
    const signedInUser: any = await Auth.currentAuthenticatedUser().then(
      ({ attributes, username }) => ({ attributes, username })
    )
    const { email, username } = signedInUser
    console.log('email: ', email)
    console.log('signedInUser: ', signedInUser)
    const Authorization = `${(await Auth.currentSession())
      .getAccessToken()
      .getJwtToken()}`

    const { Groups } = await getUserAuthGroups({
      username,
      Authorization,
    })
    console.log('Groups: ', Groups)
    console.log('email: ', email)
    console.log('signedInUser: ', signedInUser)
    setUser(signedInUser)
  }

  useEffect(() => {}, [authState, user])

  return <AmplifyAuthenticator />
}

export default VenueLogin

// // @ts-nocheck
// import React, { PureComponent, Fragment } from 'react'
// import classNames from 'classnames'
// import { withRouter } from 'react-router-dom'
// import {
//   TextField,
//   Button,
//   Checkbox,
//   Typography,
//   FormControlLabel,
//   withStyles,
// } from '@material-ui/core'
// import FormDialog from '../../components/FormDialog'
// import HighlightedInformation from '../../components/HighlightedInformation'
// import VisibilityPasswordTextField from '../../components/VisibilityPasswordTextField'
// import ButtonCircularProgress from '../../components/ButtonCircularProgress'

// const styles: any = (theme: any) => ({
//   forgotPassword: {
//     marginTop: theme.spacing(2),
//     color: theme.palette.primary.main,
//     cursor: 'pointer',
//     '&:enabled:hover': {
//       color: theme.palette.primary.dark,
//     },
//     '&:enabled:focus': {
//       color: theme.palette.primary.dark,
//     },
//   },
//   disabledText: {
//     cursor: 'auto',
//     color: theme.palette.text.disabled,
//   },
//   formControlLabel: {
//     marginRight: 0,
//   },
// })
// type LoginDialogProps = {
//   classes: any
//   onClose: (...args: any[]) => any
//   setStatus: (...args: any[]) => any
//   openChangePasswordDialog: (...args: any[]) => any
//   history: any
//   status?: string
// }
// type LoginDialogState = {
//   loading: boolean
//   passwordIsVisible: boolean
// }

// class VenueLogin extends PureComponent<LoginDialogProps, LoginDialogState> {
//   state = { loading: false, passwordIsVisible: false }
//   onVisibilityChange = (isVisible: any) => {
//     this.setState({ passwordIsVisible: isVisible })
//   }
//   login = () => {
//     const { setStatus, history } = this.props
//     this.setState({
//       loading: true,
//     })
//     setStatus(null)
//     if (this.loginEmail.value !== 'test@web.com') {
//       setTimeout(() => {
//         setStatus('invalidEmail')
//         this.setState({
//           loading: false,
//         })
//       }, 1500)
//     } else if (this.loginPassword.value !== 'test') {
//       setTimeout(() => {
//         setStatus('invalidPassword')
//         this.setState({
//           loading: false,
//         })
//       }, 1500)
//     } else {
//       setTimeout(() => {
//         history.push('/dashboard')
//       }, 150)
//     }
//   }
//   loginEmail: any
//   loginPassword: any
//   loginRememberMe: HTMLInputElement | null
//   render() {
//     const {
//       classes,
//       onClose,
//       openChangePasswordDialog,
//       status,
//       setStatus,
//     } = this.props
//     const { loading, passwordIsVisible } = this.state
//     return (
//       <Fragment>
//         <FormDialog
//           open
//           onClose={onClose}
//           loading={loading}
//           onFormSubmit={(e: { preventDefault: () => void }) => {
//             e.preventDefault()
//             this.login()
//           }}
//           hideBackdrop
//           headline='Login'
//           content={
//             <Fragment>
//               <TextField
//                 variant='outlined'
//                 margin='normal'
//                 error={status === 'invalidEmail'}
//                 required
//                 fullWidth
//                 label='Email Address'
//                 inputRef={(node) => {
//                   this.loginEmail = node
//                 }}
//                 autoFocus
//                 autoComplete='off'
//                 type='email'
//                 onChange={() => {
//                   if (status === 'invalidEmail') {
//                     setStatus(null)
//                   }
//                 }}
//                 helperText={
//                   status === 'invalidEmail' &&
//                   "This email address isn't associated with an account."
//                 }
//                 FormHelperTextProps={{ error: true }}
//               />
//               <VisibilityPasswordTextField
//                 variant='outlined'
//                 margin='normal'
//                 required
//                 fullWidth
//                 error={status === 'invalidPassword'}
//                 label='Password'
//                 inputRef={(node: any) => {
//                   this.loginPassword = node
//                 }}
//                 autoComplete='off'
//                 onChange={() => {
//                   if (status === 'invalidPassword') {
//                     setStatus(null)
//                   }
//                 }}
//                 helperText={
//                   status === 'invalidPassword' ? (
//                     <span>
//                       Incorrect password. Try again, or click on{' '}
//                       <b>&quot;Forgot Password?&quot;</b> to reset it.
//                     </span>
//                   ) : (
//                     ''
//                   )
//                 }
//                 FormHelperTextProps={{ error: true }}
//                 onVisibilityChange={this.onVisibilityChange}
//                 isVisible={passwordIsVisible}
//               />
//               <FormControlLabel
//                 className={classes.formControlLabel}
//                 control={
//                   <Checkbox
//                     inputRef={(node) => {
//                       this.loginRememberMe = node
//                     }}
//                     color='primary'
//                   />
//                 }
//                 label={<Typography variant='body1'>Remember me</Typography>}
//               />
//               {status === 'verificationEmailSend' ? (
//                 <HighlightedInformation>
//                   We have send instructions on how to reset your password to
//                   your email address
//                 </HighlightedInformation>
//               ) : (
//                 <HighlightedInformation>
//                   Email is: <b>test@web.com</b>
//                   <br />
//                   Password is: <b>test</b>
//                 </HighlightedInformation>
//               )}
//             </Fragment>
//           }
//           actions={
//             <Fragment>
//               <Button
//                 type='submit'
//                 fullWidth
//                 variant='contained'
//                 color='secondary'
//                 disabled={loading}
//                 size='large'
//               >
//                 Login
//                 {loading && <ButtonCircularProgress />}
//               </Button>
//               <Typography
//                 align='center'
//                 className={classNames(
//                   classes.forgotPassword,
//                   loading ? classes.disabledText : null
//                 )}
//                 color='primary'
//                 onClick={loading ? null : openChangePasswordDialog}
//                 tabIndex={0}
//                 role='button'
//                 onKeyDown={(event: { keyCode: number }) => {
//                   // For screenreaders listen to space and enter events
//                   if (
//                     (!loading && event.keyCode === 13) ||
//                     event.keyCode === 32
//                   ) {
//                     openChangePasswordDialog()
//                   }
//                 }}
//               >
//                 Forgot Password?
//               </Typography>
//             </Fragment>
//           }
//         />
//       </Fragment>
//     )
//   }
// }
// export default withRouter(withStyles(styles)(VenueLogin))
