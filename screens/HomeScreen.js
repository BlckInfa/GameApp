import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useGameContext } from '../context/GameContext';

const HomeScreen = ({ navigation }) => {
  const { setMode } = useGameContext();

  return (
    <ImageBackground
    
      style={styles.container}
      imageStyle={styles.backgroundImage}
    >
      <Text style={styles.title}>Tic Tac Toe</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.multiplayerButton]}
          onPress={() => { setMode('multiplayer'); navigation.navigate('Game'); }}
        >
          <Text style={styles.buttonText}>Multiplayer</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.button, styles.computerButton]}
          onPress={() => { setMode('computer'); navigation.navigate('Game'); }}
        >
          <Text style={styles.buttonText}>Play vs Computer</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8, // Apply transparency to background image
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    marginBottom: 40,
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 5, // Add a subtle shadow effect for buttons
  },
  multiplayerButton: {
    backgroundColor: '#1e90ff',
  },
  computerButton: {
    backgroundColor: '#ff6347',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
