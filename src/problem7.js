const FRIEND_SCORE = 10;
const VISIT_SCORE = 1;
const LIMIT = 5;

const getUsersFriends = (user, relationship) => {
  let friends = relationship.reduce((acc, [personA, personB]) => {
    if (personA === user) {
      return acc.concat(personB);
    } else if (personB === user) {
      return acc.concat(personA);
    }
    return acc;
  }, []);
  return [...new Set(friends)];
};

const getExceptFriend = (friendArray, usersFriends) => {
  return friendArray.filter((item) => {
    if (!usersFriends.includes(item)) return item;
  });
};

const getFriendOfFriend = (user, usersFriends, relationship) => {
  const result = usersFriends.reduce((acc, usersFriend) => {
    const friends = getUsersFriends(usersFriend, relationship);
    friends.splice(friends.indexOf(user), 1);
    return acc.concat(friends);
  }, []);
  return getExceptFriend(result, usersFriends); // 내 친구와 친구가 서로 친구인 경우를 제외하여 건너 건너 친구만 리턴하게끔
};

// getScore
const getScoreMap = (friends, score) => {
  // TODO Q 보통 acc 그대로 쓰나 아님 이름을 바꾸나?
  return friends.reduce((acc, name) => {
    if (acc.has(name)) {
      acc.set(name, acc.get(name) + score);
    } else {
      acc.set(name, score);
    }
    return acc;
  }, new Map());
};

// merge
const mergeScoreMap = (map1, map2) => {
  let scoreMap = new Map(map1);
  for (const [key, value] of map2) {
    if (scoreMap.has(key)) {
      scoreMap.set(key, scoreMap.get(key) + value);
    } else {
      scoreMap.set(key, value);
    }
  }
  return scoreMap;
};

// sort
const getSortedArray = (unsortedArray) => {
  return unsortedArray.sort((a, b) => {
    if (a[1] > b[1]) return -1;
    if (a[1] < b[1]) return 1;
    if (a[0] < b[0]) return -1;
    else return 1;
  });
};

const getRecommendResult = (array) => {
  const result = array.length > LIMIT ? array.slice(0, LIMIT) : array;
  return result.map(([key, value]) => key);
};

function problem7(user, friends, visitors) {
  var answer;

  // 유저의 친구들(내친구들)
  const usersFriends = getUsersFriends(user, friends);

  // 내 친구들의 친구들
  const friendsOfFriend = getFriendOfFriend(user, usersFriends, friends);

  // 내 타임라인 방문자 중 이미 친구인 유저 제외
  const visitorsExceptFriend = getExceptFriend(visitors, usersFriends);

  // 친구의 친구 규칙(1번 규칙) 점수화
  const friendScore = getScoreMap(friendsOfFriend, FRIEND_SCORE);

  // 방문 규칙(2번 규칙) 점수화
  const visitScore = getScoreMap(visitorsExceptFriend, VISIT_SCORE);

  // 1, 2번 규칙 점수 합치기
  const unorderedRecommendMap = mergeScoreMap(friendScore, visitScore);

  // 점수 정렬하기
  const orderedScoreArray = getSortedArray(Array.from(unorderedRecommendMap));
  console.log(orderedScoreArray);

  // 답에 최종 추천할 친구 넣어주기
  answer = getRecommendResult(orderedScoreArray);

  return answer;
}

module.exports = problem7;
