// create board cells as a node
export default class Cell {
  constructor(xPos = null, yPos = null, predecessor = null) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.predecessor = predecessor;
  }
}
