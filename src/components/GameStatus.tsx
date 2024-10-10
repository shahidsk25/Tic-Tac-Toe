import React from 'react';

interface GameStatusProps {
  status: string;
}

const GameStatus: React.FC<GameStatusProps> = ({ status }) => {
  return <div className="mb-4 text-xl font-semibold text-gray-700">{status}</div>;
};

export default GameStatus;
