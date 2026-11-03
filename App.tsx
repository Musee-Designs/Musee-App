import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import LoginScreen from './src/screens/login';
import SignupScreen from './src/screens/signup';
import MainTabNavigator from './src/navigation/MainTabNavigator';
import SearchScreen from './src/services/screens/search';

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Main: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login">
            {({ navigation }) => (
              <LoginScreen
                onCreateAccount={() => navigation.navigate('SignUp')}
                onGuest={() => navigation.navigate('Main', {screen: 'HomeFeed'})}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="SignUp">
            {({ navigation }) => (
              <SignupScreen
                onLogin={() => navigation.navigate('Login')}
              />
            )}
          </Stack.Screen>

          <Stack.Screen
            name="Main"
            component={MainTabNavigator}
          />
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </>
  );
}
