var BinarySearchTree = function(value) {
  var node = Object.create(binaryTreeMethods);

  node.value = value;
  node.left = null;
  node.right = null;


  return node;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function (newVal) {
  if ( newVal > this.value ) {
    !this.right ? this.right = BinarySearchTree(newVal) : this.right.insert(newVal);
  } else if ( newVal < this.value ) {
    !this.left ? this.left = BinarySearchTree(newVal) : this.left.insert(newVal);
  }
};

binaryTreeMethods.contains = function (target) {
  //
  if ( target === this.value ) {
    return true;
  }

  if ( target > this.value ) {
    return !this.right? false : this.right.contains(target);
  } else if ( target < this.value ) {
    return !this.left? false : this.left.contains(target);
  }
};

binaryTreeMethods.depthFirstLog = function (func) {
  //apply func to this.value
  func(this.value);
  //traverse children
  if ( !!this.left ) {
    this.left.depthFirstLog(func);
  }

  if ( !!this.right ) {
    this.right.depthFirstLog(func);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
