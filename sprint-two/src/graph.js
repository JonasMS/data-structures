

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  this.storage[value] = {
                          edges: {}
                        }
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(target) {
  return this['storage'][target] === undefined ? false : true;
};

// ------------------------
// Removes a target from the graph.
Graph.prototype.removeNode = function(target) {
  delete this['storage'][target];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(node1, node2) {
  return ( !!this['storage'][node1]['edges'][node2] && !!this['storage'][node2]['edges'][node1]);
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(node1, node2) {
  //check if nodes exist in graph
  if ( this.contains(node1) && this.contains(node2) ) {
    this['storage'][node1]['edges'][node2] = this['storage'][node2];
    this['storage'][node2]['edges'][node1] = this['storage'][node1];
  }
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(node1, node2) {
  delete this['storage'][node1]['edges'][node2];
  delete this['storage'][node2]['edges'][node1];
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb, node) {
  for (var key in this.storage) {
    cb(key, node);
  }
}
/*
 * Complexity: What is the time complexity of the above functions?
 */


