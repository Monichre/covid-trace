import React from 'react'
import { useState, useEffect } from 'react'
import { AmplifyAuthenticator, withAuthenticator } from '@aws-amplify/ui-react'
import { API, Auth, graphqlOperation } from 'aws-amplify'
import { addToGroup, getUserAuthGroups } from '../../services/admin.service'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'
import { createSuperAdmin } from '../../graphql/mutations'
import { useHistory } from 'react-router-dom'

export interface AdminLoginProps {}

const AdminLogin: React.SFC<AdminLoginProps> = () => {
  const [authState, setAuthState] = React.useState<AuthState>(null)
  const [user, setUser] = React.useState<object | undefined>(null)
  const history = useHistory()

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData: any) => {
      console.log('nextAuthState: ', nextAuthState)
      console.log('authData: ', authData)
      setAuthState(nextAuthState)
      if (authData) {
        const { username, attributes } = authData
        setUser({ username, ...attributes })
      }
    })
  }, [])

  const checkAdmin = async (signedInUser) => {
    const { email, username } = signedInUser
    console.log('email: ', email)
    console.log('signedInUser: ', signedInUser)
    const Authorization = `${(await Auth.currentSession())
      .getAccessToken()
      .getJwtToken()}`

    console.log('Authorization: ', Authorization)
    const { Groups } = await getUserAuthGroups({
      username,
      Authorization,
    })
    console.log('Groups: ', Groups)

    const userGroups = Groups.map(({ GroupName }) => GroupName)
    console.log('userGroups: ', userGroups)

    if (userGroups && userGroups.length) {
      const isAdmin = userGroups.includes('SuperAdmin')
      console.log('isAdmin: ', isAdmin)
      history.push('/admin/dashboard', {
        state: {
          admin: signedInUser,
        },
      })
    }
  }

  const saveAdmin = async (admin) => {
    const { email, username, ...rest } = admin
    console.log('username: ', username)
    console.log('email: ', email)

    const Authorization = `${(await Auth.currentSession())
      .getAccessToken()
      .getJwtToken()}`

    await addToGroup({ groupname: 'SuperAdmin', username, Authorization })

    const variables = { input: { username, email } }

    const saved: any = await API.graphql({ query: createSuperAdmin, variables })
    console.log('saved: ', saved)
    if (saved) {
      history.push('/admin/dashboard', {
        state: {
          admin: saved,
        },
      })
    }
  }

  useEffect(() => {
    if (authState === AuthState.SignedIn && user) {
      checkAdmin(user)
    }

    if (authState === AuthState.SignUp && user) {
      saveAdmin(user)
    }
  }, [authState, checkAdmin, saveAdmin, user])

  return <AmplifyAuthenticator />
}

export default withAuthenticator(AdminLogin)
