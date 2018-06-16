import React from 'react'

import Onboarding from './navigators/Onboarding'
import Main from './navigators/Main'

export default class App extends React.Component {

  state = {
    loggedIn: false
  }

  login = () => {
    this.setState({ loggedIn: true })
  }

  logout = () => {
    this.setState({ loggedIn: false })
  }

  render() {
    return this.state.loggedIn ?
      <Main
        screenProps={{
          logout: this.logout
        }}
      />
      :
      <Onboarding screenProps={{
        login: this.login
      }} />
  }
}