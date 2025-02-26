import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

export default function Home() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const onTranslate = () => {
    const translation = input;
    setOutput(translation);
  };
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <View className="flex-row justify-around p-5">
        <Text className="font-bold color-blue-600">English</Text>
        <FontAwesome name="exchange" size={16} color="gray" />
        <Text className="font-bold color-blue-600">Spanish</Text>
      </View>
      <View className="border-y border-gray-300 p-5">
        <View className="flex-row gap-5">
          <TextInput
            value={input}
            onChangeText={(val) => setInput(val)}
            placeholder="Enter your text"
            className=" min-h-32 flex-1 text-xl"
            multiline
            maxLength={5000}
          />
          <FontAwesome6
            onPress={onTranslate}
            name="circle-arrow-right"
            size={24}
            color="royalblue"
          />
        </View>
        <View className="flex-row justify-between">
          <FontAwesome6 name="microphone" size={24} color="dimgray" />
          <Text className="color-gray-500">{input.length} / 5000</Text>
        </View>
      </View>

      {output && (
        <View className="bg-gray-300 p-5">
          <Text className=" min-h-32 text-xl">{output}</Text>
          <View className="flex-row justify-between">
            <FontAwesome6 name="volume-high" size={24} color="dimgray" />
            <FontAwesome5 name="clipboard" size={24} color="dimgray" />
          </View>
        </View>
      )}
    </>
  );
}
// Tomate7&
