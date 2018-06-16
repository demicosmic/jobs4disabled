import React from 'react'
import { View, StyleSheet, ScrollView, Modal, TouchableOpacity } from 'react-native'
import { Avatar, Button, Text, Card } from 'react-native-elements'
const LOREM = 'Lorem ipsum keme keme keme 48 years ng fayatollah kumenis shokot nakakalurky at ang ano otoko ang waz kemerloo kirara tamalis mashumers wrangler at bakit boyband katol.'

const jobs = [
  { title: 'Janitor', company: 'SBMA' },
  { title: 'Waiter', company: 'SBMA' },
  { title: 'Web Developer', company: 'SBMA' },
  { title: 'Mobile Developer', company: 'SBMA' },
  { title: 'Animator', company: 'SBMA' },
  { title: 'Nurse', company: 'SBMA' },
  { title: 'Brgy. Tanod', company: 'SBMA' },
  { title: 'Teacher', company: 'SBMA' },
  { title: 'Janitor', company: 'SBMA' },
]

export default class Home extends React.Component {

  render() {

    return (
      <ScrollView style={styles.container}>
        {
          jobs.map((j, i) => {
            return <Card
              key={i}
              title={j.title}
              >
              <Text style={{marginBottom: 10}}>
                Company: {j.company}
              </Text>
              <Text style={{marginBottom: 10}}>
                {LOREM}
              </Text>
              <Button
                backgroundColor='#03A9F4'
                title='APPLY'
                onPress={() => {
                  this.props.navigation.navigate('JobSingle')
                }}
                />
            </Card>
            
          })
        }
        <View style={{height: 40}}></View>
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