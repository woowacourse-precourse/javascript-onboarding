function problem7(user, friends, visitors) {
  let answer = [];
  const userFriend = new Set();

  // 1. user 친구를 찾는다.
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].indexOf(user) !== -1) {
      if (friends[i].indexOf(user) === 0) userFriend.add(friends[i][1]);
      if (friends[i].indexOf(user) === 1) userFriend.add(friends[i][0]);
    }
  }

  return answer;
}

module.exports = problem7;