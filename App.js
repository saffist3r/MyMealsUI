import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button, Alert, ToastAndroid } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
    <View style={styles.container}>
      <Button
        title="NEW MEAL"
        onPress={() => ToastAndroid.show("Add new meal !", ToastAndroid.SHORT)}
      />
      <Button
        title="MEALS"
        onPress={() => ToastAndroid.show("List meals", ToastAndroid.SHORT)}
      />
      <StatusBar style="auto" />
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
