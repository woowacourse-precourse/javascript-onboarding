function findFriends(friends, user) {
  const friendsArr = [];
  for (const friend of friends) {
    if (friend[0] === user) {
      friendsArr.push(friend[1]);
    } else if (friend[1] === user) {
      friendsArr.push(friend[0]);
    }
  }
  return friendsArr;
}

function problem7(user, friends, visitors) {
  var answer;
  const friendsArr = findFriends(friends, user);
  return answer;
}

module.exports = problem7;
