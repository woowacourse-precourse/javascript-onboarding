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

function problem7(user, friends) {
  const friendOfUser = getFriendOfUser(user, friends);
  const visitorsCount = getVisitorsCount(visitors);
  return;
}

module.exports = problem7;
