function problem7(user, friends, visitors) {
  var answer = getScore(user, friends, visitors);
  return answer;
}
function getScore(user, friends, visitors) {
  const friendList = getFriendsList(user, friends);
  const score = getAcquaintanceScore(user, friends, friendList);
  applyVisitorScore(score, visitors, friendList);
  const scoreArray = getArray(score);
  return getMaxFive(scoreArray);
}
function getFriendsList(user, friends) {
  const friendList = [];
  for (let x = 0; x < friends.length; x++) {
    if (friends[x][0] == user) friendList.push(friends[x][1]);
    if (friends[x][1] == user) friendList.push(friends[x][0]);
  }
  return friendList;
}
function getAcquaintanceScore(user, friends, friendList) {
  const acquaintance = {};
  for (let x = 0; x < friends.length; x++) {
    if (!friends[x].includes(user)) {
      if (friendList.includes(friends[x][0]))
        applyScore(acquaintance, friends[x][1]);
      if (friendList.includes(friends[x][1]))
        applyScore(acquaintance, friends[x][0]);
    }
  }
  return acquaintance;
}
function applyScore(acquaintance, target) {
  if (acquaintance[target]) acquaintance[target] += 10;
  else acquaintance[target] = 10;
}
function applyVisitorScore(acquaintance, visitors, friendList) {
  visitors.forEach((visitor) => {
    if (!friendList.includes(visitor)) {
      if (acquaintance[visitor]) acquaintance[visitor] += 1;
      else acquaintance[visitor] = 1;
    }
  });
}
function getArray(score) {
  const resultArray = [];
  for (let name in score) {
    resultArray.push([name, score[name]]);
  }
  resultArray.sort((prev, cur) => {
    if (prev[1] < cur[1]) return 1;
    if (prev[1] > cur[1]) return -1;
    if (prev[0] > cur[0]) return 1;
    if (prev[0] < cur[0]) return -1;
  });
  return resultArray;
}
function getMaxFive(array) {
  const result = [];
  array.forEach((one) => {
    if (one[1] > 0 && result.length <= 5) result.push(one[0]);
  });
  return result;
}
module.exports = problem7;
