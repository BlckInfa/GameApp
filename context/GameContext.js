import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GameContext = createContext();

export const useGameContext = () => {
  return useContext(GameContext);
};

export const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);
  const [history, setHistory] = useState([]);
  const [mode, setMode] = useState('multiplayer');

  useEffect(() => {
    const loadHistory = async () => {
      const storedHistory = await AsyncStorage.getItem('gameHistory');
      if (storedHistory) {
        setHistory(JSON.parse(storedHistory));
      }
    };

    loadHistory();
  }, []);

  useEffect(() => {
    const saveHistory = async () => {
      if (history.length > 0) {
        await AsyncStorage.setItem('gameHistory', JSON.stringify(history));
      }
    };

    saveHistory();
  }, [history]);

  useEffect(() => {
    const checkWinner = () => {
      const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6], // diagonals
      ];

      for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          setWinner(board[a]);
          setGameOver(true);
          return;
        }
      }

      if (!board.includes(null)) {
        setWinner('Draw');
        setGameOver(true);
      }
    };

    checkWinner();
  }, [board]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setGameOver(false);
    setWinner(null);
  };

  const makeMove = (index) => {
    if (board[index] || gameOver) return;
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const addGameHistory = (result) => {
    const gameDate = new Date();
    const gameRecord = {
      winner: result,
      date: gameDate.toLocaleDateString(),
      time: gameDate.toLocaleTimeString(),
    };

    setHistory((prevHistory) => [gameRecord, ...prevHistory]);
  };

  const deleteHistory = async () => {
    await AsyncStorage.removeItem('gameHistory');
    setHistory([]);
  };

  return (
    <GameContext.Provider value={{
      board, currentPlayer, gameOver, winner, mode, setMode, makeMove, resetGame, addGameHistory, history, deleteHistory
    }}>
      {children}
    </GameContext.Provider>
  );
};
