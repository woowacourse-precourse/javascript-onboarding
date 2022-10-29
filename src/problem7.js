function problem7(user, friends, visitors) {
  let relationGraph = new Map();
  friends.forEach((pair) => makeGraph(relationGraph, pair));

  let scoreList = new Map();
  friendOfFriend(user, relationGraph, scoreList);
  scoreVisitor(user, relationGraph, visitors, scoreList);

  return sortResult(scoreList);
}

function makeGraph(graph, pair) {
  [leftName, rightName] = pair;
  let tempSet = new Set();
  let value;
  if (graph.has(leftName)) {
    value = graph.get(leftName);
    graph.set(leftName, value.add(rightName));
  } else {
    graph.set(leftName, tempSet.add(rightName));
  }
  if (graph.has(rightName)) {
    value = graph.get(rightName);
    graph.set(rightName, value.add(leftName));
  } else {
    tempSet.clear();
    graph.set(rightName, tempSet.add(leftName));
  }
}

// 친구의 친구에게 10점씩 주는 함수
function friendOfFriend(user, graph, scoreList) {
  let userFriends = graph.get(user);
  userFriends.forEach((friend) => {
    let fof = graph.get(friend);
    fof.forEach((name) => {
      // user 자신과 user와 겹친구는 제외
      if (name !== user && !graph.get(user).has(name)) scoreList.set(name, 10);
    });
  });
}

function scoreVisitor(user, graph, visitors, scoreList) {
  visitors.forEach((visitor) => {
    if (scoreList.has(visitor)) {
      let score = scoreList.get(visitor);
      scoreList.set(visitor, score + 1);
    } else if (!scoreList.has(visitor) && !graph.get(user).has(visitor)) {
      scoreList.set(visitor, 1);
    }
  });
}

// 조건대로 정렬하는 함수
function sortResult(scoreList) {
  let ArrScoreList = [...scoreList]; // 배열로 만들기
  ArrScoreList.sort(ascendingSort);

  return ArrScoreList.map((score) => score[0]);
}
function ascendingSort(a, b) {
  [name1, score1] = a;
  [name2, score2] = b;
  if (score1 > score2) return -1;
  if (score1 < score2) return 1;
  if (score1 === score2) {
    if (name1 > name2) return 1;
    if (name1 <= name2) return -1;
  }
}

module.exports = problem7;
