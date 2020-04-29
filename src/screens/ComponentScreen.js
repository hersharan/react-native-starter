import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {
  const greeting1 = 'Hello, there';
  const greeting2 = 'Ahh, General Kenobi, you are a bold one.';
  return (
    <View>
      <Text style={styles.textStyle}>{greeting1}</Text>
      <Text style={styles.textStyle}>{greeting2}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  textStyle: {
    color: 'red',
    fontSize: 30,
  },
  subTextStyle: {
    color: 'green',
    fontSize: 20,
  }
});

export default ComponentScreen;