import { StyleSheet, SafeAreaView, Platform, StatusBar, View, Image, Text } from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';
import React from 'react';
import WelcomeScreen from './app/screens/WelcomeScreen';
import MessagesScreen from './app/screens/messagesScreen';


export default function App() {
  const { landscape } = useDeviceOrientation();
  const landscapeStyle = { height: landscape ? '100%' : '100%' };
  return (
    <MessagesScreen></MessagesScreen>
  );
}
