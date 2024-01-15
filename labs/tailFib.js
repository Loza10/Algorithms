testFib(9);
testFib(8);
testFib(13);

function testFib(x) {
  var arr = tail_fib(x, 0, 1, []);
  console.log(arr);
  for (var i = 2; i < arr.length; i++) {
    if (arr[i] != arr[i-1] + arr[i-2]) {
      console.log("Something is Wrong.")
      return;
    }
  }
  console.log("Good.")
  return;
}

function tail_fib(x, last, total, mylist) {
  mylist.push(last);
  if ((x < 2) && (x > 1)) {
    mylist.push(total);
  } else if (x == 0) {
    return mylist;
  } else {
    return tail_fib(x - 1, total, total + last, mylist);
  }
}