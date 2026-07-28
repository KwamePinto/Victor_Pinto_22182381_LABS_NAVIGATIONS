import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { announcements } from '../data/dummyData';

export default function AnnouncementsScreen() {
  return (
    <View>
      <Text>Announcements</Text>
      <FlatList
        data={announcements}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.date}</Text>
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}
