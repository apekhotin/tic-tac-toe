import React from 'react';
import cn from 'classnames';
import Status from '../../types/Status';

import './Cell.css';

type CellPropTypes = {
  status: Status;
  onClick: () => void;
};

const Cell = ({ status, onClick }: CellPropTypes) => (
  <div
    className={cn(
      'cell',
      { 'cell--zero': status === Status.ZERO },
      { 'cell--cross': status === Status.CROSS },
    )}
    onClick={onClick}
    role="cell"
  />
);

export default React.memo(Cell);
