import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ProfileProvider } from './context/ProfileContext';
import RootStack from './navigation/RootStack';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ProfileProvider>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </ProfileProvider>
    </GestureHandlerRootView>
  );
}
