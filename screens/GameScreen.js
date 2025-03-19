import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useGameContext } from '../context/GameContext';
import Board from '../components/Board';

const GameScreen = ({ navigation }) => {
  const { board, currentPlayer, gameOver, winner, resetGame, addGameHistory } = useGameContext();

  useEffect(() => {
    if (gameOver) {
      addGameHistory(winner === 'Draw' ? 'Draw' : winner);
      navigation.navigate('GameOver');
    }
  }, [gameOver]);

  return (
    <View style={styles.container}>
      <Text style={styles.currentPlayer}>Current Player: {currentPlayer}</Text>
      <Board />
      <Button title="Restart Game" onPress={resetGame} color="#1e90ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
  },
  currentPlayer: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default GameScreen;
