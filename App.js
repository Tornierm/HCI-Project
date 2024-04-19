import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./components/Tabs/Home/home"
import Friends from "./components/Tabs/Friends/friends"
import Activity from "./components/Tabs/Activity/activity"
import Profile from "./components/Tabs/Profile/profile"


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Activity" component={Activity} />
        <Tab.Screen name="Friends" component={Friends} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
