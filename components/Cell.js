import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cell = ({ value }) => {
  return (
    <View style={styles.cell}>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cell: {
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Cell;
