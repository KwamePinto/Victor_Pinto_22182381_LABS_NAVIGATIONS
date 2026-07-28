import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useProfile } from '../context/ProfileContext';

export default function EditProfileScreen({ navigation, route }) {
  const { setProfile } = useProfile();
  const initial = route.params.profile;

  const [name, setName] = useState(initial.name);
  const [bio, setBio] = useState(initial.bio);
  const [programme, setProgramme] = useState(initial.programme);

  const handleSave = () => {
    setProfile((prev) => ({ ...prev, name, bio, programme }));
    navigation.goBack();
  };

  return (
    <View>
      <Text>Edit Profile</Text>

      <Text>Name</Text>
      <TextInput value={name} onChangeText={setName} />

      <Text>Bio</Text>
      <TextInput value={bio} onChangeText={setBio} />

      <Text>Programme</Text>
      <TextInput value={programme} onChangeText={setProgramme} />

      <Button title="Save" onPress={handleSave} />
    </View>
  );
}
