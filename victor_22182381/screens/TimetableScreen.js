import React from 'react';
import { View, Text } from 'react-native';
import { timetable } from '../data/dummyData';

export default function TimetableScreen() {
  return (
    <View>
      <Text>Timetable</Text>
      {timetable.map((item) => (
        <View key={item.id}>
          <Text>{item.day} {item.time} - {item.course} ({item.venue})</Text>
        </View>
      ))}
    </View>
  );
}
