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
    const [id1, id2] = friendship;

    friendships.addVertex(id1);
    friendships.addVertex(id2);
    friendships.addEdge(id1, id2);
  }
}

function addScore(id, score, scores) {
  if (!scores[id]) {
    scores[id] = 0;
  }
  scores[id] += score;
}

function getScores(user, friendships, visitors, scores) {
  const userFriends = friendships.vertices[user];

  if (userFriends) {
    for (const friend of userFriends) {
      for (const friendOfFriend of friendships.vertices[friend]) {
        addScore(friendOfFriend, 10, scores);
      }
    }
  }
  if (visitors.length) {
    for (const visitor of visitors) {
      addScore(visitor, 1, scores);
    }
  }

  scores[user] = 0;
  if (userFriends) {
    for (const friend of userFriends) {
      scores[friend] = 0;
    }
  }
}

function compare(person1, person2) {
  const [id1, score1] = person1;
  const [id2, score2] = person2;
  const scoreCompare = score2 - score1;

  if (scoreCompare) {
    return scoreCompare;
  }
  if (id1 < id2) {
    return -1;
  }
  if (id1 > id2) {
    return 1;
  }
  return 0;
}

function problem7(user, friends, visitors) {
  var answer = [];
  let friendships = new UndirectedGraph();
  let scores = {};

  getFriendships(friends, friendships);
  getScores(user, friendships, visitors, scores);

  let scoresArray = Object.entries(scores);
  const sortedScores = Object.fromEntries(scoresArray.sort(compare));
  
  for (id in sortedScores) {
    if (sortedScores[id] == 0 || answer.push(id) == 5) {
      break;
    }
  }
  return answer;
}

module.exports = problem7;
