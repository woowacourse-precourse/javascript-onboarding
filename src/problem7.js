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

function problem7(user, friends) {
  const friendOfUser = getFriendOfUser(user, friends);
  const visitorsCount = getVisitorsCount(visitors);
  const friendKnowWithTogether = getFriendKnowWithTogether(
    friendOfUser,
    friends,
    user
  );
  return;
}

module.exports = problem7;
