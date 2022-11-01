function sortScore(a, b) {
  const [nameA, scoreA] = a;
  const [nameB, scoreB] = b;
  if (scoreA < scoreB) {
    return 1;
  } else if (scoreA > scoreB) {
    return -1;
  } else if (scoreA === scoreB) {
    return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
  }
}

function problem7(user, friends, visitors) {
  let answer;
  const relationMap = new Map();
  const scoreMap = new Map();
  let userFriend;

  // 친구 관계 정리
  friends.forEach((friend) => {
    for (let i = 0; i < friend.length; i++) {
      if (!relationMap.has(friend[i])) {
        relationMap.set(friend[i], []);
      }
      relationMap.get(friend[i]).push(i == 0 ? friend[1] : friend[0]);
    }
  });

  userFriend = relationMap.get(user);

  // user와 함께 아는 친구 점수 계산
  userFriend.forEach((friend) => {
    const acquaintance = relationMap.get(friend);
    for (let i = 0; i < acquaintance.length; i++) {
      if (acquaintance[i] !== user) {
        if (
          !scoreMap.has(acquaintance[i]) &&
          !userFriend.includes(acquaintance[i])
        ) {
          scoreMap.set(acquaintance[i], 0);
        }
        scoreMap.set(acquaintance[i], scoreMap.get(acquaintance[i]) + 10);
      }
    }
  });

  // user의 타임 라인에 방문한 횟수 점수 계산
  visitors.forEach((visitor) => {
    if (!userFriend.includes(visitor)) {
      if (!scoreMap.has(visitor)) {
        scoreMap.set(visitor, 0);
      }
      scoreMap.set(visitor, scoreMap.get(visitor) + 1);
    }
  });

  // 친구 추천 리스트 생성
  const recommendationList = Array.from(scoreMap)
    .filter(([_, score]) => score > 0)
    .sort((a, b) => {
      sortScore(a, b);
    })
    .slice(0, 5);

  answer = recommendationList.map(([name, _]) => name);
  return answer;
}

module.exports = problem7;
