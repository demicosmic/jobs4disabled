import React from 'react'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'

import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Drawer from '../screens/Drawer'
import JobSingle from '../screens/JobSingle'
// import Sample from '../screens/Sample'

let stackNavOptions = {
  headerMode: 'none'
}

let drawerNavOptions = {
  headerMode: 'none',
  contentComponent: props => <Drawer { ...props } />,
  drawerWidth: 250
}

const DrawerNav = createDrawerNavigator({
  Home: { screen: props => <Home {...props} /> },
  Profile: { screen: Profile }
}, drawerNavOptions)

const StackNav = createStackNavigator({
  Drawer: { screen: DrawerNav },
  JobSingle: { screen: JobSingle }
}, stackNavOptions)

module.exports = StackNav