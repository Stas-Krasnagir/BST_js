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
    BinaryTree.prototype.print_tree = function (root) {
        if (root === void 0) { root = this.root; }
        var queue = [];
        var res = "";
        queue.push(root);
        while ((queue.length) > 0) {
            var node = queue.shift();
            res += (" " + String(node.value));
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        return res;
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
    BinaryTree.prototype.minNode = function (node) {
        if (node.left === null)
            return node;
        else
            return this.minNode(node.left);
    };
    BinaryTree.prototype.remove = function (data) {
        this.root = this.removeNode(this.root, data);
    };
    BinaryTree.prototype.removeNode = function (node, key) {
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
                console.log("Нет потомков, удалено");
                return node;
            }
            if (node.left === null) {
                node = node.right;
                console.log("Правый потомок, node = node.left");
                return node;
            }
            else if (node.right === null) {
                node = node.left;
                console.log("Левый потомок, node = node.left");
                return node;
            }
            var temp = this.minNode(node.right);
            node.value = temp.value;
            node.right = this.removeNode(node.right, temp.value);
            return node;
        }
    };
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
