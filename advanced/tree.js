
var tree = BinarySearchTree(20);
var valRecord = [];
var containsRecord = [];
var num;

for (var i = 0; i < 10000; i++) {
  num = Math.floor(Math.random() * (i + 1));
  valRecord.push(num);
  tree.insert(num);
}


for (var j = 0; j < valRecord.length; j++) {
  tree.depthFirstLog(function(value) {
    containsRecord.push(value);
  })
}