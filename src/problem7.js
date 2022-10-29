function problem7(user, friends, visitors) {
  var answer;
  return answer;
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
module.exports = problem7;
