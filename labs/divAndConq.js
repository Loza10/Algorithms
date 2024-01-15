var sum = 0;
var total = 0;
var myList = [7,2,9,3,4,1,2,9,6];
testFunc(myList);

function testFunc(a) {
  var test = 0;
  for (var i = 0; i < a.length; i++) {
    test += a[i];
  }
  divideAndConquerSum(a);
  if (sum == test) {
    console.log("Correct!");
  } else {
    console.log("Incorrect!");
  }
  console.log("Sum of Array: " + sum);
}

function divideAndConquerSum(a) {
  sum = 0;
  sumNums(a, 0, a.length - 1);
}
function sumNums(a, lo, hi) {
  if (a.length == 1) {
    sum = a[0];
  } else if (a.length == 0) {
    return;
  }
  if (lo >= hi) {
    return;
  }
  split = Math.floor(hi / 3);
  split2 = hi - split;
  sumNums(a, lo, split - 1);
  sumNums(a, split, split2 - 1);
  sumNums(a, split2, hi - 1);
  mergeSum(a, lo, hi, total);
}
function mergeSum(a, lo, hi, total) {
  for (var i = lo; i <= hi; i++) {
    total += a[i];
  }
  sum = total;
}
