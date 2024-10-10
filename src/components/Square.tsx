import React from 'react';

interface SquareProps {
    value: string | null;
    onClick: () => void;
    isWinner: boolean;
}

const Square: React.FC<SquareProps> = ({ value, onClick , isWinner }) => {
    const squareClass = isWinner ? 'square winner-square' : 'square';
  return (
    <button
      className={`${squareClass} w-20 h-20 border border-gray-400 text-4xl flex items-center justify-center cursor-pointer`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
