function problem7(user, friends, visitors) {
  var answer = [];
  let userSet = getUserRelationMap(friends, user);

  let friendMap = getFriendMap(userSet, friends, user);
  let visitorMap = getVisitorMap(visitors, userSet);

  recommendMap = getRecommendUserMap(friendMap, visitorMap);

  for (const [user, score] of recommendMap) {
    if (score > 0) {
      answer.push({ user: user, score: score });
    }
  }
  answer = getSortedUserList(recommendMap);
  if (answer.length > 4) {
    return answer.slice(0, 5);
  }
  return answer;
}

module.exports = problem7;

function getUserRelationMap(friendsList, user) {
  let userSet = new Set();
  friendsList.forEach((friends) => {
    if (friends[0] === user) {
      userSet.add(friends[1]);
    } else {
      userSet.add(friends[0]);
    }
  });
  return userSet;
}

function getFriendMap(userSet, friendsList, userName) {
  let friendMap = new Map();
  userSet.forEach((userFriend) => {
    friendsList
      .filter(
        (friend) =>
          friend.indexOf(userFriend) !== -1 && friend.indexOf(userName) === -1
      )
      .forEach((friend) => {
        if (friend[0] === userFriend) {
          friendMap = socringUser(friendMap, friend[1], 10);
        } else {
          friendMap = socringUser(friendMap, friend[0], 10);
        }
      });
  });
  return friendMap;
}

function getVisitorMap(visitors, userSet) {
  let visitorMap = new Map();
  visitors.forEach((visitor, score) => {
    if (!userSet.has(visitor)) {
      visitorMap = socringUser(visitorMap, visitor, 1);
    }
  });
  return visitorMap;
}

function getRecommendUserMap(friendMap, visitorMap) {
  let recommendMap = friendMap;
  visitorMap.forEach((score, visitor) => {
    recommendMap = socringUser(recommendMap, visitor, score, visitorMap);
  });
  return recommendMap;
}

function getSortedUserList(recommendMap) {
  let sortedList = [];
  if (recommendMap.size === 0) {
    return [];
  }
  for (const [user, score] of recommendMap) {
    sortedList.push({ user: user, score: score });
  }
  sortedList = sortedList
    .sort((a, b) => {
      if (a.score > b.score) return -1;
      if (a.score < b.score) return 1;

      if (a.user > b.user) return 1;
      if (a.user < b.user) return -1;
    })
    .map((user) => user.user);

  return sortedList;
}

function socringUser(map, user, score, map2 = map) {
  if (map.has(user)) {
    map.set(user, map2.get(user) + score);
  } else {
    map.set(user, score);
  }
  return map;
}
