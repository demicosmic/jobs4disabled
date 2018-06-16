import React from 'react'
import { View, StyleSheet, ScrollView, Modal, TouchableOpacity } from 'react-native'
import { Avatar, Button, Text, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { Camera, Permissions } from 'expo'

export default class Profile extends React.Component {

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    modalVisible: false
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({ hasCameraPermission: status === 'granted' })
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible})
  }

  render() {

    return (
      <ScrollView style={styles.container}>
          <View style={styles.center}>
            <Avatar
              xlarge
              rounded
              source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
              onPress={() => {
                this.setModalVisible(true)
              }}
              activeOpacity={0.7}
              style={styles.mt20}
            />

            <Text h4>Jaime Papa</Text>
          </View>

          <FormLabel>First Name</FormLabel>
          <FormInput onChangeText={() => {}}/>
          {/* <FormValidationMessage>Error message</FormValidationMessage> */}

          <FormLabel>Middle Name</FormLabel>
          <FormInput onChangeText={() => {}}/>
          {/* <FormValidationMessage>Error message</FormValidationMessage> */}

          <FormLabel>Last Name</FormLabel>
          <FormInput onChangeText={() => {}}/>
          {/* <FormValidationMessage>Error message</FormValidationMessage> */}


          <Text h3 style={[styles.ml20, styles.mt20]}>Address</Text>

          <FormLabel>Street</FormLabel>
          <FormInput onChangeText={() => {}}/>
          {/* <FormValidationMessage>Error message</FormValidationMessage> */}

          <FormLabel>Barangay</FormLabel>
          <FormInput onChangeText={() => {}}/>
          {/* <FormValidationMessage>Error message</FormValidationMessage> */}

          <FormLabel>City</FormLabel>
          <FormInput onChangeText={() => {}}/>
          {/* <FormValidationMessage>Error message</FormValidationMessage> */}

          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={{flex: 1}}>
              <Camera style={{ flex: 1 }} type={this.state.type}>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between'
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({
                        type: this.state.type === Camera.Constants.Type.back
                          ? Camera.Constants.Type.front
                          : Camera.Constants.Type.back,
                      });
                    }}>
                    <Text
                      style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                      {' '}Flip{' '}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      this.setModalVisible(false)
                    }}>
                    <Text
                      style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                      {' '}Close{' '}
                    </Text>
                  </TouchableOpacity>
                </View>
              </Camera>
              {/* <View>
                <Text>Hello World!</Text>

                <Button
                  title="Close Modal"
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                </Button>
              </View> */}
            </View>
          </Modal>
      </ScrollView>
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
  mt20: {
    marginTop: 20
  },
  ml20: {
    marginLeft: 20
  }
})