import React, { useCallback, useState } from 'react';
import Status from '../../types/Status';
import Cell from '../Cell/Cell';
import Message from '../Message/Message';

import './Field.css';
import { getWinner } from '../../gameLogic';

const defaultField = Array(9).fill(Status.NONE);

const Field = () => {
  const [cells, setCells] = useState(defaultField);
  const [turn, setTurn] = useState(Status.CROSS);

  const winner = getWinner(cells);
  const isGameOver = winner !== Status.NONE || cells.every((cell) => cell !== Status.NONE);

  const onClick = useCallback((index: number) => () => {
    if (cells[index] !== Status.NONE || isGameOver) {
      return;
    }

    const newCells = [...cells];

    newCells[index] = turn;

    setTurn(turn === Status.CROSS ? Status.ZERO : Status.CROSS);

    setCells(newCells);
  }, [cells]);

  return (
    <div className="field">
      {isGameOver && (
        <Message
          text={
            winner === Status.CROSS
              ? 'Крестики победили'
              : winner === Status.ZERO
                ? 'Нолики победили'
                : 'Ничья'
          }
        />
      )}

      {cells.map((cell, index) => (
        <Cell status={cell} onClick={onClick(index)} key={index} />
      ))}
    </div>
  );
};

export default Field;
