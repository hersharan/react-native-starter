import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import Draggable from 'react-native-draggable';

// sample from - https://www.npmjs.com/package/react-native-draggable

const ListSampleTwo = () => {
  // { name: 'Yoda', key: '1' },
  // { name: 'Windu', key: '2' },
  // { name: 'Kenobi', key: '3' },
  // { name: 'Qui-gonn', key: '4' },
  // { name: 'Anakin', key: '5' },
  // { name: 'Padme', key: '6' },
  const list = [
    { name: 'Yoda', profession: 'Jedi' },
    { name: 'Windu', profession: 'Jedi' },
    { name: 'Kenobi', profession: 'Jedi' },
    { name: 'Padme', profession: 'Senator' },
    { name: 'Palpatine', profession: 'Senator/ Planner' },
    { name: 'Darth Vader', profession: 'Sith Lord' },
    { name: 'Luke', profession: 'Jedi' },
    { name: 'Leia', profession: 'Senator' },
  ];
  return (
    <View >
      <Draggable x={75} y={100} renderSize={56} renderColor='black' renderText='A' isCircle shouldReverse onShortPressRelease={() => alert('touched!!')} />
      <Draggable x={200} y={300} renderColor='red' renderText='B' />
      <Draggable />
      <Draggable x={50} y={50}>
        <FlatList
          data={list}
          // horizontal
          // showsHorizontalScrollIndicator={false}
          keyExtractor={(person) => person.name}
          renderItem={({ item }) => <View style={styles.viewStyle}><Text style={styles.textStyle}>{item.name}</Text><Text style={styles.subtextStyle}>{item.profession}</Text></View>} />
      </Draggable>
    </View>
  )
};

const styles = StyleSheet.create({
  viewStyle: {
    marginVertical: 5
  },
  textStyle: {
    color: 'red',
    fontSize: 24,
  },
  subtextStyle: {
    color: 'blue',
    fontSize: 20,
  }
});

export default ListSampleTwo;