function problem7(user, friends, visitors) {
  let answer;
  let alreadyFriends = findFriends(user, friends);

  return answer;
}

function findFriends(user, friends) {
  let alreadyFriends = [];

  for (i = 0; i < friends.length; i++) {
    if (friends[i].includes(user)) {
      if (friends[i][0] === user) alreadyFriends.push(friends[i][1]);
      else alreadyFriends.push(friends[i][0]);
    }
  }

  return alreadyFriends;
}
module.exports = problem7;
