function problem7(user, friendPairs, visitors) {
  let answer;
  let userInfoList;
  let friendsOfUser;

  friendsOfUser = findFriendsOfUser(user, friendPairs);
  userInfoList = makeUserInfoList(user, friendPairs, visitors, friendsOfUser);
  addScoreToFriendsOfFriends(user, friendPairs, friendsOfUser, userInfoList);
  addScoreToVisitors(visitors, userInfoList);
  answer = makeRecommendUserList(userInfoList, 5);
  return answer;
}

function makeUserInfoList(user, friendPairs, visitors, friendsOfUser) {
  let userInfoList;

  userInfoList = makeUserList(user, friendPairs, visitors).map((user) => {
    return { id: user, score: 0, isFriend: friendsOfUser.includes(user) };
  });
  return userInfoList;
}

function makeUserList(user, friendPairs, visitors) {
  let userSet;

  userSet = new Set();
  friendPairs.forEach(([userA, userB]) => {
    userSet.add(userA);
    userSet.add(userB);
  });
  visitors.forEach((visitor) => userSet.add(visitor));
  userSet.delete(user);
  return Array.from(userSet);
}

function addScoreToFriendsOfFriends(
  user,
  friendPairs,
  friendsOfUser,
  userInfoList
) {
  friendsOfUser.forEach((friendOfuser) => {
    let friendsOfFriend = findFriendsOfUser(friendOfuser, friendPairs).filter(
      (friend) => friend !== user
    );
    for (const userInfo of userInfoList) {
      if (friendsOfFriend.includes(userInfo.id)) userInfo.score += 10;
    }
  });
}

function findFriendsOfUser(user, friendPairs) {
  return friendPairs
    .filter((friend) => friend.includes(user))
    .map(([userA, userB]) => (userA === user ? userB : userA));
}

function addScoreToVisitors(visitors, userInfoList) {
  visitors.forEach((visitor) => {
    userInfoList.find((userInfo) => userInfo.id === visitor).score += 1;
  });
}

function makeRecommendUserList(userInfoList, maxLength) {
  let recommendUserList;

  recommendUserList = userInfoList
    .filter((userInfo) => userInfo.score > 0 && userInfo.isFriend === false)
    .sort(compareScoreAndAlphabet)
    .map((userInfo) => userInfo.id);
  return recommendUserList.length <= maxLength
    ? recommendUserList
    : recommendUserList.slice(0, maxLength);
}

function compareScoreAndAlphabet(userInfoA, userInfoB) {
  if (userInfoA.score < userInfoB.score) return 1;
  else if (userInfoA.score > userInfoB.score) return -1;
  else return userInfoA.id < userInfoB.id ? -1 : 1;
}

module.exports = problem7;
