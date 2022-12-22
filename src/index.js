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

function findKnightPath(initPos, endPos) {
  // if user sets wrong inputs
  if ((initPos && endPos).length != 2) return;

  const paths = [];
  const queue = [];
  const visited = new Set();

  // queue = ([current, [path]])
  queue.push([initPos, [initPos]]);

  while (queue.length > 0) {
    // dequeue
    let [current, path] = queue.shift();
    // add unique cell to Set
    visited.add(current);

    // if the current position that we're searching
    if (current.join() === endPos.join()) {
      // shortest path to the end position
      paths.push(path);
      // console elements
      console.log(`Fastest Routes from ${initPos} to ${endPos}`);
      paths.forEach((element) => console.log(element));
      return;
    }

    // if we have not yet found the end position,
    // make knight moves
    const moves = knightMove(current);

    // if new moves are unique (are not in Set),
    // add them to the queue
    for (let pos of moves) {
      if (!visited.has(pos)) {
        queue.push([pos, [...path, pos]]);
      }
    }
  }
}

function knightMove(pos) {
  return KNIGHTMOVESET.map((move) => [
    pos[0] + move[0],
    pos[1] + move[1],
  ]).filter((move) => move[0] >= 0 && move[1] >= 0);
}

const arr = knightMove([1, 4]);
console.log(arr);
findKnightPath([2, 1], [6, 4]);
