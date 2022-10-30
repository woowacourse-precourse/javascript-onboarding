const getDirectFriends = (user, friends) => {
  let directFriends = [];
  friends.forEach((friendPair) => {
    if (!friendPair.includes(user)) return;
    if (friendPair[0] === user) directFriends.push(friendPair[1]);
    if (friendPair[1] === user) directFriends.push(friendPair[0]);
  });
  return directFriends;
};

const getRelatedFriends = (user, friends, myFriendList) => {
  let relatedFriends = [];
  myFriendList.forEach((myFriend) => {
    const directFriendsOfMyFriend = getDirectFriends(myFriend, friends).filter(
      (friend) => friend !== user
    );
    relatedFriends = [...relatedFriends, ...directFriendsOfMyFriend];
  });
  return relatedFriends;
};

const getScoreMap = (relatedFriends, friends, visitors) => {
  const scoreMap = new Map();
  relatedFriends.forEach((friend) => {
    scoreMap.set(friend, (scoreMap.get(friend) || 0) + 10);
  });
  visitors.forEach((visitor) => {
    if (friends.includes(visitor)) return;
    scoreMap.set(visitor, (scoreMap.get(visitor) || 0) + 1);
  });
  return scoreMap;
};
const sortByScore = (scoreMap) => {
  const sortedList = Array.from(scoreMap).sort((a, b) =>
    a[1] === b[1] ? a[0].localeCompare(b[0]) : b[1] - a[1]
  );
  const sortedNameList = sortedList.map((item) => item[0]);
  return sortedNameList;
};

function problem7(user, friends, visitors) {
  const directFriends = getDirectFriends(user, friends);
  const relatedFriends = getRelatedFriends(user, friends, directFriends);
  const scoreMap = getScoreMap(relatedFriends, directFriends, visitors);
  const sortedList = sortByScore(scoreMap);
  return sortedList;
}

module.exports = problem7;
