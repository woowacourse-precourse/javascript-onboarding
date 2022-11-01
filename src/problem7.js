function problem7(user, friends, visitors) {
  var answer;
  const vertexArr = friends;
  const friendsSet = new Set(vertexArr.flat());
  const friendsArr = Array.from(friendsSet);
  const friendsObj = {};
  friendsArr.forEach((friendName, index) => {
    friendsObj[friendName] = index;
  });

  const adjacencyArr = [];
  friendsArr.forEach((friend) => adjacencyArr.push([]));
  adjacencyArr.push([]);

  vertexArr.forEach((element) => {
    adjacencyArr[friendsObj[element[0]]].push(friendsObj[element[1]]);
    adjacencyArr[friendsObj[element[1]]].push(friendsObj[element[0]]);
  });

  const visitedVertex = [];
  adjacencyArr[friendsObj[user]].forEach((vertex) => {
    adjacencyArr[vertex].forEach((neighbor) => {
      visitedVertex.push(neighbor);
    });
  });

  const withKnownFriends = visitedVertex.filter((vertex) => {
    if (
      vertex !== friendsObj[user] &&
      !adjacencyArr[friendsObj[user]].includes(vertex)
    ) {
      return vertex;
    }
  });

  const scoreArr = [];
  friendsArr.forEach((friend) => scoreArr.push([0]));

  withKnownFriends.forEach((idx) => {
    scoreArr[idx][0] = scoreArr[idx][0] + 10;
  });

  visitors.forEach((visitor) => {
    if (!friendsObj.hasOwnProperty(visitor)) {
      friendsObj[visitor] = Object.keys(friendsObj).length;
      scoreArr.push([0]);
      friendsArr.push(visitor);
    }
    if (
      friendsObj[visitor] !== friendsObj[user] &&
      !adjacencyArr[friendsObj[user]].includes(friendsObj[visitor])
    ) {
      scoreArr[friendsObj[visitor]][0] = scoreArr[friendsObj[visitor]][0] + 1;
    }
  });
  const scoreRsesult = scoreArr.flat();
  const resultObj = {};
  scoreRsesult.forEach((score, idx) => {
    resultObj[friendsArr[idx]] = score;
  });

  var resultSorted = [];
  for (var name in resultObj) {
    if (resultObj[name] !== 0) {
      resultSorted.push([name, resultObj[name]]);
    }
  }

  resultSorted.sort(function (a, b) {
    return b[1] - a[1];
  });
  const result = [];
  resultSorted.slice(0, 4).forEach((nameScore) => {
    result.push(nameScore[0]);
  });
  answer = result;

  return answer;
}

module.exports = problem7;
