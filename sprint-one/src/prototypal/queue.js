var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);

  instance.length = 0;
  instance.storage = {};

  return instance
};

var queueMethods = {
  size: function() {
    return this.length;
  },
  enqueue: function(val) {
    (this.storage)[this.length] = val;
    this.length++;
  },
  dequeue: function() {
    if ( this.length > 0 ) {
      this.length--;
      return this.remove();
    }
  },
  remove: function() {
    var removed = this.storage[0];
    for (var i = 0; i < this.length; i++) {
      if ( (this.storage)[i + 1] !== undefined ) {
        (this.storage)[i] = (this.storage)[i + 1];
      }
    }

    return removed;
  }

};

