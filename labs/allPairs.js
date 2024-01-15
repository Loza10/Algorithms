function allPairsShortestPaths(graph) {
  var dist = Array(graph.length).fill().map(() => Array(graph.length).fill(Infinity));

  for (var i = 0; i < graph.length; i++) {
    dist[i][i] = 0;
  }
  
  for (var i = 0; i < graph.length; i++) {
    for (var x = 0; x < graph.length; x++) {
      if (graph[i][x] > 0) {
        dist[i][x] = graph[i][x];
      }
    }
  }
  
  for (var k = 0; k < graph.length; k++) {
    for (var i = 0; i < graph.length; i++) {
      for (var j = 0; j < graph.length; j++) {
        if (dist[i][j] > (dist[i][k] + dist[k][j])) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }
  console.log(dist);
}

var graph1 = [[0, 1, 3, 0],
            [0, 0, 1, 3],
            [0, 0, 0, 6],
            [0, 0, 0, 0]];
var graph2 = [[0, 0, 0, 2],
            [0, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 3, 1, 0]];
var graph3 = [[]];

allPairsShortestPaths(graph1);
allPairsShortestPaths(graph2);
allPairsShortestPaths(graph3);