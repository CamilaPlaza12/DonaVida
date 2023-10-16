// App.tsx

import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {EligeFactorRH, EligeTipoDeSangre, Home, Hospital, Hospitales, Login, MyProfile, Proceso, Requerimientos, SignUpDonante, 
  VerificacionDeDatos, Turnos, CargarTurnos, TabScreen, TipoDeUsuario} from './screens';
import { SignUpHospital, HomeHospital, MyProfileHospital, RequestHospital, VerificacionDeDatosHospital, TurnosHospital, CalendarioHospital } from './screens/SignUpHospital/IndexHospital';
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
        <Stack.Screen options={{ headerShown: false }} name='SignUpDonante' component={SignUpDonante}/>
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        <Stack.Screen options={{ headerShown: false }} name='TipoDeUsuario' component={TipoDeUsuario}/>
        <Stack.Screen name="HomeHospital" component={HomeHospital} options={{ headerShown: false }} />
        <Stack.Screen name="MyProfileHospital" component={MyProfileHospital} options={{ headerShown: false }} />
        <Stack.Screen name="RequestHospital" component={RequestHospital} options={{ headerShown: false }} />
        <Stack.Screen name="SignUpHospital" component={SignUpHospital} options={{ headerShown: false }} />
        <Stack.Screen name="VerificacionDeDatosHospital" component={VerificacionDeDatosHospital} options={{ headerShown: false }} />
        <Stack.Screen name="TurnosHospital" component={TurnosHospital} options={{ headerShown: false }} />
        <Stack.Screen name="CalendarioHospital" component={CalendarioHospital} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;