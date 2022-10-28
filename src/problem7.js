function problem7(user, friendPairs, visitors) {
  let answer;
  let userInfoList;
  let friendsOfUser;

  friendsOfUser = findFriendsOfUser(user, friendPairs);
  userInfoList = makeUserInfoList(user, friendPairs, visitors, friendsOfUser);
  addScoreToFriendsOfFriends(user, friendPairs, friendsOfUser, userInfoList);
  console.log(userInfoList);
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

problem7(
  "mrko",
  [
    ["donut", "andole"],
    ["donut", "jun"],
    ["donut", "mrko"],
    ["shakevan", "andole"],
    ["shakevan", "jun"],
    ["shakevan", "mrko"],
  ],
  ["bedi", "bedi", "donut", "bedi", "shakevan"]
);

module.exports = problem7;

/*
** 내 친구의 친구다 -> +10점
mrko: (donut, shakevan)

donut: (andole, jun, mrko)
shakevan: (andole, mrko)

andole: (donut, shakevan)
jun: (donut)
*/

/*
friends
[
  ["donut", "andole"],
  ["donut", "jun"],
  ["donut", "mrko"],
  ["shakevan", "andole"],
  ["shakevan", "jun"],
  ["shakevan", "mrko"],
]

visitors
["bedi", "bedi", "donut", "bedi", "shakevan"];
*/
