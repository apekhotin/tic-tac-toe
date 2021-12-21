/* eslint-disable no-multi-spaces */

import Status from './types/Status';
import { getWinner } from './gameLogic';

describe('Game Logic', () => {
  it.each([
    [[Status.CROSS, Status.CROSS, Status.CROSS,
      Status.ZERO,  Status.ZERO,  Status.NONE,
      Status.NONE,  Status.NONE,  Status.NONE]],
    [[Status.NONE,  Status.NONE,  Status.NONE,
      Status.CROSS, Status.CROSS, Status.CROSS,
      Status.ZERO,  Status.ZERO,  Status.NONE]],
    [[Status.NONE,  Status.NONE,  Status.ZERO,
      Status.NONE,  Status.NONE,  Status.ZERO,
      Status.CROSS, Status.CROSS, Status.CROSS]],
    [[Status.CROSS, Status.NONE,  Status.NONE,
      Status.CROSS, Status.NONE,  Status.NONE,
      Status.CROSS, Status.ZERO,  Status.ZERO]],
    [[Status.NONE,  Status.CROSS, Status.ZERO,
      Status.NONE,  Status.CROSS, Status.ZERO,
      Status.NONE,  Status.CROSS, Status.NONE]],
    [[Status.NONE,  Status.ZERO,  Status.CROSS,
      Status.ZERO,  Status.NONE,  Status.CROSS,
      Status.NONE,  Status.NONE,  Status.CROSS]],
    [[Status.ZERO,  Status.NONE,  Status.CROSS,
      Status.NONE,  Status.CROSS, Status.NONE,
      Status.CROSS, Status.ZERO,  Status.NONE]],
    [[Status.CROSS, Status.ZERO,  Status.NONE,
      Status.ZERO,  Status.CROSS, Status.NONE,
      Status.NONE,  Status.NONE,  Status.CROSS]],

  ])('should have 8 to win with CROSS [%#]', async (cells) => {
    expect(getWinner(cells)).toBe(Status.CROSS);
  });

  it.each([
    [[Status.ZERO,  Status.ZERO,  Status.ZERO,
      Status.CROSS, Status.CROSS, Status.NONE,
      Status.CROSS, Status.NONE,  Status.NONE]],
    [[Status.CROSS, Status.NONE,  Status.NONE,
      Status.ZERO,  Status.ZERO,  Status.ZERO,
      Status.CROSS, Status.CROSS, Status.NONE]],
    [[Status.CROSS, Status.NONE,  Status.CROSS,
      Status.NONE,  Status.NONE,  Status.CROSS,
      Status.ZERO,  Status.ZERO,  Status.ZERO]],
    [[Status.ZERO,  Status.NONE,  Status.CROSS,
      Status.ZERO,  Status.NONE,  Status.NONE,
      Status.ZERO,  Status.CROSS, Status.CROSS]],
    [[Status.NONE,  Status.ZERO,  Status.CROSS,
      Status.CROSS, Status.ZERO,  Status.CROSS,
      Status.NONE,  Status.ZERO,  Status.NONE]],
    [[Status.NONE,  Status.CROSS, Status.ZERO,
      Status.CROSS, Status.NONE,  Status.ZERO,
      Status.CROSS, Status.NONE,  Status.ZERO]],
    [[Status.CROSS, Status.NONE,  Status.ZERO,
      Status.NONE,  Status.ZERO,  Status.CROSS,
      Status.ZERO,  Status.CROSS, Status.NONE]],
    [[Status.ZERO,  Status.CROSS, Status.CROSS,
      Status.CROSS, Status.ZERO,  Status.ZERO,
      Status.NONE,  Status.CROSS, Status.ZERO]],
  ])('should have 8 to win with ZERO [%#]', async (cells) => {
    expect(getWinner(cells)).toBe(Status.ZERO);
  });

  it.each([
    [[Status.NONE,  Status.NONE,  Status.NONE,
      Status.NONE,  Status.NONE,  Status.NONE,
      Status.NONE,  Status.NONE,  Status.NONE]],
    [[Status.NONE,  Status.CROSS, Status.CROSS,
      Status.ZERO,  Status.ZERO,  Status.NONE,
      Status.NONE,  Status.NONE,  Status.NONE]],
    [[Status.NONE,  Status.CROSS, Status.CROSS,
      Status.ZERO,  Status.ZERO,  Status.NONE,
      Status.NONE,  Status.ZERO,  Status.CROSS]],
  ])('should return NONE in other cases [%#]', async (cells) => {
    expect(getWinner(cells)).toBe(Status.NONE);
  });
});
