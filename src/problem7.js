const getUsersFriends = (user, relationship) => {
  let friends = relationship.reduce((acc, [personA, personB]) => {
    if (personA === user) {
      acc.push(personB);
    } else if (personB === user) {
      acc.push(personA);
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
    acc.push(...getUsersFriends(usersFriend, relationship));
    acc = [...new Set(acc)];
    acc.splice(acc.indexOf(user), 1);
    return acc;
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

  return answer;
}

module.exports = problem7;
