function problem7(user, friends, visitors) {
  let answer = [];
  const userFriend = new Set();
  let score = new Map();

  // 1. user 친구를 찾는다.
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].indexOf(user) !== -1) {
      if (friends[i].indexOf(user) === 0) userFriend.add(friends[i][1]);
      if (friends[i].indexOf(user) === 1) userFriend.add(friends[i][0]);
    }
  }

  // 2. 친구 목록에서 user, user 친구가 아닌 경우를 찾는다.
  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (friends[i][j] !== user && !userFriend.has(friends[i][j])) {
        score.set(friends[i][j], 0);
      }
    }
  }

  //3. 방문 목록에서 user, user 친구가 아닌 경우를 찾는다.
  for (let i = 0; i < visitors.length; i++) {
    if (visitors[i] !== user && !userFriend.has(visitors[i])) {
      if (score.has(visitors[i])) {
        score.set(visitors[i], score.get(visitors[i]) + 1);
      } else {
        score.set(visitors[i], 1);
      }
    }
  }

  return answer;
}

module.exports = problem7;