import React from 'react';
import { View, Text, Button } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View>
      <Text>Campus Connect</Text>
      <Text>Your one-stop app for everything happening on campus.</Text>
      <Button title="Get Started" onPress={() => navigation.navigate('Main')} />
    </View>
  );
}
