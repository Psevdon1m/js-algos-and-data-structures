class WeightedGraph {
  constructor() {
    this.adjecencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjecencyList[vertex]) this.adjecencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjecencyList[vertex1]?.length
      ? this.adjecencyList[vertex1].push({ node: vertex2, weight })
      : (this.adjecencyList[vertex1] = [{ node: vertex2, weight }]);
    this.adjecencyList[vertex2]?.length
      ? this.adjecencyList[vertex2].push({ node: vertex1, weight })
      : (this.adjecencyList[vertex2] = [{ node: vertex1, weight }]);
  }
}

let wg = new WeightedGraph();

wg.addVertex("A");
wg.addVertex("B");
wg.addVertex("C");

wg.addEdge("A", "B", 9);
wg.addEdge("A", "C", 5);
wg.addEdge("B", "C", 7);
console.log(wg.adjecencyList);
