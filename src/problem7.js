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

/*[a, b]가 있으면 [b, a]라는 목록은 안줌... 그러면 페어를 받아서 양쪽을 다 확인해야함 */

// 친구의 친구에게 10점씩 주는 함수
function friendOfFriend(user, graph, scoreList) {
  [...graph.get(user)].forEach((friend) => {
    //friend는 user의 1차 친구
    [...graph.get(friend)].forEach((fof) => {
      if (fof !== user && !graph.get(user).has(fof)) scoreList.set(fof, 10);
    });
  });
}

// 이미 친구인 사람은 뺴야함
function scoreVisitor(user, graph, visitors, scoreList) {
  visitors.forEach((visitor) => {
    if (scoreList.has(visitor)) {
      scoreList.set(visitor, scoreList.get(visitor) + 1);
    } else if (!scoreList.has(visitor) && !graph.get(user).has(visitor)) {
      //
      scoreList.set(visitor, 1);
    }
  });
}

function sortResult(scoreList) {
  let ArrScoreList = [...scoreList]; // 배열로 만들기
  ArrScoreList.sort(function (a, b) {
    [name1, score1] = a;
    [name2, score2] = b;
    if (score1 > score2) return -1;
    if (score1 < score2) return 1;
    if (score1 === score2) {
      if (name1 > name2) return 1;
      if (name1 <= name2) return -1;
    }
  });

  return ArrScoreList.map((score) => score[0]);
}

module.exports = problem7;
