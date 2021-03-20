import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Hello World
      </Text>
      <Image
        style={styles.preview}
        source={{uri: 'https://cdn.pixabay.com/photo/2015/09/06/00/46/yellow-926728_150.jpg'}}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  preview: {
    width: 150,
    height: 99,
  }
});
