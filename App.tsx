import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import PlaceholderScreen from './screens/placeholderScreen';
// import ProfileScreen from './screens/profileScreen';

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
    <NavigationContainer>
      <Stack.Navigator>
        {<Stack.Screen
            name="Login"
            component={LoginScreen}
          />}
        {<Stack.Screen
            name="SignUp"
            component={SignUpScreen}
          />}
        {<Stack.Screen
            name="Main"
            component={MainTabs}
          />}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainTabs(){
  return (
    <Tab.Navigator>
        {<Tab.Screen
            name="HomeFeed"
            component={HomeFeedScreen}
          />}
        {<Tab.Screen
            name="Search"
            component={SearchScreen}
          />}
        {<Tab.Screen
            name="Profile"
            component={ProfileScreen}
          />}
        {<Tab.Screen
            name="DailyDrop"
            component={DailyDropScreen}
          />}
        {<Tab.Screen
            name="Friends"
            component={FriendsScreen}
          />}
        {<Tab.Screen
            name="SharedMixes"
            component={SharedMixesScreen}
          />}
      </Tab.Navigator>
  );
}

function LoginScreen(){
  return (
    <PlaceholderScreen title="Login" />
  );
}

function SignUpScreen(){
  return (
    <PlaceholderScreen title="Signup" />
  );
}

function HomeFeedScreen(){
  return (
    <PlaceholderScreen title="HomeFeed" />
  );
}

function SearchScreen(){
  return (
    <PlaceholderScreen title="Search" />
  );
}

function ProfileScreen(){
  return (
    <ProfileScreen/>
  );
}

function DailyDropScreen(){
  return (
    <PlaceholderScreen title="DailyDrop" />
  );
}

function FriendsScreen(){
  return (
    <PlaceholderScreen title="Friends" />
  );
}

function SharedMixesScreen(){
  return (
    <PlaceholderScreen title="SharedMixes" />
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
