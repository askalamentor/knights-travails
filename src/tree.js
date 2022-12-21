export default class Tree {
  constructor(array) {
    // we must remove duplicates and sort array for creating sorted binary search tree
    // -------------------------------------------------------------------------------------------
    // Since we have already created a sorted array, there is no need to use the following function
    // const sortedArray = [...new Set(array)].sort((a, b) => a - b);

    // build sorted binary search tree
    this.root = this.buildTree(array);
  }

  buildTree(array) {
    // base case
    if (array.length === 0) return null;

    // get the middle element of the array and make it root
    let middle = Math.floor(array.length / 2);
    const root = new Node(array[middle]);

    // recursively build left and right subtrees
    root.left = this.buildTree(array.slice(0, middle));
    root.right = this.buildTree(array.slice(middle + 1));

    return root;
  }

  search(root, key) {
    // base cases: root is null or key is present at root
    if (root === null) return 'Key is not available';
    // compare equality of two arrays using join()
    if (root.data.join() === key.join()) return `${root.data} is available`;

    // key is greater than root's key
    if (root.data < key) {
      return this.search(root.right, key);
    }
    // key is smaller than root's key
    else {
      return this.search(root.left, key);
    }
  }
}
