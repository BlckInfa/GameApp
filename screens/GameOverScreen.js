import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useGameContext } from '../context/GameContext';

const GameOverScreen = ({ navigation }) => {
  const { winner, resetGame } = useGameContext();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{winner === 'Draw' ? 'It\'s a Draw!' : `${winner} Wins!`}</Text>
      <Button title="Play Again" onPress={() => { resetGame(); navigation.navigate('Home'); }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
});

export default GameOverScreen;
