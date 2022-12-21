import Node from './node';

const cells = [];

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    const node = new Node([i, j]);
    cells.push(node);
  }
}

console.log(cells);
