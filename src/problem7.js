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

  // 방문자 점수부여
  visitors.forEach((elem) => {
    scores.set(elem, scores.get(elem) + 1 || 1);
  });

  // 친구 제거
  userFriends.forEach((elem) => scores.delete(elem));

  // 정렬 (Map을 Array로 바꿔야한다)
  const scoresArr = [...scores];
  scoresArr.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return b[1] - a[1];
  });

  // 5개 뽑아서 answer에 넣기
  // 그리고 0점인 친구들 제거하기
  for (let i = 0; i < scoresArr.length; ++i) {
    if (i === 5) break;
    if (scoresArr[i][1] === 0) break;
    answer.push(scoresArr[i][0]);
  }

  return answer;
}

module.exports = problem7;
