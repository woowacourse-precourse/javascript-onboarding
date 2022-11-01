function isUser(user) {
  if (typeof user === "string" && user.length > 0 && user.length < 31) {
    return 1;
  }
  return 0;
}

function validFriendArr(friendArr) {
  const aId = friendArr[0];
  const bId = friendArr[1];
  if (
    !(
      (aId.length > 0 && aId.length < 31) ||
      (bId.length > 0 && bId.length < 31)
    )
  ) {
    return 0;
  }
  return 1;
}

function isFriend(friends) {
  // console.log(typeof friends);
  if (
    !(
      (friends.length >= 1 && friends.length <= 10000) ||
      typeof friends === "object"
    )
  ) {
    return 0;
  }
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length != 2) {
      return 0;
    }
    // console.log(friends.length);
    for (let i = 0; i < friends.length; i++) {
      if (validFriendArr(friends[i]) == 1);
      // console.log(friends.length);
      return 1;
    }
    return 0;
  }
}

function isVisitiors(visitors) {
  if (
    !(typeof visitors !== "object") ||
    (visitors.length >= 0 && visitors <= 10000)
  ) {
    return 1;
  }
  return 0;
}

function objectKey(friendList, friend) {
  if (Object.keys(friendList).includes(friend) == true) {
    return 1;
  }
  return 0;
}

function pushFriendList(friendList, friend) {
  for (let i = 0; i < 2; i++) {
    if (!objectKey(friendList, friend[i])) {
      friendList[friend[i]] = [];
    }
    console.log(friendList);
    friendList[friend[i]].push(friend[(i + 1) % 2]);
  }
}

function makeFriendList(user, friends) {
  const friendList = {};
  for (let i = 0; i < friends.length; i++) {
    pushFriendList(friendList, friends[i]);
  }
  if (!Object.keys(friendList).includes(user)) {
    friendList[user] = [];
  }
  return friendList;
}

function problem7(user, friends, visitors) {
  if (!isUser(user) || !isFriend(friends) || !isVisitiors(visitors)) {
    return;
  }
  const friendList = makeFriendList(user, friends);
  const score = getScore(user, friendList, visitors);
}

module.exports = problem7;
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
