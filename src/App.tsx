import React from 'react';
import Board from './components/Board';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-5">Tic-Tac-Toe Game</h1>
      <Board />
    </div>
  );
};

export default App;
