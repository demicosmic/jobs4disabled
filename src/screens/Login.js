import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Text, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.center}>
          <Text h1>Jobs for Disabled</Text>
        </View>

        <FormLabel>Username</FormLabel>
        <FormInput onChangeText={() => {}}/>
        {/* <FormValidationMessage>Error message</FormValidationMessage> */}

        <FormLabel>Password</FormLabel>
        <FormInput onChangeText={() => {}}/>
        {/* <FormValidationMessage>Error message</FormValidationMessage> */}

        <Button title='LOGIN' style={styles.submitButton} onPress={() => {
          this.props.screenProps.login()
        }}/>
        <View style={[styles.center, styles.mt20]}>
          <Text>Not yet registered?</Text>
        </View>
        <Button title='REGISTER' style={styles.submitButton} onPress={() => {this.props.navigation.navigate('Register')}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    paddingTop: 20
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitButton: {
    marginTop: 20
  },
  highlight: {
    color: '#00796B'
  },
  mt20: {
    marginTop: 20
  }
})