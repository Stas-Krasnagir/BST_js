var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.height = 1;
        this.value = value;
        this.left = null;
        this.right = null;
    }
    ;
    return TreeNode;
}());
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
    // print(root = this.root) {
    //   if (!root) {
    //     return true;
    //   };
    //   console.log(root.value);
    //   this.print(root.left);
    //   this.print(root.right);
    // };
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
    BinaryTree.prototype.balancing = function (node) {
        if (node.right) {
            node.right = this.balancing(node.right);
        }
        ;
        if (node.left) {
            node.left = this.balancing(node.left);
        }
        ;
        return this.balancing(node);
    };
    BinaryTree.prototype.balance = function (node) {
        this.fix_height(node);
        if (this.b_factor(node) === 2) {
            if (this.b_factor(node.right) < 0) {
                node.right = this.rotate_right(node.right);
            }
            return this.rotate_left(node);
        }
        ;
        if (this.b_factor(node) == -2) {
            if (this.b_factor(node.left) > 0) {
                node.left = this.rotate_left(node.left);
            }
            ;
            return this.rotate_right(node);
        }
        ;
        return node;
    };
    ;
    BinaryTree.prototype.fix_height = function (current) {
        var hl = this.height(current.left);
        var hr = this.height(current.right);
        if (hl > hr) {
            current.height = hl + 1;
        }
        else {
            current.height = hr + 1;
        }
    };
    ;
    BinaryTree.prototype.height = function (node) {
        if (node === null) {
            return 0;
        }
        else {
            var l_height = this.height(node.left);
            var r_height = this.height(node.right);
            if (l_height > r_height) {
                return l_height + 1;
            }
            else {
                return r_height + 1;
            }
            ;
        }
        ;
    };
    ;
    BinaryTree.prototype.b_factor = function (node) {
        return this.height(node.right) - this.height(node.left);
    };
    ;
    BinaryTree.prototype.rotate_right = function (parent) {
        var current = parent.left;
        parent.left = current.right;
        current.right = parent;
        this.fix_height(parent);
        this.fix_height(current);
        return current;
    };
    ;
    BinaryTree.prototype.rotate_left = function (parent) {
        var current = parent.right;
        parent.right = current.left;
        current.left = parent;
        this.fix_height(parent);
        this.fix_height(current);
        return current;
    };
    ;
    return BinaryTree;
}());
var tree = new BinaryTree();
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
console.log(tree.height(this.root));
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
