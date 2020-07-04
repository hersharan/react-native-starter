import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  // console.log(navigation);
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
        title="Go to Counter"
        onPress={() => { navigation.navigate('KillCount') }}
      />
      <Button
        title="Go to Search"
        onPress={() => { navigation.navigate('Search') }}
      />
      <Button
        title="Drag Drop Sample 1"
        onPress={() => { navigation.navigate('ListSampleOne') }}
      />
      <Button
        title="Drag Drop Sample 2"
        onPress={() => { navigation.navigate('ListSampleTwo') }}
      />
      <Button
        title="Drag Drop Sample 3"
        onPress={() => { navigation.navigate('ListSampleThree') }}
      />
      <Button
        title="Drag Drop Sample 4"
        onPress={() => { navigation.navigate('ListSampleFour') }}
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
