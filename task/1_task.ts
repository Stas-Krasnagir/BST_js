class TreeNode {
  left?: TreeNode;
  right?: TreeNode;
  value: number;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null
  };
};

class BinaryTree {
  root: TreeNode;
  constructor() {
    this.root = null;
  };

  insert(data: number): void {
    let newNode = new TreeNode(data);
    if (this.root === null)
      this.root = newNode;
    else
      this.insertNode(this.root, newNode);
  }

  insertNode(node: TreeNode, newNode: TreeNode): void {
    if (newNode.value < node.value) {
      if (node.left === null)
        node.left = newNode;
      else
        this.insertNode(node.left, newNode);
    }
    else if (newNode.value > node.value) {
      if (node.right === null)
        node.right = newNode;
      else
        this.insertNode(node.right, newNode);
    }
    else {
      console.log("Элемент уже существует")
    }
  }

  search(data: number) {
    return this.searchNode(this.root, data);
  }

  searchNode(node: TreeNode, data: number) {
    if (node === null) {
      console.log(false);
      return false;
    } else if (data < node.value) {
      return this.searchNode(node.left, data);
    } else if (data > node.value) {
      return this.searchNode(node.right, data);
    } else {
      console.log(true);
      return true;
    }
  }
}

export { BinaryTree, TreeNode }
// module.exports = { TreeNode, BinaryTree };


// const tree = new BinaryTree();

// tree.insert(5);
// tree.insert(2);
// tree.insert(6);
// tree.insert(3);
// tree.insert(1);
// tree.insert(10);
// tree.insert(4);
// tree.insert(15);
// tree.insert(7);
// tree.insert(9);
// tree.insert(14);

// console.log(tree.root)

// tree.search(10);




