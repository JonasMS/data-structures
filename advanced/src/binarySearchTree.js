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

binaryTreeMethods.traverse = function (func) {
  //apply func to this.value
  func(this.value);
  //traverse children
  if ( !!this.left ) {
    this.left.traverse(func);
  }

  if ( !!this.right ) {
    this.right.traverse(func);
  }

binaryTreeMethods.breadthFirstLog = function(arr) {

  //traverse array
    //get this.left.value
    //get this.right.value

    //dive into this.left
    //dive into this.right

    //use node.height?

    //on each node push the value into arr

  return arr;

};

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
