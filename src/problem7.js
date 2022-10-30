function problem7(user, friends, visitors) {
  var answer = [];
  let isFriends = [];

  for (let i = 0; i < friends.length; i++) {
    if (friends[i].includes(user)) {
      isFriends.push(...friends[i]);
    }
  }

  isFriends = new Set(isFriends);
  isFriends = [...isFriends];

  return answer;
}

module.exports = problem7;
