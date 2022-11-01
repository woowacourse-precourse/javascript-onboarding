function getFriendOfUser(user, friends) {
  const FriendOfUser = friends.reduce((acc, friendship) => {
    friendship.includes(user) &&
      acc.push(...friendship.filter((friend) => friend !== user));
    return acc;
  }, []);
  return FriendOfUser;
}

function getVisitorsCount(visitors) {
  const visitorsCount = visitors.reduce((acc, visitors) => {
    acc[visitors] = (acc[visitors] || 0) + 1;
    return acc;
  }, {});
  return visitorsCount;
}

function getFriendKnowWithTogether(friendOfUser, friends, userName) {
  const friendknowWithTogether = friendOfUser.reduce((acc, friend) => {
    friends.forEach((friendship) => {
      friendship.includes(friend) &&
        acc.push(...friendship.filter((x) => x !== friend));
    });
    return acc;
  }, []);
  return friendknowWithTogether.filter((name) => name !== userName);
}

function CountFriendknowWithTogether(friendknowWithTogether) {
  const result = friendknowWithTogether.reduce((acc, friend) => {
    acc[friend] = (acc[friend] || 0) + 1;
    return acc;
  }, {});
  return result;
}

function setUnknowFriendsScore(friends, visitors) {
  const unknowFriend = new Map();
  friends.flat().forEach((name) => unknowFriend.set(name, 0));
  visitors.forEach((name) => unknowFriend.set(name, 0));
  return unknowFriend;
}

function calculateUnknowFriendsScore(
  UnknowFriendsScore,
  friendknowWithTogetherScore,
  visitorsCount
) {
  for (let friend in friendknowWithTogetherScore) {
    UnknowFriendsScore.set(friend, friendknowWithTogetherScore[friend] * 10);
  }
  for (let visitor in visitorsCount) {
    UnknowFriendsScore.set(
      visitor,
      UnknowFriendsScore.get(visitor) + visitorsCount[visitor]
    );
  }
  return UnknowFriendsScore;
}

function getSomePeopleWithFriendIKnow(UnknowFriendsScore, user, friendOfUser) {
  [user, ...friendOfUser].forEach((name) => UnknowFriendsScore.delete(name));
  return UnknowFriendsScore;
}

function problem7(user, friends) {
  const friendOfUser = getFriendOfUser(user, friends);
  const visitorsCount = getVisitorsCount(visitors);
  const friendKnowWithTogether = getFriendKnowWithTogether(
    friendOfUser,
    friends,
    user
  );
  const friendKnowTogeterWithCount = CountFriendknowWithTogether(
    friendKnowWithTogether
  );
  const UnknowFriendsScoreSet = setUnknowFriendsScore(friends, visitors);
  const UnknowFriendsScore = calculateUnknowFriendsScore(
    UnknowFriendsScoreSet,
    friendKnowTogeterWithCount,
    visitorsCount
  );
  const somePeopleWithFriendIKnow = getSomePeopleWithFriendIKnow(
    UnknowFriendsScore,
    user,
    friendOfUser
  );
  return;
}

module.exports = problem7;
