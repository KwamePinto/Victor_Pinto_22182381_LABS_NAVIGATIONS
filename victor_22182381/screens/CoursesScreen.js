import React from 'react';
import { View, Text } from 'react-native';
import { courses } from '../data/dummyData';

export default function CoursesScreen() {
  return (
    <View>
      <Text>My Courses</Text>
      {courses.map((item) => (
        <View key={item.id}>
          <Text>{item.code} - {item.title} ({item.credits} credit hours)</Text>
        </View>
      ))}
    </View>
  );
}
