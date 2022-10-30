const socialGraph = {};
const socialScore = {};
function addVertex(node, graph) {
  if (!graph[node]) {
    graph[node] = [];
  }
  return;
}

function addEdge(nodeA, nodeB, graph) {
  addVertex(nodeA, graph);
  addVertex(nodeB, graph);

  if (!graph[nodeA].includes(nodeB)) {
    graph[nodeA].push(nodeB);
  }
  if (!graph[nodeB].includes(nodeA)) {
    graph[nodeB].push(nodeA);
  }
  return;
}

function addScore(node, value, graph) {
  if (!graph[node]) {
    graph[node] = 0;
  }

  graph[node] += value;
  return;
}

function problem7(user, friends, visitors) {
  var answer;
  friends.forEach((friend) => {
    addEdge(friend[0], friend[1], socialGraph);
  });

  for (let i = 0; i < friends.length; i++) {
    socialGraph[user].forEach((userFriend) => {
      if (socialGraph[friends[i]].includes(userFriend)) {
        addScore(friends[i], 10, socialScore);
      }
    });
  }

  return answer;
}

module.exports = problem7;
