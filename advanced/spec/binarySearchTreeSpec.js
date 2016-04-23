describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.traverse).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "traverse"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.traverse(func);
    expect(array).to.eql([5, 2, 3]);
  });

  it('should log the nodes contained in the tree using a breadth-first approach use "breadthFirstLog"', function() {

    var array = [];

    binarySearchTree.insert(2);
    binarySearchTree.insert(8);
    binarySearchTree.insert(4);
    binarySearchTree.insert(1);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(9);
    binarySearchTree.breadthFirstLog(array).to.equal([5, 2, 8, 1, 3, 7, 9, 4]);
  });

});