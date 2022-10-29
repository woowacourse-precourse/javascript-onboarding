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
module.exports = problem7;
