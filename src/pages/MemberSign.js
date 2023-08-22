import { View, Text, Alert,TextInput,TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Input from '../components/Input/Input'
import Button from '../components/Button/Button'

export default function MemberSign({navigation}) {

 const[userName, setUserName]= useState('null');
 const[userSurname, setUserSurname]= useState('null');
 const[userAge, setUserAge]= useState('null');
 const[userMail, setUserMail]= useState('null');
 const[userHometown, setUserHometown]= useState('null');
 
 
 
 function handleSubmit(){
 if(!userName || !userSurname || !userAge ||!userMail || !userHometown 
){Alert.alert('Beyza Fitness Salonu', 'Bilgiler boş bırakılamaz');
return;

 }

  const user ={ 
       userName,
       userSurname,
       userAge,    
       userMail,
       userHometown,
  };

     navigation.navigate('MemberSonucEkran',{user});
 }

  return (
    <View>
      <Text style={{fontSize:20,color:"red"}}>Üye Kayıt</Text>
      <TextInput label="Üye Adı:" placeholder="Üyenin ismini giriniz..." onChangeText={setUserName} />
      <TextInput label="Üye Soyadı:" placeholder="Üyenin soyismini giriniz..."onChangeText={setUserSurname} />
      <TextInput label="Üye Yaşı:" placeholder="Üyenin yaşını giriniz..." onChangeText={setUserAge}/>
      <TextInput label="Üye E-posta:" placeholder="Üyenin e-postasını giriniz..."onChangeText={setUserMail}/>
      <TextInput label="Üye Memleketi:" placeholder="Üyenin memleketini giriniz..."onChangeText={setUserHometown} />
      
      <TouchableOpacity style={{ backgroundColor: "pink" }}>
        <Text style={{ color: "#fff", padding: 12, fontWeight: "bold" }}>Kaydı Tamamla</Text>
      </TouchableOpacity>
      
    </View>
  )
}