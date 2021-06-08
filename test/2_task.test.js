const { BinaryTree, TreeNode } = require('../task/2_task.js');

test('Create Node', () => {
  const Node = new TreeNode(5);
  Node.left = 2;
  Node.right = 6;
  expect(Node.value).toBe(5);
  expect(Node.left).toBe(2);
  expect(Node.right).toBe(6);
});

test('Create Tree', () => {
  const Tree = new BinaryTree();
  expect(Tree.root).toBe(null);
});

test('Add value to Tree', () => {
  const Tree = new BinaryTree();
  Tree.insert(5);
  Tree.insert(2);
  Tree.insert(6);
  expect(Tree.root.value).toBe(5);
  expect(Tree.root.left.value).toBe(2);
  expect(Tree.root.right.value).toBe(6);
});

test('Search in tree', () => {
  const Tree = new BinaryTree();
  Tree.insert(5);
  Tree.insert(2);
  Tree.insert(6);
  expect(Tree.search(5)).toBe(true);
  expect(Tree.search(2)).toBe(true);
  expect(Tree.search(6)).toBe(true);
  expect(Tree.search(10)).toBe(false);
});

test('Search in tree', () => {
  const Tree = new BinaryTree();
  Tree.insert(5);
  Tree.insert(2);
  Tree.insert(6);
  Tree.insert(3);
  Tree.insert(1);
  Tree.insert(10);
  Tree.insert(4);
  Tree.insert(15);
  Tree.remove(5)
  Tree.remove(1)
  Tree.remove(10)
  expect(Tree.root.value).toBe(6);
  expect(Tree.root.left.value).toBe(2);
  expect(Tree.root.right.value).toBe(15);
});

test('Print tree', () => {
  const Tree = new BinaryTree();
  Tree.insert(5);
  Tree.insert(2);
  Tree.insert(6);
  Tree.insert(3);
  Tree.insert(1);
  let tmp = Tree.print_tree()
  console.log(tmp)
  expect(tmp).toBe(" 5 2 6 1 3");
});
