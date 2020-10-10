import React, { useEffect, useState } from 'react'
import { MuiThemeProvider, CssBaseline, Modal } from '@material-ui/core'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/home/Home'
import GlobalStyles from './GlobalStyles'
import theme from './theme'
import QR from 'qrcode.react'

import './App.css'
import NavBar from './components/NavBar'

import Amplify, { Auth } from 'aws-amplify'
import config from './aws-exports'
import { AmplifySignIn, AmplifySignUp } from '@aws-amplify/ui-react'
import { getUserAuthGroups } from './services/admin.service'
import AdminLogin from './pages/admin/AdminLogin'
import { GuestRegistration } from './components/GuestRegistration'

Amplify.configure({
  ...config,
  // ssr: true,
})

function App() {
  const [modalOpen, setModalOpen] = useState(null)

  const toggleModal = (type) => setModalOpen(type)

  const closeModal = () => setModalOpen(false)

  const [user, setUser] = useState(null)

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

  useEffect(() => {
    if (!user) {
      checkUser()
    }
  }, [user])
  console.log('window.location.href: ', window.location.href)
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <Switch>
          <Route path='/' exact>
            <NavBar
              openLoginDialog={() => toggleModal('login')}
              openRegisterDialog={() => toggleModal('register')}
              openDemo={() => toggleModal('demo')}
            />
            <Home />
            <Modal
              open={modalOpen}
              onClose={closeModal}
              aria-labelledby='simple-modal-title'
              aria-describedby='simple-modal-description'
            >
              <div
                style={{
                  margin: 'auto',
                  display: 'flex',
                  width: 'max-content',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                }}
              >
                {modalOpen === 'login' && <AmplifySignIn />}
                {modalOpen === 'register' && <AmplifySignUp />}
                {modalOpen === 'demo' && (
                  <QR
                    value={`${window.location.href}/demo/guest-registration`}
                  />
                )}
              </div>
            </Modal>
          </Route>
          <Route path='/admin' exact>
            <AdminLogin />
          </Route>

          <Route path='/demo/guest-registration' exact>
            <GuestRegistration />
          </Route>
        </Switch>
      </MuiThemeProvider>
    </BrowserRouter>
  )
}

export default App
