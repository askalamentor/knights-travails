import Node from './node';
import Tree from './tree';

const cells = [];

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    cells.push([i, j]);
  }
}

console.log(cells);

const tree = new Tree(cells);
console.log(tree);
tree.prettyPrint(tree.root);
tree.printPathBetweenNodes(tree.root, [0, 1], [5, 2]);
