var LinkedList = function() {

  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
   //create a new instance of node
    var node = new Node(value);

    // debugger;

    if ( !list.tail ) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    if (list.head) {
      var head = list.head.value;
      list.head = list.head.next;
    }
    return head;
  };

  list.contains = function(target) {
    var node = list.head;

    while( !!node ) {
      if ( node.value === target ) {
        return true;
      }

      node = node.next;
    }

    return false;

    // var recurse = function(node) {

    //   if (node.value === target) {
    //     return true;
    //   } else if (!!node.next) {
    //     return recurse(node.next);
    //   } else {
    //     return false;
    //   }
    // };

    // return recurse(list.head);

  };


  return list;


};


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};



/*
 * Complexity: What is the time complexity of the above functions?
 addTail: constant
 removeHead: constant
 contains: linear
 */