function isValidUser(user) {
  if (typeof user !== 'string') {
    return false;
  }
  if (user.length < 1 || user.length > 30) {
    return false;
  }
  return true;
}

function isValidFriendsElement(friends) {
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length !== 2) {
      return false;
    }
    const idA = friends[i][0];
    const idB = friends[i][1];
    if (idA.length < 1 || idA.length > 30) {
      return false;
    }
    if (idB.length < 1 || idB.length > 30) {
      return false;
    }
  }
  return true;
}

function isValidFriends(friends) {
  if (typeof friends !== 'object') {
    return false;
  }
  if (friends.length < 1 || friends.length > 10000) {
    return false;
  }
  if (!isValidFriendsElement(friends)) {
    return false;
  }
  return true;
}

function isValidVisitors(visitors) {
  if (typeof visitors !== 'object') {
    return false;
  }
  if (visitors.length < 0 || visitors > 10000) {
    return false;
  }
  return true;
}

function isObjectKeys(friendList, friend) {
  return (Object.keys(friendList).includes(friend)) ? true : false;
}

function pushFriendList(friendList, friend) {
  for (let i = 0; i < 2; i++) {
    if (!isObjectKeys(friendList, friend[i])) {
      friendList[friend[i]] = [];
    }
    friendList[friend[i]].push(friend[(i + 1) % 2]);
  }
}

function getFriendList(user, friends) {
  const friendList = {};
  for (let i = 0; i < friends.length; i++) {
    pushFriendList(friendList, friends[i]);
  }
  if (!Object.keys(friendList).includes(user)) {
    friendList[user] = [];
  }
  return friendList;
}

function isIncludesObjectKeys(object, key) {
  return (Object.keys(object).includes(key)) ? true : false;
}

function getFriendRecommandScore(friendList, user) {
  const recommandScore = {};
  const friendOfUser = friendList[user];
  const friendListKey = Object.keys(friendList);
  for (let i = 0; i < friendListKey.length; i++) {
    if (friendOfUser.includes(friendListKey[i]) || friendListKey[i].includes(user)) {
      continue;
    }
    recommandScore[friendListKey[i]] = friendList[friendListKey[i]].filter(
      x => friendOfUser.includes(x)).length * 10;
  }
  return recommandScore;
}

function getVisitorRecommandScore(recommandScore, userFriendList, visitors) {
  for (let i = 0; i < visitors.length; i++) {
    if (userFriendList.includes(visitors[i])) {
      continue;
    }
    if (!isIncludesObjectKeys(recommandScore, visitors[i])) {
      recommandScore[visitors[i]] = 0;
    }
    recommandScore[visitors[i]]++;
  }
  return recommandScore;
}

function getRecommandScore(user, friendList, visitors) {
  const recommandScore = getFriendRecommandScore(friendList, user);
  return getVisitorRecommandScore(recommandScore, friendList[user], visitors);
}

function getSameValueArr(value, recommandScore) {
  const recommandScoreKey = Object.keys(recommandScore);
  const sameValueArr = new Array();
  for (let i = 0; i < recommandScoreKey.length; i++) {
    if (recommandScore[recommandScoreKey[i]] === value) {
      sameValueArr.push(recommandScoreKey[i]);
    }
  }
  return sameValueArr.sort();
}

function sortResult(recommandScore) {
  const recommandScoreValue = new Set(Object.values(recommandScore).sort(
    function (a, b) { return b - a; }));
  const resultArr = new Array();
  recommandScoreValue.delete(0);
  for (let value of recommandScoreValue.values()) {
    resultArr.push(...getSameValueArr(value, recommandScore));
  }
  return resultArr;
}

function problem7(user, friends, visitors) {
  if (!isValidUser(user) || !isValidFriends(friends) || !isValidVisitors(visitors)) {
    return;
  }
  const friendList = getFriendList(user, friends);
  const recommandScore = getRecommandScore(user, friendList, visitors);
  return sortResult(recommandScore);
}

module.exports = problem7;

// console.log(problem7("mrko", [["donut", "jun"], ["donut", "andole"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"]], ["bedi", "bedi", "donut", "bedi", "shakevan"]));

// console.log(problem7("mrko", [["donut", "jun"]], ["bedi", "bedi", "donut", "bedi", "shakevan"]));
