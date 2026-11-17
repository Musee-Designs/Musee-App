import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import type { ComponentProps } from 'react';

import PlaceholderScreen from '../../screens/placeholderScreen';
import DailyDrop from '../screens/daily-drop';
import SharedMixes from '../screens/shared-mixes';
import SearchScreen from '../screens/search';
import Friends from '../screens/friends';
import Profile from '../screens/profile';

import type { User } from '../types/models';

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

type IconName = ComponentProps<typeof Ionicons>['name'];

const tabIcons: Record<keyof MainTabParamList, IconName> = {
  HomeFeed: 'home-outline',
  Search: 'search-outline',
  DailyDrop: 'musical-notes-outline',
  Friends: 'people-outline',
  SharedMixes: 'albums-outline',
  Profile: 'person-outline',
};

type MainTabNavigatorProps = {
  profile: User | null;
  guest: boolean;
  onExit: () => void;
};

export default function MainTabNavigator({profile, guest, onExit }: MainTabNavigatorProps) {
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
        component={Friends}
      />
      <Tab.Screen
        name="SharedMixes"
        component={SharedMixes}
        options={{ title: 'Mixes' }}
      />
      <Tab.Screen name="Profile">
        {() => (<Profile profile={profile} guest={guest} onSignOut={onExit}/>)}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
