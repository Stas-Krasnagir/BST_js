"use strict";
exports.__esModule = true;
exports.TreeNode = exports.BinaryTree = void 0;
var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    ;
    return TreeNode;
}());
exports.TreeNode = TreeNode;
;
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.root = null;
    }
    ;
    BinaryTree.prototype.insert = function (data) {
        var newNode = new TreeNode(data);
        if (this.root === null)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode);
    };
    BinaryTree.prototype.insertNode = function (node, newNode) {
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
            console.log("Элемент уже существует");
        }
    };
    BinaryTree.prototype.search = function (data) {
        return this.searchNode(this.root, data);
    };
    BinaryTree.prototype.searchNode = function (node, data) {
        if (node === null) {
            console.log(false);
            return false;
        }
        else if (data < node.value) {
            return this.searchNode(node.left, data);
        }
        else if (data > node.value) {
            return this.searchNode(node.right, data);
        }
        else {
            console.log(true);
            return true;
        }
    };
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
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
