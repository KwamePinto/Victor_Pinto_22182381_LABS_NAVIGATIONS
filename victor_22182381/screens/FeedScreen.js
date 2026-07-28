import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { feedEvents } from '../data/dummyData';

export default function FeedScreen({ navigation }) {
  return (
    <View>
      <Text>Campus Feed</Text>
      <FlatList
        data={feedEvents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('EventDetails', { event: item })}>
            <Text>{item.title}</Text>
            <Text>{item.date}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
