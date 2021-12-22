import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Field from './Field';

describe('Field', () => {
  it('should render 3x3 field', () => {
    render(<Field />);
    expect(screen.getAllByRole('cell')).toHaveLength(3 * 3);
  });

  it('should show winner', () => {
    const { baseElement, getAllByRole } = render(<Field />);

    const cells = getAllByRole('cell');
    fireEvent.click(cells[0]);
    fireEvent.click(cells[3]);
    fireEvent.click(cells[1]);
    fireEvent.click(cells[6]);
    fireEvent.click(cells[2]);

    const message = baseElement.querySelector('.message');

    expect(message).toHaveTextContent('Крестики победили');
  });

  it('should show draw', () => {
    const { baseElement, getAllByRole } = render(<Field />);

    const cells = getAllByRole('cell');
    fireEvent.click(cells[0]);
    fireEvent.click(cells[1]);
    fireEvent.click(cells[2]);
    fireEvent.click(cells[3]);
    fireEvent.click(cells[5]);
    fireEvent.click(cells[4]);
    fireEvent.click(cells[6]);
    fireEvent.click(cells[8]);
    fireEvent.click(cells[7]);

    const message = baseElement.querySelector('.message');

    expect(message).toHaveTextContent('Ничья');
  });
});
