import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import Button from '../components/Button/Button';
import MemberSign from './MemberSign';

export default function Hosgeldiniz({ navigation }) {

  function goToMemberSign() {
    navigation.navigate('MemberSignScreen');

  }


  return (


    <View style={styles.container} >
      <Text style={styles.header}>Beyza Fitness Salonu</Text>
      <TouchableOpacity style={{ backgroundColor: "#033" }} onPress={() => Alert.alert("hello tikky")}>
        <Text style={{ color: "#fff", padding: 12, fontWeight: "bold" }}>Üye Kaydı Oluştur</Text>
      </TouchableOpacity>
    </View>



  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
  }
})