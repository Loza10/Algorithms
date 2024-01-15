testMatrix();

function testMatrix() {
  list1 = [[2], [1], [1,2]];
  list2 = [[1,3], [2,0], [0,3], [2,3]];
  list3 = [];
  matrix1 = [[0,0,1],[0,1,1],[1,1,1]];
  matrix2 = [[0,1,1,1],[1,0,1,0],[1,1,0,1],[1,0,1,1]];
  if(JSON.stringify(matrix1) == JSON.stringify(convertToAdjMatrix(list1))) {
    console.log("List 1: Passed");
  } else {
    console.log("List 1: Failed");
  }
  if(JSON.stringify(matrix2) == JSON.stringify(convertToAdjMatrix(list2))) {
    console.log("List 2: Passed");
  } else {
    console.log("List 2: Failed");
  }
  convertToAdjMatrix(list3);
}


function convertToAdjMatrix(adjList) {
  if (adjList.length < 1) {
    console.log("List is empty!");
    return;
  }
  var graph = [...Array(adjList.length)].map(e => Array(adjList.length).fill(0));
  for (var i = 0; i < adjList.length; i++) {
    for (var j = 0; j < adjList[i].length; j++) {
      graph[i][adjList[i][j]] = 1;
      graph[adjList[i][j]][i] = 1;
    }
  }
  return graph;
}
