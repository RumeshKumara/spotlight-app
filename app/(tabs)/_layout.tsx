import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabsLayout() {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarActiveTintColor: '#249900',
            tabBarInactiveTintColor: '#999999',
            tabBarStyle: {
                backgroundColor: '#161616',
                borderTopWidth: 0,
                elevation: 0,
                height: 40,
                position: 'absolute',
                paddingBottom: 8,
            },
           
        }}
    >
      <Tabs.Screen name="index"
        options={{
          tabBarIcon: () => <Ionicons name="home" size={24} color="#249900" />,
        }}
      
      />
       <Tabs.Screen name="bookmarks"
        options={{
          tabBarIcon: () => <Ionicons name="bookmark" size={24} color="#249900" />,
        }}
      />
      <Tabs.Screen name="create" 
        options={{
          tabBarIcon: () => <Ionicons name="add-circle" size={24} color="#249900" />,
        }}
      
      />
      <Tabs.Screen name="notifications"
        options={{
          tabBarIcon: () => <Ionicons name="notifications" size={24} color="#249900" />,
        }}
      />
     
      <Tabs.Screen name="profile"
        options={{
          tabBarIcon: () => <Ionicons name="person" size={24} color="#249900" />,
        }}
      />
      
    </Tabs>
  );
}
