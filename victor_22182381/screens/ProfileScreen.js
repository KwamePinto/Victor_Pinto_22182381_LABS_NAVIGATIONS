import React from 'react';
import { View, Text, Button } from 'react-native';
import { useProfile } from '../context/ProfileContext';

export default function ProfileScreen({ navigation }) {
  const { profile } = useProfile();

  return (
    <View>
      <Text>Student Profile</Text>
      <Text>Name: {profile.name}</Text>
      <Text>Index Number: {profile.indexNumber}</Text>
      <Text>Programme: {profile.programme}</Text>
      <Text>Level: {profile.level}</Text>
      <Text>Bio: {profile.bio}</Text>
      <Button
        title="Edit Profile"
        onPress={() => navigation.navigate('EditProfile', { profile })}
      />
    </View>
  );
}
