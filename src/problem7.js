function getNetwork(friends, network) {
  for (const friend of friends) {
    if (!network.has(friend[0])) {
      network.set(friend[0], []);
    }
    if (!network.has(friend[1])) {
      network.set(friend[1], []);
    }
    network.get(friend[0]).push(friend[1]);
    network.get(friend[1]).push(friend[0]);
  }
}
function getNetworkScore(user, network, scoreMap) {
  if (!network.has(user)) return;
  for (const friend of network.get(user)) {
    for (const other of network.get(friend)) {
      if (other === user) continue;
      if (!scoreMap.has(other)) scoreMap.set(other, 0);
      const score = scoreMap.get(other);
      scoreMap.set(other, score + 10);
    }
  }
}
function getVisitScore(visitors, scoreMap) {
  for (const visitor of visitors) {
    if (!scoreMap.has(visitor)) scoreMap.set(visitor, 0);
    const score = scoreMap.get(visitor);
    scoreMap.set(visitor, score + 1);
  }
}
function getSortedScoreArr(scoreMap) {
  const sortedArr = [...scoreMap.entries()].sort((a, b) => {
    if (a[1] !== b[1]) return b[1] - a[1];
    return a[0].localeCompare(b[0]);
  });
  return sortedArr;
}
function problem7(user, friends, visitors) {
  var answer;
  return answer;
}
module.exports = problem7;
