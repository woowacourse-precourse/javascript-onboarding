const getFriendsShareScore = (user, friends, friendsMap) => {
  friends.map((friend) => {
    if (friend.includes(user)) {
      for (let f of friend) {
        friendsMap.set(f, 0);
      }
    }
    else {
      for (let a of friend) {
        friendsMap.set(a, 10);
      }
    }
  });

  return friendsMap;
};

const getTimelineVisitedScore = (visitors, friendsMap) => {
  visitors.map((visitor) => {
    if (!friendsMap.has(visitor)) {
      friendsMap.set(visitor,1);
    } else if (friendsMap.get(visitor) !== 0) {
      // friendsMap이 0점이라면 이미 친구이므로 추천 x, 0점이 아니라면 추가 점수
      friendsMap.set(visitor, friendsMap.get(visitor) + 1);
    }
  });

  return friendsMap;
};

const problem7 = (user, friends, visitors) => {
  let friendsMap = new Map();
  friendsMap = getFriendsShareScore(user, friends, friendsMap);
  friendsMap = getTimelineVisitedScore(visitors, friendsMap);
};

module.exports = problem7;
