const insertMap = (map, key, value) => {
  if (map.has(key)) map.set(key, map.get(key) + value);
  else map.set(key, value);
}

function problem7(user, friends, visitors) {
  let answer = [];
  const scores = new Map();

  // 사용자의 현재 친구 리스트를 담는 배열
  const userFriends = [];
  for (let i=0; i<friends.length; i++) {
    if (friends[i][0] === user) userFriends.push(friends[i][1]);
    else if (friends[i][1] === user) userFriends.push(friends[i][0]);
  }

  // cf. 사용자와 함께 아는 친구의 수 = 10점
  for (let i=0; i<userFriends.length; i++) {
    for (let j=0; j<friends.length; j++) {
      if (friends[j][0] === user || friends[j][1] === user) continue;
      if (friends[j][0] === userFriends[i]) insertMap(scores, friends[j][1], 10);
      else if (friends[j][1] === userFriends[i]) insertMap(scores, friends[j][0], 10);
    }
  }

  // cf. 사용자의 타임 라인에 방문한 횟수 = 1점
  for (let i=0; i<visitors.length; i++) {
    insertMap(scores, visitors[i], 1);
  }

  // cf. 미스터코의 친구 추천 규칙에 따라 점수가 가장 높은 순으로 정렬
  // cf. 추천 점수가 같은 경우는 이름순으로 정렬
  const scoresArr = [...scores];
  scoresArr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return b[1] - a[1];
  });

  // cf. 최대 5명을 return
  // cf. 추천 점수가 0점인 경우 추천하지 않음
  // 이미 사용자의 친구일 경우에도 추천하지 않음
  for (let i=0; i<Math.min(5, scoresArr.length); i++) {
    if (scoresArr[i][1] === 0 || userFriends.indexOf(scoresArr[i][0]) > -1) break;
    answer.push(scoresArr[i][0]);
  }

  return answer;
}

module.exports = problem7;
