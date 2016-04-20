var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  var start = -1;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[length] = value;
    length++;
  };

  someInstance.dequeue = function() {
    length--;
    // remove();
    return remove();
  };

  someInstance.size = function() {
    return length > 0 ? length : 0;
  };

  var remove = function(){
    var removed = storage[0];

    for(var i = 0; i < length; i++){
      if ( storage[i+1] !== undefined ) {
        storage[i] = storage[i+1];
      }
    }
    return removed;
  };

  return someInstance;
};


