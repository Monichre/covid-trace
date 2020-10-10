import { API } from 'aws-amplify'

export const addToGroup = async ({ username, groupname, Authorization }) => {
  let apiName = 'AdminQueries'
  let path = '/addUserToGroup'
  let myInit = {
    body: {
      username,
      groupname,
    },
    headers: {
      'Content-Type': 'application/json',
      Authorization,
    },
  }
  return await API.post(apiName, path, myInit)
}

export const getUserAuth = async ({ username, Authorization }) => {
  console.log('username: ', username)
  let apiName = 'AdminQueries'
  let path = '/getUser'
  let myInit = {
    queryStringParameters: {
      username: username,
    },
    headers: {
      'Content-Type': 'application/json',
      Authorization,
    },
  }
  return await API.get(apiName, path, myInit)
}

export const getUserAuthGroups = async ({ username, Authorization }) => {
  console.log('username: ', username)
  let apiName = 'AdminQueries'
  let path = '/listGroupsForUser'

  let myInit = {
    queryStringParameters: {
      username: username,
    },
    headers: {
      'Content-Type': 'application/json',
      Authorization,
    },
  }
  return await API.get(apiName, path, myInit)
}

export const listUsersByType = async ({ groupname, Authorization }) => {
  let apiName = 'AdminQueries'
  let path = '/listUsersInGroup'
  let myInit = {
    queryStringParameters: {
      groupname,
    },
    headers: {
      'Content-Type': 'application/json',
      Authorization,
    },
  }
  const users = await API.get(apiName, path, myInit)
  console.log('users: ', users)

  return users
}
