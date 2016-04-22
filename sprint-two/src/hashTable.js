var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._tupleCount = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // debugger;

  var bucket = this._storage.get(index) || [];
  //IF [k, v] already exists
    //(bucket[i])[1] = v
  var pairIdx = this.getPairIdx(k, index);
  if ( !!pairIdx || pairIdx === 0) {
    // debugger;
    (bucket[pairIdx])[1] = v;
  } else {
    bucket.push([k, v]);
    this._storage.set(index, bucket);
    this._tupleCount++;
    this.resize();
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  // debugger;

  if ( bucket === undefined || !bucket.length ) { return undefined; }

  var pairIdx = this.getPairIdx(k, index);
  return (bucket[pairIdx])[1];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  // debugger;

  //starting at index of pair(k), copy all values to left
  //pop bucket
  var pairIdx = this.getPairIdx(k, index);

  for (var i = pairIdx; i < bucket.length - 1; i++) {
    bucket[i] = bucket[i + 1];
  }
  bucket.pop();
  this._tupleCount--;
  this.resize();
};

HashTable.prototype.getPairIdx = function(k, index) {
  // var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  // debugger;

  if ( !!bucket ) {
    for (var i = 0; i < bucket.length; i++) {
      if ( (bucket[i])[0] === k ) {
        return i;
      }
    }
  }
  return false; 

};

HashTable.prototype.resize = function() {
  var limit = this._limit;
  if ( this._tupleCount > this._limit * .75) { 
    this._limit *= 2;
    this.rehash(limit);
  } else if ( this._tupleCount < this._limit * .25) { 
    this._limit /= 2;
    this.rehash(limit);
  }
};

HashTable.prototype.rehash = function(limit) {
  //iterate over each tuple
  var bucket, temp;
  for (var i = 0; i < limit; i++) {
    bucket = this._storage.get(i);
    if ( bucket !== undefined && bucket.length ) {
      for (var j = 0; j < bucket.length; j++) { 
        //placeholder for tuple
        temp = bucket[j];
        //remove tuple from original bucket
        this._tupleCount++;
        this.remove((bucket[j])[0]);
        //use placeholder to insert tuple into new bucket
        this._tupleCount--;
        this.insert(temp[0], temp[1]);
      }
    }
  }
    //this.insert(tuple);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


