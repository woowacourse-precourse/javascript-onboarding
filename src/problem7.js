// 사용자와 함께 아는 친구 반환 기능

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

  // 사용자와 함께 아는 친구에게 추천 점수 부여 기능

  // 사용자의 타임 라인에 방문한 사용자와 함께 아는 친구에게 추천 점수 부여 기능

  return answer;
}

module.exports = problem7;
