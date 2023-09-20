// App.tsx

import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {Home, Login, MyProfile, SignUp} from './screens';

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name='Login' component={Login}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
        <Stack.Screen name='MyProfile' component={MyProfile}/>
        <Stack.Screen name='Home' component={Home}/>

        
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
