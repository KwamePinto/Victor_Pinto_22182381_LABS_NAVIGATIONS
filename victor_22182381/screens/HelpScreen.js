import React from 'react';
import { View, Text } from 'react-native';
import { faqs } from '../data/dummyData';

export default function HelpScreen() {
  return (
    <View>
      <Text>Help & Support</Text>
      {faqs.map((item) => (
        <View key={item.id}>
          <Text>{item.question}</Text>
          <Text>{item.answer}</Text>
        </View>
      ))}
    </View>
  );
}
