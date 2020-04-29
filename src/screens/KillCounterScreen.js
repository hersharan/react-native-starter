import React, { useState, useReducer } from 'react';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';


// with state implementation
// const KillCountScreen = () => {
//   const [counter, setCounter] = useState(0);
//   const [colors, setColors] = useState([]);
//   return (
//     <View>
//       <Button title="Increase" onPress={() => setCounter(counter + 1)} />
//       <Button title="Decrease" onPress={() => setCounter(counter - 1)} />
//       <Text style={{ backgroundColor: randomRgb() }}>{counter}</Text>
//       <Button title="Change Color" onPress={() => setColors([...colors, randomRgb()])} />
//     </View >
//   );
// };


// with reducer implementation
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
}

const KillCountScreen = () => {
  // const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  // const [colors, setColors] = useState([]);
  return (
    <View>
      <Button title="Increase" onPress={() => { dispatch({ type: 'increment', payload: 1 }) }} />
      <Button title="Decrease" onPress={() => { dispatch({ type: 'decrement', payload: 1 }) }} />
      <Text>{state.count}</Text>
      {/* <Button title="Change Color" onPress={() => setColors([...colors, randomRgb()])} /> */}
    </View >
  );
};

// const randomRgb = () => {
//   const red = Math.floor(Math.random() * 256);
//   const green = Math.floor(Math.random() * 256);
//   const blue = Math.floor(Math.random() * 256);
//   return `rgb(${red}, ${green}, ${blue})`;
// };

const styles = StyleSheet.create({
  textStyle: {
    color: 'red',
    fontSize: 30,
  },
});

export default KillCountScreen;