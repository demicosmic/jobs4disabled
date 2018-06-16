import React from 'react'
import { createStackNavigator } from 'react-navigation'

import Login from '../screens/Login'
import Register from '../screens/Register'

let stackNavOptions = {
  headerMode: 'none'
}

const StackNav = createStackNavigator({
  Login: { screen: props => {
    return <Login {...props}/ >
  } },
  Register: { screen: Register },
}, stackNavOptions)

module.exports = StackNav