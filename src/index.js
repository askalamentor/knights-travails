import Cell from './node';

let queue = [];

const KNIGHTMOVESET = [
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2],
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
];

function knightMove(pos) {
  return KNIGHTMOVESET.map((move) => [
    pos[0] + move[0],
    pos[1] + move[1],
  ]).filter((move) => move[0] >= 0 && move[1] >= 0);
}

const arr = knightMove([1, 4]);
console.log(arr);
