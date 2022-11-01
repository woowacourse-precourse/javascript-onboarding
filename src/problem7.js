class UndirectedGraph {
  constructor() {
    this.vertices = {};
  }

  addVertex(vertex) {
    this.vertices[vertex] = this.vertices[vertex] || [];
  }

  addEdge(vertex1, vertex2) {
    this.vertices[vertex1].push(vertex2);
    this.vertices[vertex2].push(vertex1);
  }
}

function getFriendships(friends, friendships) {
  for (const friendship of friends) {
    friendships.addVertex(friendship[0]);
    friendships.addVertex(friendship[1]);
    friendships.addEdge(friendship[0], friendship[1]);
  }
}

function problem7(user, friends, visitors) {
  var answer;
  let friendships = new UndirectedGraph();

  getFriendships(friends, friendships);
  return answer;
}

module.exports = problem7;
