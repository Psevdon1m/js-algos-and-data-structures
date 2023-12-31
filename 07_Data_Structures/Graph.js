class Graph {
  constructor() {
    this.adjecencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjecencyList[vertex]) this.adjecencyList[vertex] = [];
  }
  removeVertex(vertex) {
    let connections = [...this.adjecencyList[vertex]];
    for (let i = 0; i < connections.length; i++) {
      this.removeEdge(vertex, connections[i]);
    }
    delete this.adjecencyList[vertex];
  }
  addEdge(vertex1, vertex2) {
    this.adjecencyList[vertex1]?.length
      ? this.adjecencyList[vertex1].push(vertex2)
      : (this.adjecencyList[vertex1] = [vertex2]);
    this.adjecencyList[vertex2]?.length
      ? this.adjecencyList[vertex2].push(vertex1)
      : (this.adjecencyList[vertex2] = [vertex1]);
  }
  removeEdge(vertex1, vertex2) {
    this.adjecencyList[vertex1] = this.adjecencyList[vertex1]?.filter(
      (el) => el !== vertex2
    );
    this.adjecencyList[vertex2] = this.adjecencyList[vertex2]?.filter(
      (el) => el !== vertex1
    );
  }
  dfsRecursive(start) {
    let visitedVertexes = {};
    let result = [];
    const checkVertex = (vertex) => {
      visitedVertexes[vertex] = true;
      result.push(vertex);
      let connections = this.adjecencyList[vertex];
      for (let vertex of connections) {
        if (!visitedVertexes[vertex]) checkVertex(vertex); // if works as a base case
      }
    };
    checkVertex(start);
    return result;
  }
  dfsRecursiveSecondApproach(start) {
    let result = [];
    let visited = {};
    let adjecencyList = this.adjecencyList;
    (function dfs(vertex) {
      if (!vertex) return; // this base is either wrong or redundund
      visited[vertex] = true;
      result.push(vertex);
      adjecencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);
    return result;
  }
  dfsIteretive(start) {
    let stack = [start];
    let result = [];
    let visited = {};
    let vertex;
    while (stack.length) {
      vertex = stack.pop();
      if (!visited[vertex]) {
        visited[vertex] = true;
        result.push(vertex);
        stack.push(...this.adjecencyList[vertex]);
      }
    }
    return result;
  }
  dfsIteretiveSecondApproach(start) {
    let stack = [start];
    let result = [];
    let visited = {};
    let vertex;
    visited[start] = true;
    while (stack.length) {
      vertex = stack.pop();
      result.push(vertex);
      this.adjecencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
  bfsIteretive(start) {
    let vertex;
    let queue = [start];
    let result = [];
    let visited = {};
    while (queue.length) {
      console.log(queue);
      vertex = queue.shift();

      if (!visited[vertex]) {
        visited[vertex] = true;
        result.push(vertex);
        queue.push(...this.adjecencyList[vertex]);
      }
    }
    return result;
  }
  bfsIteretiveSecondApproach(start) {
    let vertex;
    let queue = [start];
    let result = [];
    let visited = {};
    visited[start] = true;
    while (queue.length) {
      console.log(queue);
      vertex = queue.shift();
      this.adjecencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
      if (!visited[vertex]) {
        visited[vertex] = true;
        result.push(vertex);
        queue.push(...this.adjecencyList[vertex]);
      }
    }
    return result;
  }
}
let g = new Graph();
g.addEdge("kyiv", "zhytomyr");
g.addEdge("kyiv", "poltava");
g.addEdge("poltava", "dnipro");
g.addEdge("dnipro", "donetsk");
g.addEdge("zhytomyr", "vinnytsia");
g.addEdge("zhytomyr", "rivne");
// console.log(g.adjecencyList);
// console.log(g.dfsRecursive("kyiv"));

let ag = new Graph();
ag.addVertex("A");
ag.addVertex("B");
ag.addVertex("C");
ag.addVertex("D");
ag.addVertex("E");
ag.addVertex("F");

ag.addEdge("A", "B");
ag.addEdge("A", "C");
ag.addEdge("B", "D");
ag.addEdge("C", "E");
ag.addEdge("D", "E");
ag.addEdge("D", "F");
ag.addEdge("E", "F");
// console.log(ag.adjecencyList);
console.log(ag.dfsRecursive("A"));
// console.log(ag.dfsRecursiveSecondApproach("A"));

const time1 = performance.now();

console.log(ag.dfsIteretive("A"));
const time2 = performance.now();
console.log(`Time elapsed: ${(time2 - time1) / 1000} seconds.`);
const time3 = performance.now();

console.log(ag.dfsIteretiveSecondApproach("A"));
const time4 = performance.now();
console.log(`Time elapsed: ${(time4 - time3) / 1000} seconds.`);

console.log(ag.bfsIteretiveSecondApproach("A"));
