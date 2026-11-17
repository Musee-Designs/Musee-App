import React, { useState } from 'react';
import {ActivityIndicator, Alert, Button, StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import LoginScreen from './src/screens/login';
import SignupScreen from './src/screens/signup';
import MainTabNavigator from './src/navigation/MainTabNavigator';

import { useAuth } from './src/hooks/useAuth';
import {
  logOut,
  getAuthErrorMessage,
} from './src/services/authService';

type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Main: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const { user, profile, loading, error } = useAuth();
  const [guestMode, setGuestMode] = useState(false);

  async function handleExit() {
    if (guestMode) {
      setGuestMode(false);
      return;
    }

    try {
      await logOut();
    } catch (signOutError) {
      Alert.alert(
        'Sign Out Failed',
        getAuthErrorMessage(signOutError)
      );
    }
  }

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator
          size="large"
          color="#A52D40"
        />
        <Text style={styles.message}>
          Loading Musee...
        </Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.message}>
          Unable to load your account.
        </Text>

        <Text style={styles.error}>
          {error}
        </Text>

        <Button
          title="Sign Out"
          onPress={() => void handleExit()}
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
          {!user && !guestMode ? (
            <>
              <Stack.Screen name="Login">
                {({ navigation }) => (
                  <LoginScreen
                    onCreateAccount={() =>
                      navigation.navigate('SignUp')
                    }
                    onGuest={() => setGuestMode(true)}
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
          ) : (
            <Stack.Screen name="Main">
              {() => (
                <MainTabNavigator
                  profile={profile}
                  guest={guestMode}
                  onExit={() => void handleExit()}
                />
              )}
            </Stack.Screen>
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
