// create board cells as a node
export default class Node {
  constructor(data = [], left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
