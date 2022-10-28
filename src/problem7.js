function problem7(user, fren, visitors) {
  let answer;

  makeUserInfoList(user, friends, visitors);
  return answer;
}

function makeUserInfoList(user, friends, visitors) {
  let userInfoList;
  let friendsOfUser;

  friendsOfUser = findFriendsOfUser(friends);
  userInfoList = makeUserList(user, friends, visitors).map((user) => {
    return { id: user, score: 0, isFriend: friendsOfUser.includes(user) };
  });
  console.log(userInfoList);
  return userInfoList;
}

function findFriendsOfUser(friends) {
  return friends
    .filter((friend) => friend.includes(user))
    .map(([userA, userB]) => (userA === user ? userB : userA));
}

function makeUserList(user, friends, visitors) {
  let userSet;

  userSet = new Set();
  friends.forEach(([userA, userB]) => {
    userSet.add(userA);
    userSet.add(userB);
  });
  visitors.forEach((visitor) => userSet.add(visitor));
  userSet.delete(user);
  return Array.from(userSet);
}

let user = "mrko";
let friends = [
  ["donut", "andole"],
  ["donut", "jun"],
  ["donut", "mrko"],
  ["shakevan", "andole"],
  ["shakevan", "jun"],
  ["shakevan", "mrko"],
];
let visitors = ["bedi", "bedi", "donut", "bedi", "shakevan"];

problem7(user, friends, visitors);

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
