class UndirectedGraph {
  constructor() {
    this.vertices = {};
  }

  addVertex(vertex) {
    if (!this.vertices[vertex]) {
      this.vertices[vertex] = [];
    }
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

function addScore(person, score, scores) {
  if (!scores[person]) {
    scores[person] = 0;
  }
  scores[person] += score;
}

function getScores(user, friendships, visitors, scores) {
  for (const friend of friendships.vertices[user]) {
    for (const friendOfFriend of friendships.vertices[friend]) {
      addScore(friendOfFriend, 10, scores);
    }
  }
  for (const visitor of visitors) {
    addScore(visitor, 1, scores);
  }

  scores[user] = 0;
  for (const friend of friendships.vertices[user]) {
    scores[friend] = 0;
  }
}

function problem7(user, friends, visitors) {
  var answer = [];
  let friendships = new UndirectedGraph();
  let scores = {};

  getFriendships(friends, friendships);
  getScores(user, friendships, visitors, scores);
  return answer;
}

module.exports = problem7;
