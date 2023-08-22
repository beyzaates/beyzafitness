

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Hosgeldiniz from './pages/Hosgeldiniz';
import MemberSign from './pages/MemberSign';
import MemberSonuc from './pages/MemberSonuc';


const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false,}}>

       <Stack.Screen name='MemberSign'component={MemberSign}/>
       <Stack.Screen name="Hosgeldiniz" component={Hosgeldiniz} />
       <Stack.Screen name="MemberSonucEkran" component={MemberSonuc} />

      

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;