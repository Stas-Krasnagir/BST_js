
class TreeNode {
  left?: TreeNode;
  right?: TreeNode;
  value: number;
  height?: number = 1;

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

  // print(root = this.root) {
  //   if (!root) {
  //     return true;
  //   };
  //   console.log(root.value);

  //   this.print(root.left);
  //   this.print(root.right);
  // };


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
  balancing(node: TreeNode): TreeNode {
    if (node.right) {
      node.right = this.balancing(node.right)
    };
    if (node.left) {
      node.left = this.balancing(node.left)
    };
    return this.balancing(node);
  }

  balance(node: TreeNode): TreeNode {
    this.fix_height(node);
    if (this.b_factor(node) === 2) {
      if (this.b_factor(node.right) < 0) {
        node.right = this.rotate_right(node.right)
      }
      return this.rotate_left(node);
    };
    if (this.b_factor(node) == -2) {
      if (this.b_factor(node.left) > 0) {
        node.left = this.rotate_left(node.left)
      };
      return this.rotate_right(node);
    };
    return node
  };

  fix_height(current: TreeNode) {
    let hl = this.height(current.left);
    let hr = this.height(current.right);
    if (hl > hr) {
      current.height = hl + 1;
    }
    else {
      current.height = hr + 1;
    }
  };

  height(node: TreeNode) {
    if (node === null) {
      return 0
    }
    else {
      let l_height = this.height(node.left);
      let r_height = this.height(node.right);
      if (l_height > r_height) {
        return l_height + 1;
      }
      else {
        return r_height + 1;
      };
    };
  };

  b_factor(node: TreeNode) {
    return this.height(node.right) - this.height(node.left)
  };

  rotate_right(parent: TreeNode): TreeNode {
    let current = parent.left;
    parent.left = current.right;
    current.right = parent;
    this.fix_height(parent);
    this.fix_height(current);
    return current
  };

  rotate_left(parent: TreeNode): TreeNode {
    let current = parent.right;
    parent.right = current.left;
    current.left = parent;
    this.fix_height(parent);
    this.fix_height(current);
    return current
  };
}

const tree = new BinaryTree();

tree.insert(5);
tree.insert(2);
tree.insert(6);
tree.insert(3);
tree.insert(1);
tree.insert(10);
tree.insert(4);
tree.insert(15);
tree.insert(7);
tree.insert(9);
tree.insert(14);

console.log(tree.height(this.root))


// console.log(tree.print_tree())
// tree.print_tree()

// tree.print();
// console.log(tree.root)

// tree.search(10);

// tree.remove(6)
// console.log(tree.root)
// tree.print();

// console.log(JSON.stringify(tree))

// let res = JSON.stringify(tree);
// res.replace(/"(\w+)":/g, "$1:")
// console.log(res)


