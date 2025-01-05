const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(data) {
    const currentObj = arguments[1] || this.head;
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    if (data < currentObj.data) {
      if (currentObj.left) this.add(data, currentObj.left);
      else currentObj.left = node;
      return;
    }
    if (data > currentObj.data) {
      if (currentObj.right) this.add(data, currentObj.right);
      else currentObj.right = node;
      return;
    }
  }

  has(data) {
    return !!this.find(data);
  }

  find(data) {
    const currentObj = arguments[1] || this.head;
    if (currentObj?.data === data) {
      return currentObj;
    }
    if (data < currentObj?.data) {
      return currentObj.left ? this.find(data, currentObj?.left) : null;
    } else if (data > currentObj?.data) {
      return currentObj?.right ? this.find(data, currentObj?.right) : null;
    }
  }

  remove(data) {
    const currentObj = arguments[1] || this.head;
    if (!currentObj) return null;
    if (data < currentObj.data) {
      currentObj.left = this.remove(data, currentObj.left);
    } else if (data > currentObj.data) {
      currentObj.right = this.remove(data, currentObj.right);
    } else {
      if (!currentObj.left && !currentObj.right) return null;
      if (!currentObj.left) return currentObj.right;
      if (!currentObj.right) return currentObj.left;

      currentObj.data = this.min(currentObj.right);
      currentObj.right = this.remove(currentObj.data, currentObj.right);
    }
    return currentObj;
  }

  min() {
    const val = arguments[0] === undefined ? this.head : arguments[0];
    if (!val) return null;
    else return val.left === null ? val.data : this.min(val.left);
  }

  max() {
    const val = arguments[0] === undefined ? this.head : arguments[0];
    if (!val) return null;
    else return val.right === null ? val.data : this.max(val.right);
  }
}
module.exports = {
  BinarySearchTree,
};
