import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function MemberSonuc({route}) {
    const {user} = route.params;

  return (
    <View>

        <Text style={styles.message}>Kayıt Tamamlandı</Text>
      <Text style={styles.label}>Üye Ad:{user.userName} </Text>
      <Text style={styles.label}>Üye Soyadı:{user.userSurname} </Text>
      <Text style={styles.label}>Üye Yaşı:{user.userAge} </Text>
      <Text style={styles.label}>Üye E-posta:{user.userMail} </Text>
      <Text style={styles.label}>Üye Memleketi:{user.userHometown} </Text>
    </View>
  )
}

const styles= StyleSheet.create({
    label:{
        fontWeight:'bold',
        fontSize:30,
        margin:5,
    },
    message:{
        fontWeight:'bold',

        fontSize:50,
        textAlign:'center'
    }

})