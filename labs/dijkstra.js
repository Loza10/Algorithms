function dijkstra(graph, source) {
  if (graph.length < 1 || graph[0].length < 1) {
    console.log("Graph is empty!");
    return;
  }
  var distance = [];
  for (var i = 0; i < graph.length; i++) {
    if (i != source) {
      distance[i] = Infinity;
    } else {
      distance[source] = 0;
    }
  }

  for (var i = 0; i < graph.length; i++) {
    if (graph[source][i] != 0) {
      distance[i] = graph[source][i];
    }
  }
  
  for (var i = 0; i < graph.length; i++) {
    for (var x = 0; x < graph.length; x++) {
      var temp = distance[i] + graph[i][x];
      if (temp < distance[x] && graph[i][x] != 0) {
        distance[x] = temp;
      } 
    }
  }
  for (var i = 0; i < distance.length; i++) {
    console.log("Index: " + i + " : Min Dist: " + distance[i]);
  }
  return;
}

var graph1 = [[0, 1, 3, 0],
            [0, 0, 1, 3],
            [0, 0, 0, 6],
            [0, 0, 0, 0]];
var graph2 = [[0, 0, 0, 6],
            [9, 0, 3, 0],
            [2, 0, 0, 3],
            [0, 0, 0, 0]];
var graph3 = [[0,0,0],
            [3,0,0],
            [5,1,0]];
var graph4 = [[]];


dijkstra(graph1, 0);
console.log("------")
dijkstra(graph2, 1);
console.log("------")
dijkstra(graph3, 2);
console.log("------")
dijkstra(graph4, 2);