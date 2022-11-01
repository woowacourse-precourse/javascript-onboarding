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

  // 아직 친구 아닌 사람들에게 점수 부여하기
  // 혹시 내 친구를 아는 모르는 사람이라면? 점수부여!
  others.forEach((elem) => {
    if (userFriends.includes(elem[0]))
      scores.set(elem[1], scores.get(elem[1]) + 10 || 10);
    if (userFriends.includes(elem[1]))
      scores.set(elem[0], scores.get(elem[0]) + 10 || 10);
  });

  return answer;
}

module.exports = problem7;
