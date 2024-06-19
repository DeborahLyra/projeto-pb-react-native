import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
 
import { Dashboard } from '@/screens/dashboard/Dashboard';
import { Login } from '@/screens/login/Login';
import { RootStackParamList } from '@/types';
import { Profile } from '@/screens/profile/Profile';
import { Ranking } from '@/screens/ranking/Ranking';
import CameraComponent from '@/screens/camera/CameraComponent';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Index() {
  return (
    <NativeBaseProvider>
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Ranking" component={Ranking} /> 
          <Stack.Screen name="Camera" component={CameraComponent} /> 
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
