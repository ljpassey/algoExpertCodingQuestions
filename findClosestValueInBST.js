function findClosestValueInBst(tree, target) {
  // Write your code here.
    function findClosestValueInBstHelper(tree, target, closest) {
        if (tree === null) {
            return closest;
        }
        if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
            closest = tree.value;
        }
        if (target < tree.value) {
            return findClosestValueInBstHelper(tree.left, target, closest);
        } else if (target > tree.value) {
            return findClosestValueInBstHelper(tree.right, target, closest);
        } else {
            return closest;
        }
    }
    return findClosestValueInBstHelper(tree, target, tree.value);
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
