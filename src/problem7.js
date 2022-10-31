function problem7(user, friends, visitors) {
  // 친구 목록
  let relationships = setUserFriends(user, friends);

  // 추천 목록
  let recommendList = getRecommendedUserList(visitors, relationships);

  return recommendList;
}

module.exports = problem7;

function setUserFriends(user, friends) {
  let relationshipsMap = new Map();

  for (let friend of friends) {
    if (user == friend[1]) {
      // 본인은 제외
      continue;
    } else {
      if (relationshipsMap.has(friend[0])) {
        relationshipsMap.set(friend[0], [
          ...relationshipsMap.get(friend[0]),
          friend[1],
        ]);
      } else {
        relationshipsMap.set(friend[0], [friend[1]]);
      }
    }
  }

  return relationshipsMap;
}

function setRecommendedUserPoint(visitors, relationships) {
  let visitorsObj = {};

  // 기본. 사용자의 타임 라인에 방문했으면 1점 추가
  for (let visitor of visitors) {
    if (relationships.get(visitor)) {
      // 엣지 케이스 1. 현재 유저와 친구면 제외
      continue;
    } else {
      if (visitorsObj[visitor]) {
        visitorsObj[visitor]++;
      } else {
        visitorsObj[visitor] = 1;
      }
    }
  }

  // 사용자와 함께 아는 친구는 10점 추가
  for (let acquaintanceList of relationships.values()) {
    for (let acquaintance of acquaintanceList) {
      if (visitorsObj[acquaintance]) {
        visitorsObj[acquaintance] += 10;
      } else {
        visitorsObj[acquaintance] = 10;
      }
    }
  }

  return visitorsObj;
}

function getRecommendedUserList(visitors, relationships) {
  let visitorsObj = setRecommendedUserPoint(visitors, relationships);

  // 추천 점수 높은 순으로 정렬. 점수 같으면 이름 순 정렬
  const sortByPointAndAlphabet = (prevUser, nextUser) => {
    if (nextUser[1] - prevUser[1] > 0) return 1;
    else if (nextUser[1] == prevUser[1]) {
      if (prevUser[0] - nextUser[0] > 0) return 1;
      else if (prevUser[0] - nextUser[0] == 0) return 0;
      else if (prevUser[0] - nextUser[0] < 0) return -1;
    } else if (nextUser[1] - prevUser[1] < 0) return -1;
  };

  return Object.entries(visitorsObj)
    .sort(sortByPointAndAlphabet)
    .map((recommendedUser) => recommendedUser[0]);
}
