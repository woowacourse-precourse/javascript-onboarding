function problem7(user, friends, visitors) {
  const friendsOfUserList = getFriends(user, friends);
  const friendsOfFriendsList = getFriendsOfFriends(
    friendsOfUserList,
    friends,
    user
  );
  const overlapfriendsWithScore = getOverlapFriendObject(friendsOfFriendsList);
  const visitorWithScore = getVisitorObject(visitors, friendsOfUserList);
  const mergedRecommendList = mergeRecommendList(
    overlapfriendsWithScore,
    visitorWithScore
  );
}

function getFriends(user, buddies) {
  const buddyIncludeUser = buddies.filter((buddy) => {
    if (buddy.includes(user)) return buddy;
  });

  return eliminateUser(buddyIncludeUser, user);
}

function eliminateUser(userList, user) {
  return [].concat(...userList).filter((person) => person !== user);
}

function getFriendsOfFriends(buddies, friends, user) {
  const buddyOfBuddy = [];
  buddies.forEach((person, i) => {
    buddyOfBuddy.push(getFriends(person, friends));
  });

  return eliminateUser(buddyOfBuddy, user);
}

function getOverlapFriendObject(list) {
  const overlapFriendsWithScore = [];
  const overlapFriendValue = countDuplicatedValue(list);

  for (let [key, value] of overlapFriendValue) {
    overlapFriendsWithScore.push({ name: key, score: value * 10 });
  }

  return overlapFriendsWithScore;
}

function countDuplicatedValue(array) {
  return array.reduce((acc, curr) => {
    acc.set(curr, (acc.get(curr) || 0) + 1);
    return acc;
  }, new Map());
}

function getVisitorObject(visitors, alreadyFriends) {
  const visitorWithScore = [];
  const strangerVisitor = visitors.filter(
    (visitor) => !alreadyFriends.includes(visitor)
  );
  const visitCountValue = countDuplicatedValue(strangerVisitor);

  for (let [key, value] of visitCountValue) {
    visitorWithScore.push({ name: key, score: value });
  }

  return visitorWithScore;
}

function mergeRecommendList(overlapList, visitorList) {
  const mergedList = [...overlapList];

  mergedList.forEach((person) => {
    visitorList.forEach((visitor) => {
      if (person.name === visitor.name) {
        person.score += visitor.score;
      }
    });
  });

  const visitOnly = visitorList.filter((visitor) => {
    return mergedList.every((person) => person.name !== visitor.name);
  });

  mergedList.push(visitOnly);

  return mergedList;
}
module.exports = problem7;
