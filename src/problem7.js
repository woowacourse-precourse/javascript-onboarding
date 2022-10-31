function findfriendFriends(userFriends, friends, user) {
  const findFriends = [];

  const userFilter = friends.filter((friends) => !friends.includes(user));
  for (let [a, b] of userFilter) {
    if (userFriends.includes(a) && !userFriends.includes(b)) {
      findFriends.push(b);
    } else if (userFriends.includes(b) && !userFriends.includes(a))
      findFriends.push(a);
  }

  return findFriends;
}

function findUserFriends(user, friends) {
  const findFriends = [];

  for (let x of friends) {
    if (x.includes(user)) {
      if (x[0] === user) findFriends.push(x[1]);
      else findFriends.push(x[0]);
    }
  }

  return findFriends;
}

function problem7(user, friends, visitors) {
  let answer;

  const userFriends = findUserFriends(user, friends);
  const friendFriends = findfriendFriends(userFriends, friends, user);

  // 사용자와 함께 아는 친구에게 추천 점수 부여 기능

  // 사용자의 타임 라인에 방문한 사용자와 함께 아는 친구에게 추천 점수 부여 기능

  return answer;
}

module.exports = problem7;
