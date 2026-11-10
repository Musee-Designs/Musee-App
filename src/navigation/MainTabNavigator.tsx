import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import type { ComponentProps } from 'react';

import PlaceholderScreen from '../../screens/placeholderScreen';
import DailyDrop from '../services/screens/daily-drop';
import SharedMixes from '../services/screens/shared-mixes';
import SearchScreen from '../services/screens/search';

export type MainTabParamList = {
  HomeFeed: undefined;
  Search: undefined;
  DailyDrop: undefined;
  Friends: undefined;
  SharedMixes: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

function HomeFeedScreen() {
  return <PlaceholderScreen title="Home Feed" />;
}


function FriendsScreen() {
  return <PlaceholderScreen title="Friends" />;
}

function ProfileScreen() {
  return <PlaceholderScreen title="Profile" />;
}

type IconName = ComponentProps<typeof Ionicons>['name'];

const tabIcons: Record<keyof MainTabParamList, IconName> = {
  HomeFeed: 'home-outline',
  Search: 'search-outline',
  DailyDrop: 'musical-notes-outline',
  Friends: 'people-outline',
  SharedMixes: 'albums-outline',
  Profile: 'person-outline',
};

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeFeed"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#A52D40',
        tabBarInactiveTintColor: '#86747D',
        tabBarStyle: {
          backgroundColor: '#FFF9F5',
        },
        tabBarLabelStyle: {
          fontSize: 10,
        },
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons
            name={
              focused
                ? (tabIcons[route.name].replace('-outline', '') as IconName)
                : tabIcons[route.name]
            }
            size={size}
            color={color}
          />
        ),
      })}
    >
      <Tab.Screen
        name="HomeFeed"
        component={HomeFeedScreen}
        options={{ title: 'Home' }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
      />
      <Tab.Screen
        name="DailyDrop"
        component={DailyDrop}
        options={{ title: 'Daily Drop' }}
      />
      <Tab.Screen
        name="Friends"
        component={FriendsScreen}
      />
      <Tab.Screen
        name="SharedMixes"
        component={SharedMixes}
        options={{ title: 'Mixes' }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
