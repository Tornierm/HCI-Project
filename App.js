import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./components/Tabs/Home/home"
import Friends from "./components/Tabs/Friends/friends"
import Activity from "./components/Tabs/Activity/activity"
import Profile from "./components/Tabs/Profile/profile"
import { Icon } from '@rneui/base';
import { IFilterConfig, Rating } from './components/types';

const Tab = createBottomTabNavigator();

const defaultFilter = {
  restrictions: [],
  features: [],
  rating: Rating.worst,
  distances: [],
  prices: [],
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home'
            } else if (route.name === 'Activity') {
              iconName = 'list'
            } else if (route.name === 'Friends') {
              iconName = 'group'
            } else if (route.name === 'Profile') {
              iconName = 'person'
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#C55530',
          tabBarInactiveTintColor: '#7C7C7C',
        })}
      >
        <Tab.Screen 
          name="Home"     
          options={{ headerShown: false }}
          component={Home} 
          initialParams={{filterConfig: defaultFilter}}
        />
        <Tab.Screen name="Activity" component={Activity} />
        <Tab.Screen name="Friends" component={Friends} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
