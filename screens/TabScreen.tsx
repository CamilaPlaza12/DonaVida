import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './Home';
import { MyProfile } from './MyProfile';
import Turnos from './Turnos';
import Requerimientos from './Requerimientos';
import Proceso from './Proceso';
import Hospitales from './Hospitales';
import Hospital from './Hospital';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function StackNavigation(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name='Requerimientos' component={Requerimientos} options={{ headerShown: false }}/>
        <Stack.Screen name='Proceso' component={Proceso} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

function MyProfileStackNavigation(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="MyProfile" component={MyProfile} options={{ headerShown: false }}/>
      <Stack.Screen name='MisTurnos' component={Turnos} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

function HospitalesStackNavigation(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Hospitales" component={Hospitales} options={{ headerShown: false }}/>
      <Stack.Screen name="Hospital" component={Hospital} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

export const TabScreen = (props:any) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={StackNavigation} options={{ headerShown: false }}/>
      <Tab.Screen name="MyProfile" component={MyProfileStackNavigation} options={{ headerShown: false }}/>
      <Tab.Screen name="Turnos" component={Turnos} options={{ headerShown: false }}/>
      <Tab.Screen name="Hospitales" component={HospitalesStackNavigation} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}
