
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';

import LoginScreen from './src/screens/login';
import SignupScreen from './src/screens/signup';
import SharedMixes from './src/services/screens/shared-mixes';

import PlaceholderScreen from './screens/placeholderScreen';

type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Main: undefined;
};

type MainTabParamList = {
  HomeFeed: undefined;
  Search: undefined;
  Profile: undefined;
  DailyDrop: undefined;
  Friends: undefined;
  SharedMixes: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

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

          <Stack.Screen name="Main" component={MainTabs} />
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </>
  );
}

// Main application navigation
function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeFeed"
        component={HomeFeedScreen}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
      />
      <Tab.Screen
        name="DailyDrop"
        component={DailyDropScreen}
      />
      <Tab.Screen
        name="Friends"
        component={FriendsScreen}
      />
      <Tab.Screen
        name="SharedMixes"
        component={SharedMixes}
      />
    </Tab.Navigator>
  );
}

// Placeholder screens
function HomeFeedScreen() {
  return <PlaceholderScreen title="HomeFeed" />;
}

function SearchScreen() {
  return <PlaceholderScreen title="Search" />;
}

function ProfileScreen() {
  return <PlaceholderScreen title="Profile" />;
}

function DailyDropScreen() {
  return <PlaceholderScreen title="DailyDrop" />;
}

function FriendsScreen() {
  return <PlaceholderScreen title="Friends" />;
}
