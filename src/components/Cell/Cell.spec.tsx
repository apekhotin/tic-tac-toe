import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Status from '../../types/Status';
import Cell from './Cell';

describe('Cell', () => {
  it.each([
    ['cell--cross', Status.CROSS],
    ['cell--zero', Status.ZERO],
  ])('should have "%s" modifier when status is %s', (className, status) => {
    render(<Cell status={status} onClick={() => null} />);

    expect(screen.getByRole('cell')).toHaveClass(`cell ${className}`, { exact: true });
  });

  it('should call onClick', () => {
    const onClick = jest.fn();

    render(<Cell status={Status.NONE} onClick={onClick} />);
    fireEvent.click(screen.getByRole('cell'));

    expect(onClick).toBeCalledTimes(1);
  });
});
