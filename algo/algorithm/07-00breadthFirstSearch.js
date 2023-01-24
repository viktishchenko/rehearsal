// Поиск в ширину в графе (Breadth First Search)

const graph = {};
graph.a = ["b", "c"];
graph.b = ["f"];
graph.c = ["d", "e"];
graph.d = ["f"];
graph.e = ["f"];
graph.f = ["g"];

let count = 0;

function breadthSearch(graph, start, end) {
  let queue = [];
  queue.push(start);
  while (queue.length > 0) {
    count++;
    const current = queue.shift();
    // Если по текущей вершине в графе ничего не находится, то присваиваем этой вершине пустой массив
    if (!graph[current]) {
      graph[current] = [];
    }
    if (graph[current].includes(end)) {
      return true;
    } else {
      queue = [...queue, ...graph[current]];
    }
  }
  return false;
}

console.log(breadthSearch(graph, "a", "g")); // true
console.log("count>>", count); // >> 3

// Матрица смежности
// image ./readmeAssets/graff-matrix.png

const matrix = [
  [0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];
