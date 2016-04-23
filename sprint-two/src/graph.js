

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.storage = [];
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(val) {
  var newNode = new ANode;
  newNode.value = val;
  this.storage.push(newNode);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(target) {
  return this.searchForNode(this.storage, target) > -1;
};

// ------------------------
// Removes a target from the graph.
Graph.prototype.removeNode = function(target) {
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

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(startVal, endVal) {
  //nodeOne/Two is the object in graph's storage that has value startVal/endVal
    //nodeOne/Two are the two nodes that we are looking at to check for relationship/edges
  var node1 = this.storage[this.searchForNode(this.storage, startVal)];
  var node2 = this.storage[this.searchForNode(this.storage, endVal)];

  return ( node1.contains(endVal) && node2.contains(startVal) );


  // return node2 in node1.nodes || node1 in node2.nodes;

};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(startVal, endVal) {
  //find the nodes assoc. with start/end val
    //push node1.nodes.push(node2)

  var node1 = this.storage[this.searchForNode(this.storage, startVal)];
  var node2 = this.storage[this.searchForNode(this.storage, endVal)];

  node1.nodes.push(node2);
  node2.nodes.push(node1);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(startVal, endVal) {
  //go into node1 array,
    //find node2
    //move everything over one
    //pop
  var index = this.searchForNode(this.storage, startVal);
  var node1 = this.storage[index]; //first node obj
  if ( node1.contains(endVal) ) {
    //remove endVal from node1.nodes
    node1.nodes = node1.deleteNode(node1.nodes, index);
  }

};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.storage, function(node) {
    cb(node.value);
  });
};



var ANode = function() {

  this.value = null;
  this.nodes = [];

};

// ANode.prototype.value = null;

// ANode.prototype.nodes = [];

ANode.prototype.contains = function(target) {
  return this.searchForNode(this.nodes, target) > -1;
};

ANode.prototype.searchForNode = function(arr, target) {
  for (var i = 0; i < arr.length; i++) {
    if ( arr[i].value === target ) {
      return i;
    }
  }

  return -1;
};

ANode.prototype.deleteNode = function(arr, idx) {
  var copy = arr.slice();
  for (var i = idx; i < copy.length - 1; i++) {
    copy[i] = copy[i + 1];

  }
  copy.pop();
  return copy;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


