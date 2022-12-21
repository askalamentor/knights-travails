// create board cells as a node
export default class Node {
  constructor(x = null, y = null, left = null, right = null) {
    this.x = x;
    this.y = y;
    this.left = left;
    this.right = right;
  }
}
