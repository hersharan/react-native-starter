import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  console.log(navigation);
  return (
    <View>
      <Text style={styles.text}>Unlimited Power</Text>
      <Button
        title="Go to Conversation component"
        onPress={() => { navigation.navigate('Component') }}
      />
      <Button
        title="Go to List"
        onPress={() => { navigation.navigate('List') }}
      />
      <Button
        title="Go to Image Gallery"
        onPress={() => { navigation.navigate('ImageGallery') }}
      />
      <Button
        title="Go to Kill Counter"
        onPress={() => { navigation.navigate('KillCount') }}
      />
      {/* <TouchableOpacity onPress={() => { props.navigation.navigate('List') }}>
        <Text>Go to List</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
