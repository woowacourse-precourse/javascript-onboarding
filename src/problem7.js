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
  var answer = [];
  friends.forEach((friend) => {
    addEdge(friend[0], friend[1], socialGraph);
  });

  const graphKey = Object.keys(socialGraph);

  for (let i = 0; i < graphKey.length; i++) {
    if (user === graphKey[i]) continue;
    socialGraph[user].forEach((userFriend) => {
      if (socialGraph[graphKey[i]].includes(userFriend)) {
        addScore(graphKey[i], 10, socialScore);
      }
    });
  }

  visitors.forEach((visitor) => {
    addScore(visitor, 1, socialScore);
  });

  const scoreGraphKey = Object.keys(socialScore);
  const answerScoreList = [];
  for (let i = 0; i < scoreGraphKey.length; i++) {
    answerScoreList.push({
      name: scoreGraphKey[i],
      score: socialScore[scoreGraphKey[i]],
    });
  }

  answerScoreList.sort((a, b) => {
    if (b.score - a.score === 0) {
      return a.name > b.name ? 1 : -1;
    } else {
      return b.score - a.score;
    }
  });

  for (let i = 0; i < answerScoreList.length; i++) {
    if (answer.length >= 5) break;
    if (socialGraph[user].includes(answerScoreList[i].name)) continue;
    answer.push(answerScoreList[i].name);
  }
  return answer;
}

module.exports = problem7;
