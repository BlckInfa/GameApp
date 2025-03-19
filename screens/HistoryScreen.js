import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GameProvider } from './context/GameContext';
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import HistoryScreen from './screens/HistoryScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <GameProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: '#1e90ff' },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Game" component={GameScreen} />
          <Stack.Screen name="GameOver" component={GameOverScreen} />
          <Stack.Screen name="History" component={HistoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GameProvider>
  );
}
