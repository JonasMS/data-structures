var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // list.tail = new Node(value);

    var newNode = new Node(value);

    if( list.tail ){
      list.tail.next = newNode;
    } else {
      list.head = newNode;
    }
    list.tail = newNode;

  };

  list.removeHead = function() {
    var headValue = list.head.value;
    list.head = list.head.next;
    return headValue;

  };

  list.contains = function(target) {
    // var start = list.head;

    var search = function(node, val) {
      if ( node.value === val ){
        return true;
      } else if (node.next) {
        return search(node.next, val)
      } else {
        return false;
      }
    };
    return search(list.head, target);
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
 */
