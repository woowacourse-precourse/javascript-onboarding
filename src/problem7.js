const socialGraph = {};
const socialScore = {};
function addVertex(node) {
  if (!socialGraph[node]) {
    socialGraph[node] = [];
  }
  return;
}

function addEdge(nodeA, nodeB) {
  addVertex(nodeA);
  addVertex(nodeB);

  if (!socialGraph[nodeA].includes(nodeB)) {
    socialGraph[nodeA].push(nodeB);
  }
  if (!socialGraph[nodeB].includes(nodeA)) {
    socialGraph[nodeB].push(nodeA);
  }
  return;
}

function problem7(user, friends, visitors) {
  var answer;
  friends.forEach((friend) => {
    addEdge(friend[0], friend[1]);
  });

  return answer;
}

module.exports = problem7;
