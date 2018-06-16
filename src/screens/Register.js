import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Text, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

export default class Register extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.center}>
          <Text h1>Jobs for Disabled</Text>
        </View>

        <FormLabel>Username</FormLabel>
        <FormInput onChangeText={() => {}}/>
        {/* <FormValidationMessage>Error message</FormValidationMessage> */}

        <FormLabel>Email</FormLabel>
        <FormInput onChangeText={() => {}}/>
        {/* <FormValidationMessage>Error message</FormValidationMessage> */}

        <FormLabel>Password</FormLabel>
        <FormInput onChangeText={() => {}}/>
        {/* <FormValidationMessage>Error message</FormValidationMessage> */}

        <FormLabel>Confirm Password</FormLabel>
        <FormInput onChangeText={() => {}}/>
        {/* <FormValidationMessage>Error message</FormValidationMessage> */}

        <FormLabel>Contact Number</FormLabel>
        <FormInput onChangeText={() => {}}/>
        {/* <FormValidationMessage>Error message</FormValidationMessage> */}

        <Button title='REGISTER' style={styles.submitButton} />
        <View style={[styles.center, styles.mt20]}>
          <Text>Already have an account?
            <Text style={ styles.highlight}  onPress={() => {this.props.navigation.goBack()}}>Login</Text>
          </Text>
        </View>
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