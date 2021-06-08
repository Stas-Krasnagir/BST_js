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

  print_tree(root = this.root): string {
    let queue = [];
    let res: string = "";
    queue.push(root);
    while ((queue.length) > 0) {
      let node: TreeNode = queue.shift()
      res += (" " + String(node.value))
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return res
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

  minNode(node: TreeNode): TreeNode {
    if (node.left === null)
      return node;
    else
      return this.minNode(node.left);
  }

  remove(data: number): void {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node: TreeNode, key: number): TreeNode {
    if (node === null)
      return null;
    else if (key < node.value) {
      node.left = this.removeNode(node.left, key);
      return node;
    }
    else if (key > node.value) {
      node.right = this.removeNode(node.right, key);
      return node;
    }
    else if (key === node.value) {
      if (node.left === null && node.right === null) {
        node = null;
        console.log("Нет потомков, удалено")
        return node;
      }

      if (node.left === null) {
        node = node.right;
        console.log("Правый потомок, node = node.left")
        return node;
      }
      else if (node.right === null) {
        node = node.left;
        console.log("Левый потомок, node = node.left")
        return node;
      }

      const temp = this.minNode(node.right);
      node.value = temp.value;
      node.right = this.removeNode(node.right, temp.value);
      return node;
    }
  }

}

export { BinaryTree, TreeNode }
