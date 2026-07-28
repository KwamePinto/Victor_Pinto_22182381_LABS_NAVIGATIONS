import React from 'react';
import { View, Text, Button } from 'react-native';

export default function EventDetailsScreen({ navigation, route }) {
  const { event } = route.params;

  return (
    <View>
      <Text>{event.title}</Text>
      <Text>{event.date}</Text>
      <Text>{event.description}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
