/* eslint-disable import/prefer-default-export */

import Status from './types/Status';

export const getWinner = (cells: Status[]): Status => {
  const isLeftDiagWin = (
    cells[0] === cells[4] &&
    cells[0] === cells[8] &&
    cells[0] !== Status.NONE
  );

  const isRightDiagWin = (
    cells[2] === cells[4] &&
    cells[2] === cells[6] &&
    cells[2] !== Status.NONE
  );

  if (isLeftDiagWin || isRightDiagWin) {
    return cells[4];
  }

  for (let i = 0; i < 3; i += 1) {
    const isRowWin = (
      cells[i * 3] === cells[i * 3 + 1] &&
      cells[i * 3] === cells[i * 3 + 2] &&
      cells[i * 3] !== Status.NONE
    );

    const isColumnWin = (
      cells[i] === cells[i + 3] &&
      cells[i] === cells[i + 6] &&
      cells[i] !== Status.NONE
    );

    if (isRowWin || isColumnWin) {
      return cells[i * 3 + i];
    }
  }

  return Status.NONE;
};
