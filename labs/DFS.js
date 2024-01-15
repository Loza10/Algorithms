testDFS();
function testDFS() {
  myList = [[2], [0], [0,1]];
  myList1 = [[1,2], [3], [4], [1], [2]]
  myList2 = [[1], [3], [0], [4], [2]]
  myList3 = [[1], [2], [0]]
  myList4 = [[]]

  depthFirstSearch(myList, 0, 2);
  if (found != -1) {
    console.log("L1 Found Node: " + found);
    found = -1;
  } else {
    console.log("L1 Couldn't find node.")
  }

  depthFirstSearch(myList1, 0, 4);
  if (found != -1) {
    console.log("L2 Found Node: " + found);
    found = -1;
  } else {
    console.log("L2 Couldn't find node.")
  }

  depthFirstSearch(myList2, 0, 2);
  if (found != -1) {
    console.log("L3 Found Node: " + found);
    found = -1;
  } else {
    console.log("L3 Couldn't find node.")
  }

  depthFirstSearch(myList3, 0, 6);
  if (found != -1) {
    console.log("L4 Found Node: " + found);
    found = -1;
  } else {
    console.log("L4 Couldn't find node.")
  }

  depthFirstSearch(myList4, 0, 10);
  if (found != -1) {
    console.log("L5 Found Node: " + found);
    found = -1;
  } else {
    console.log("L5 Couldn't find node.")
  }
}


function depthFirstSearch(graph, start, node) {
  visited = [];
  var found = -1;
  if (graph.length > 0) {
    for (var i = 0; i < graph.length; i++) {
      visited[i] = false;
    }
    iterateDepth(graph, start, node);
  } else {
    console.log("EMPTY!");
  }
}

function iterateDepth(graph, start, node) {
  if (start == node) {
    found = node;
    return found;
  }
  for (var i = 0; i < graph[start].length; i++) {
    if (visited[graph[start][i]] == false) {
      visited[start] = true;
      iterateDepth(graph, graph[start][i], node);
    }
  }
}
