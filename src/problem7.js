function problem7(user, friends, visitors) {
  const answer = [];
  const scores = new Map();

  // user의 친구 목록
  const userFriends = [];
  const others = [];

  // user의 친구찾기
  for (let i = 0; i < friends.length; ++i) {
    if (friends[i].includes(user)) {
      if (friends[i][0] === user) userFriends.push(friends[i][1]);
      else userFriends.push(friends[i][0]);
    } else {
      others.push(friends[i]);
    }
  }

  return answer;
}

module.exports = problem7;
