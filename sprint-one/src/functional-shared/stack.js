var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //create methods: size, pop, and push within Stack object

  var instance = {};

  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {
  length: 0,
  storage: {}
};

stackMethods.push = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

stackMethods.pop = function() {
  if ( this.length > 0 ) {
    this.length--;
    return this.storage[this.length];
  }
};

stackMethods.size = function() {
  return this.length;
};

