// App.tsx

import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {EligeFactorRH, EligeQueDonar, EligeTipoDeSangre, Home, Hospital, Hospitales, Login, MyProfile, Proceso, Requerimientos, SignUp, VerificacionDeDatos} from './screens';

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name='Login' component={Login}/>
        <Stack.Screen options={{ headerShown: false }} name='SignUp' component={SignUp}/>
        <Stack.Screen name='MyProfile' component={MyProfile}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen options={{ headerShown: false }} name='EligeQueDonar' component={EligeQueDonar}/>
        <Stack.Screen options={{ headerShown: false }} name='EligeTipoDeSangre' component={EligeTipoDeSangre}/>
        <Stack.Screen options={{ headerShown: false }} name='EligeFactorRH' component={EligeFactorRH}/>
        <Stack.Screen options={{ headerShown: false }} name='VerificacionDeDatos' component={VerificacionDeDatos}/>
        <Stack.Screen name='Hospitales' component={Hospitales}/>
        <Stack.Screen name='Requerimientos' component={Requerimientos}/>
        <Stack.Screen name='Proceso' component={Proceso}/>
        <Stack.Screen name='Hospital' component={Hospital}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
