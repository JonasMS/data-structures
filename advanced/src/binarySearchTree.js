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

binaryTreeMethods.breadthFirstLog = function() {


  //while the children array has elements

  //nodes array = children array
  //reset children array

  //for every node in nodes array
    //IF there is a left node
      //get left node value
      //get left node's children
    //IF there is a right node
      //get right node value
      //get right node's children


    console.log(this.value);

    var children = [this.left, this.right];
    var nodes;

    while( children.length ) {
      for (var j = 0; j < children.length; j++) {
        console.log(children[j].value);
      }

      nodes = children.slice();
      children = [];

      //iterate over each node
      for (var i = 0; i < nodes.length; i++) {
        if ( !!nodes[i].left ) {
          children.push((nodes[i]).left);
        }
        if ( !!nodes[i].right ) {
          children.push((nodes[i]).right);
        }
      }
    }




  //traverse array
    //is current node's height === the current breadth's height?
      //True:
        //get node's value
        //go to neighbor
      //False:
        //current node's height > the current breadth's height?
          //go back up
        //current node's height < the current breadth's height?
          //keep going, recursion


    //get this.left.value
    //get this.right.value

    //dive into this.left
    //dive into this.right

    //use node.height?

    //on each node push the value into arr


};

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
