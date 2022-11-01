function problem7(user, friends, visitors) {
  let friendScoreList = new Map();
  const recommendFriend = [];

  for (let friend of friends) {
    if (!friend.includes(user)) {
      for (let name of friend) {
        friendScoreList.set(name, POINT.WITH_KNOW_FRIEND);
      }
    } else {
      for (let name of friend) {
        friendScoreList.set(name, POINT.USER_FRIEND);
      }
    }
  }

  for (let visitor of visitors) {
    if (!friendScoreList.has(visitor)) {
      friendScoreList.set(visitor, POINT.TIMELINE_VISITOR);
    } else if (friendScoreList.get(visitor) !== POINT.USER_FRIEND) {
      friendScoreList.set(
        visitor,
        friendScoreList.get(visitor) + POINT.TIMELINE_VISITOR
      );
    }
  }

  const sortedFriendScoreList = [...friendScoreList].sort(
    (a, b) => b[1] - a[1]
  );

  for (let key = 0; key < sortedFriendScoreList.length; key++) {
    if (sortedFriendScoreList[key][1] === POINT.USER_FRIEND) {
      continue;
    } else {
      recommendFriend.push(sortedFriendScoreList[key][0]);
    }
  }

  return recommendFriend;
}

const POINT = Object.freeze({
  USER_FRIEND: 0,
  WITH_KNOW_FRIEND: 10,
  TIMELINE_VISITOR: 1,
});

module.exports = problem7;
