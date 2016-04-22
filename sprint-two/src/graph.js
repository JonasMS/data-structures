

// ------------------------
// Instantiate a new graph
var Graph = function() {
  // var storage = {};

  // // storage.value = null;
  // // storage.nodes = [];

  // return storage;
};

Graph.prototype.storage = [];

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(val) {
  this.storage.push(new Node(val));
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(target) {
  return this.searchForNode(this.storage, target) > -1;
};

// ------------------------
// Removes a target from the graph.
Graph.prototype.removeNode = function(target) {
  //search for node object w/ value that === target
  // //delete object
  // for (var i = 0; i < this.storage.length; i++) {
  //   // if (this.storage[i] === undefined){ debugger;}
  //   if (this.storage[i].value === target) {
  //     this.storage = this.deleteNode(this.storage, i);
  //     break;
  //   }
  // }

  var index = this.searchForNode(this.storage, target);
  if ( index > -1 ) {
    this.storage = this.deleteNode(this.storage, index);
  } 
};

Graph.prototype.deleteNode = function(arr, idx) {
  var copy = arr.slice();
  for (var i = idx; i < copy.length - 1; i++) {
    copy[i] = copy[i + 1];

  }
  copy.pop();
  return copy;
};

Graph.prototype.searchForNode = function(arr, target) {
  for (var i = 0; i < arr.length; i++) {
    if ( arr[i].value === target ) {
      return i;
    }
  }

  return -1;
};

// [1, 3, 4, 5, 5]
    

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //check if fromNode.nodes (fromNode = Node.value) contains toNode
  //check if toNode.nodes contains fromNode
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

var Node = function(value) {
  var node = {
    value: value,
    nodes: []
  };

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


