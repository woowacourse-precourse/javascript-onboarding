function problem7(user, friends, visitors) {
  const scores = {};
  const friendsOfUser = getFriends(user, friends);

  friends
    // 현재 유저 필터
    .filter((link) => !link.includes(user))
    // 유저 친구의 관계만 필터
    .filter(
      ([friend1, friend2]) =>
        friend1 in friendsOfUser || friend2 in friendsOfUser
    )
    // 유저 친구의 친구 점수 카운트
    .map(([friend1, friend2]) => (friend1 in friendsOfUser ? friend2 : friend1))
    .forEach((friend) => {
      if (friend in scores) {
        scores[friend] += 10;
      } else {
        scores[friend] = 10;
      }
    });

  // 타임 라인 방문자 점수 카운트
  visitors.forEach((visitor) => {
    if (visitor in friendsOfUser) return;
    if (visitor in scores) {
      scores[visitor] += 1;
    } else {
      scores[visitor] = 1;
    }
  });

  return [...Object.keys(scores)];
}

const getFriends = (user, friends) =>
  friends.reduce((friendList, friendLink) => {
    if (friendLink.includes(user)) {
      const friend = friendLink.filter((item) => item !== user)[0];

      friendList[friend] = true;
      return friendList;
    }
    return friendList;
  }, {});

module.exports = problem7;
