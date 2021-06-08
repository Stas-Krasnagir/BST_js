const { BinaryTree, TreeNode } = require('../task/1_task.js');

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
  console.log(Tree.root.left.value);
  expect(Tree.root.value).toBe(5);
  expect(Tree.root.left.value).toBe(2);
  expect(Tree.root.right.value).toBe(6);
})
