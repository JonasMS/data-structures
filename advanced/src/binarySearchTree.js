var BinarySearchTree = function(value) {
  var node = Object.create(binaryTreeMethods);

  node.value = value;
  node.left = null;
  node.right = null;
  node.height = null;

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
};

binaryTreeMethods.breadthFirstLog = function() {
    console.log(this.value);

    var children = [this.left, this.right];
    var nodes;

    while( children.length ) {
      //log every node value of the current breadth
      _.each(children, function(node) {
        console.log(node.value);
      });

      nodes = children.slice();
      children = [];

      //pass each child node into children array
      _.each(nodes, function(node) {
          if ( !!node.left ) {
            children.push(node.left);
          }
          if ( !!node.right ) {
            children.push(node.right);
          }
      });
    }
  };


/*
 * Complexity: What is the time complexity of the above functions?
 */
