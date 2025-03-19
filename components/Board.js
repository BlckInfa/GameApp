import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Cell from './Cell';
import { useGameContext } from '../context/GameContext';

const Board = () => {
  const { board, makeMove } = useGameContext();

  return (
    <View style={styles.board}>
      {board.map((value, index) => (
        <TouchableOpacity key={index} onPress={() => makeMove(index)}>
          <Cell value={value} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
    height: 300,
    margin: 20,
    justifyContent: 'space-between',
  },
});

export default Board;
