var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.storage = {};
};

Queue.prototype.size = function() {
  return this.length;
};

Queue.prototype.enqueue = function(val) {
  (this.storage)[this.length] = val;
    this.length++;
};

Queue.prototype.dequeue = function() {
  if ( this.length > 0 ) {
      this.length--;
      return this.remove();
    }
};

Queue.prototype.remove = function() {
  var removed = this.storage[0];
    for (var i = 0; i < this.length; i++) {
      if ( (this.storage)[i + 1] !== undefined ) {
        (this.storage)[i] = (this.storage)[i + 1];
      }
    }

    return removed;
};


