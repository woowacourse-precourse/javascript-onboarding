function isValidUser(user) {
  if (typeof user !== 'string') return false;
  if (user.length < 1 || user.length > 30) return false;
  return true;
}

function isValidFriendsElement(friends) {
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length !== 2) return false;
    if (friends[i][0].length < 1 || friends[i][0].length > 30) return false;
    if (friends[i][1].length < 1 || friends[i][1].length > 30) return false;
  }
  return true;
}

function isValidFriends(friends) {
  if (typeof friends !== 'object') return false;
  if (friends.length < 1 || friends.length > 10000) return false;
  if (!isValidFriendsElement(friends)) return false;
  return true;
}

function isValidVisitors(visitors) {
  if (typeof visitors !== 'object') return false;
  if (visitors.length < 0 || visitors > 10000) return false;
  return true;
}

function getFriendList(friends) {
  const friendList = {};

  for (let i = 0; i < friends.length; i++) {
    if (Object.keys(friendList).includes(friends[i][0])) friendList[friends[i][0]].push(friends[i][1]);
    else friendList[friends[i][0]] = [friends[i][1]];
    if (Object.keys(friendList).includes(friends[i][1])) friendList[friends[i][1]].push(friends[i][0]);
    else friendList[friends[i][1]] = [friends[i][0]];
  }
  return friendList;
}

function getRecommandScore(user, friendList, visitors) {
  const recommandScore = {};
  const friendsOfUser = friendList[user];
  const friendListKey = Object.keys(friendList);

  for (let i = 0; i < friendListKey.length; i++) {
    if (friendsOfUser.includes(friendListKey[i])) continue;
    if (friendListKey[i].includes(user)) continue;
    recommandScore[friendListKey[i]] = friendList[friendListKey[i]].filter(x => friendsOfUser.includes(x)).length * 10;
  }
  for (let i = 0; i < visitors.length; i++) {
    if (friendListKey.includes(visitors[i])) continue;
    if (Object.keys(recommandScore).includes(visitors[i])) recommandScore[visitors[i]]++;
    else recommandScore[visitors[i]] = 1;
  }
  return recommandScore;
}

function sortResult(recommandScore) {
  const recommandScoreValue = new Set(Object.values(recommandScore).sort(function(a, b) {return b - a;}));
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
  if (!isValidUser(user)) return ;
  if (!isValidFriends(friends)) return ;
  if (!isValidVisitors(visitors)) return ;

  const friendList = getFriendList(friends);
  const recommandScore = getRecommandScore(user, friendList, visitors);
  return sortResult(recommandScore);
}

module.exports = problem7;

console.log(problem7("mrko", [ ["donut", "jun"], ["donut", "andole"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ], ["bedi", "bedi", "donut", "bedi", "shakevan"]))