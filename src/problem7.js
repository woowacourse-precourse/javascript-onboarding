const getMyFriend = (user, friendPair) => {
  return friendPair[0] === user ? friendPair[1] : friendPair[0];
};

const getFriends = (me, friends) => {
  const myFriends = [];
  friends.forEach((friendPair) => {
    if (!friendPair.includes(me)) return;
    myFriends.push(getMyFriend(me, friendPair));
  });

  return myFriends;
};

const getRelatedFriends = (directFriends, user, friends) => {
  const allFriendsOfDirectFriends = directFriends.reduce(
    (accArray, directFriend) => {
      return [...accArray, ...getFriends(directFriend, friends)];
    },
    []
  );
  const relatedFriends = allFriendsOfDirectFriends.filter(
    (friend) => user !== friend && !directFriends.includes(friend)
  );

  return relatedFriends;
};

const getRecommendedFriends = (scoreMap) => {
  const sortedFriends = Array.from(scoreMap).sort((a, b) =>
    a[1] === b[1] ? a[0].localeCompare(b[0]) : b[1] - a[1]
  );

  return sortedFriends.slice(0, 5).map((item) => item[0]);
};

function problem7(user, friends, visitors) {
  const directFriends = getFriends(user, friends);
  const relatedFriends = getRelatedFriends(directFriends, user, friends);

  const scoreMap = new Map();

  relatedFriends.forEach((relatedFriend) => {
    scoreMap.set(relatedFriend, (scoreMap.get(relatedFriend) || 0) + 10);
  });
  visitors.forEach((visitor) => {
    if (directFriends.includes(visitor)) return;
    scoreMap.set(visitor, (scoreMap.get(visitor) || 0) + 1);
  });

  return getRecommendedFriends(scoreMap);
}

module.exports = problem7;
