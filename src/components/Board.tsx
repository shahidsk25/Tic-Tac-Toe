import React, { useState } from 'react';
import Square from './Square';
import GameStatus from './GameStatus';

const Board: React.FC = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index: number) => {
    if (squares[index] || calculateWinner(squares)) return;

    const newSquares = squares.slice();
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const winnerData = calculateWinner(squares);
  const winner = winnerData ? winnerData.winner : null;
  const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div>
      <GameStatus status={status} />
      <div className="grid grid-cols-3 gap-4">
        {squares.map((square, i) => (
          <Square
            value={square}
            onClick={() => handleClick(i)}
            isWinner={winnerData?.winningSquares.includes(i) ?? false}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

// Function to calculate the winner
const calculateWinner = (squares: Array<string | null>) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], winningSquares: [a, b, c] };
    }
  }
  return null;
};

export default Board;
