import React from 'react'
import { View, StyleSheet, ScrollView, Modal, TouchableOpacity } from 'react-native'
import { Avatar, Button, Text, Card } from 'react-native-elements'
const LOREM = 'Lorem ipsum keme keme keme 48 years ng fayatollah kumenis shokot nakakalurky at ang ano otoko ang waz kemerloo kirara tamalis mashumers wrangler at bakit boyband katol at nang at thunder at ang bigalou katagalugan borta kirara chopopo wiz na ang nang ganders at ang at nang at ang cheapangga kasi antibiotic kasi waz shonga-shonga chopopo chuckie wiz boyband shala paminta na ang ang jowabella at nang at bakit bakit kemerloo na ang na at ang wiz jowabelles bigalou bakit oblation Cholo majubis bongga jowabelles balaj tanders keme keme nakakalurky na neuro at sa sa at bakit bigalou sudems kemerloo thunder chopopo at bakit ang buya nang boyband wasok shonga shontis krung-krung ng ano at ang otoko fayatollah kumenis bakit mahogany quality control bigalou jongoloids , waz.'

export default class JobSingle extends React.Component {

  render() {

    return (
      <ScrollView style={styles.container}>
        <Text h1>
          Janitor          
        </Text>
        <Text>{LOREM}</Text>

        <Button
          buttonStyle={styles.mt20}
          title='APPLY' />
        <Button
          buttonStyle={styles.mt20}
          title='BACK'
          onPress={() => {
            this.props.navigation.goBack()
          }}
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
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