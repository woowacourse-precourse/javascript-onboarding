function problem7(user, friends, visitors) {
  let graph = new Map();
  friends.forEach((duo) => makeGraph(graph, duo));

  let scoreList = new Map();
  friendOfFriend(user, graph, scoreList);
  scoreVisitor(user, graph, visitors, scoreList);
  return sortResult(scoreList);
}

function makeGraph(vertex, duo) {
  for (let i = 0; i < duo.length; i++) {
    let tempSet = new Set();
    let name = duo[i];
    if (vertex.has(name)) {
      vertex.set(name, vertex.get(name).add(i ? duo[0] : duo[1]));
    } else {
      vertex.set(name, tempSet.add(i ? duo[0] : duo[1]));
    }
  }
}

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
