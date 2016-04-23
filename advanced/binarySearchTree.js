
var tree = BinarySearchTree(20);
var num;

for (var i = 0; i < 100; i++) {
  num = Math.floor(Math.random() * (i + 1));
  BinarySearchTree.insert(num);
}