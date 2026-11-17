import React from 'react';
import {ActivityIndicator, Button, StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import LoginScreen from './src/screens/login';
import SignupScreen from './src/screens/signup';
import MainTabNavigator from './src/navigation/MainTabNavigator';

import { useAuth } from './src/hooks/useAuth';
import { logOut } from './src/services/authService';

type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Main: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const { user, profile, loading, error } = useAuth();

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator
          size="large"
          color="#A52D40"
        />
        <Text style={styles.message}>Loading Musee...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.message}>
          Unable to load your account.
        </Text>
        <Text style={styles.error}>{error}</Text>
        <Button
          title="Sign Out"
          onPress={() => void logOut()}
        />
      </View>
    );
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
        >
          {!user ? (
            <>
              <Stack.Screen name="Login">
                {({ navigation }) => (
                  <LoginScreen
                    onCreateAccount={() =>
                      navigation.navigate('SignUp')
                    }
                  />
                )}
              </Stack.Screen>

              <Stack.Screen name="SignUp">
                {({ navigation }) => (
                  <SignupScreen
                    onLogin={() =>
                      navigation.navigate('Login')
                    }
                  />
                )}
              </Stack.Screen>
            </>
          // ) : !profile ? (
          //   <Stack.Screen name="Profile">
          //     {() => <ProfileScreen user={user} />}
          //   </Stack.Screen>
          ) : (
            <Stack.Screen
              name="Main"
              component={MainTabNavigator}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFECCC',
    padding: 24,
  },
  message: {
    fontSize: 16,
    color: '#2E1D26',
    marginTop: 12,
    textAlign: 'center',
  },
  error: {
    color: '#A52D40',
    textAlign: 'center',
    marginVertical: 15,
  },
});
