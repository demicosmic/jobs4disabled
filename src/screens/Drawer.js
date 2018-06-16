import React from 'react'
import { View, StyleSheet, ScrollView, Modal, TouchableOpacity } from 'react-native'
import { Text, List, ListItem } from 'react-native-elements'

export default class Home extends React.Component {

  render() {

    return (
      <ScrollView style={styles.container}>
        <List>
          <ListItem
              title="Home"
              onPress={() => {this.props.navigation.navigate('Home')}}
            />
          <ListItem
              title="Profile"
              onPress={() => {this.props.navigation.navigate('Profile')}}
            />
          <ListItem
              title="Logout"
              onPress={() => {this.props.screenProps.logout()}}
            />
        </List>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    paddingVertical: 20
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  mt20: {
    marginTop: 20
  },
  ml20: {
    marginLeft: 20
  }
})