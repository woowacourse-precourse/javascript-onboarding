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
    if (friends[i][0].length < 1 || friends[i][0].length > 30) {
      return false;
    }
    if (friends[i][1].length < 1 || friends[i][1].length > 30) {
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

function getFriendList(friends) {
  const friendList = {};

  for (let i = 0; i < friends.length; i++) {
    pushFriendList(friendList, friends[i]);
    // 2nd
    // if (!isFriendListKey(friendList, friends[i][0])) {
    //   friendList[friends[i][0]] = [];
    // }
    // friendList[friends[i][0]].push(friends[i][1]);
    // if (!isFriendListKey(friendList, friends[i][1])) {
    //   friendList[friends[i][1]] = [];
    // }
    // friendList[friends[i][1]].push(friends[i][0]);
    //1st
    // if (Object.keys(friendList).includes(friends[i][0])) friendList[friends[i][0]].push(friends[i][1]);
    // else friendList[friends[i][0]] = [friends[i][1]];
    // if (Object.keys(friendList).includes(friends[i][1])) friendList[friends[i][1]].push(friends[i][0]);
    // else friendList[friends[i][1]] = [friends[i][0]];
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
    // if (isFriendListKey())
    if (friendOfUser.includes(friendListKey[i]) || friendListKey[i].includes(user)) {
      continue;
    }
    recommandScore[friendListKey[i]] = friendList[friendListKey[i]].filter(x => friendOfUser.includes(x)).length * 10;
  }
  return recommandScore;
}

function getVisitorRecommandScore(recommandScore, friendList, visitors) {
  for (let i = 0; i < visitors.length; i++) {
    if (isIncludesObjectKeys(friendList, visitors[i])) {
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
  return getVisitorRecommandScore(recommandScore, friendList, visitors);
}

function sortResult(recommandScore) {
  const recommandScoreValue = new Set(Object.values(recommandScore).sort(function (a, b) { return b - a; }));
  const recommandScoreKey = Object.keys(recommandScore);
  const result = [];
  for (let value of recommandScoreValue.values()) {
    const tmpArr = [];
    for (let i = 0; i < recommandScoreKey.length; i++) {
      if (recommandScore[recommandScoreKey[i]] === value) tmpArr.push(recommandScoreKey[i]);
    }
    tmpArr.sort();
    result.push(...tmpArr);
  }
  return result;
}

function problem7(user, friends, visitors) {
  if (!isValidUser(user) || !isValidFriends(friends) || !isValidVisitors(visitors)) {
    return;
  }
  const friendList = getFriendList(friends);
  const recommandScore = getRecommandScore(user, friendList, visitors);
  return sortResult(recommandScore);
}

module.exports = problem7;

console.log(problem7("mrko", [["donut", "jun"], ["donut", "andole"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"]], ["bedi", "bedi", "donut", "bedi", "shakevan"]))