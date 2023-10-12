// App.tsx

import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {EligeFactorRH, EligeTipoDeSangre, Home, Hospital, Hospitales, Login, MyProfile, Proceso, Requerimientos, SignUpDonante, 
  VerificacionDeDatos, Turnos, CargarTurnos, TabScreen, TipoDeUsuario} from './screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainMenu() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Tab.Screen name="MyProfile" component={MyProfile} options={{ headerShown: false }}/>
      <Tab.Screen name="Turnos" component={Turnos} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}

function RequerimientosStack() {
  return (
    <Stack.Navigator>
    <Stack.Screen name='Requerimientos' component={Requerimientos} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="TabScreen" component={TabScreen} options={{ headerShown: false }} />
        <Stack.Screen options={{ headerShown: false }} name='EligeTipoDeSangre' component={EligeTipoDeSangre}/>
        <Stack.Screen options={{ headerShown: false }} name='EligeFactorRH' component={EligeFactorRH}/>
        <Stack.Screen options={{ headerShown: false }} name='VerificacionDeDatos' component={VerificacionDeDatos}/>
        <Stack.Screen options={{ headerShown: false }} name='SignUp' component={SignUpDonante}/>
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        <Stack.Screen options={{ headerShown: false }} name='TipoDeUsuario' component={TipoDeUsuario}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;