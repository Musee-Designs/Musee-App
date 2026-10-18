import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import PlaceholderScreen from './screens/placeholderScreen';

type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          <Stack.Screen
            name="Login"
            component={LoginScreen}
          />
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function LoginScreen(){
  return (
    <PlaceholderScreen title="Login" />
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
