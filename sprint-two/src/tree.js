var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = [];  



  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(new Tree(value));
};

treeMethods.contains = function(target) {

  var recurse = function(parent) {  
    if (parent.value === target) {
      return true;
    } 
    for (var i = 0; i < parent.children.length; i++) {
      if ( recurse(parent.children[i]) ) {
        return true;
      }
    }
    return false;
  };

  return recurse(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild: constant
 contains: linear ?
 */
