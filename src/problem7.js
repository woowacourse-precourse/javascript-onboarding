function problem7(user, friends, visitors) {
  var answer = [];
  let isFriends = [];
  let newFriends = [];
  let isVisit = [];

  for (let i = 0; i < friends.length; i++) {
    if (friends[i].includes(user)) {
      isFriends.push(...friends[i]);
    }
  }

  isFriends = new Set(isFriends);
  isFriends = [...isFriends];

  for (let i = 0; i < friends.length; i++) {
    if (isFriends.length > 0) {
      newFriends.push(...friends[i].filter((x) => !isFriends.includes(x)));
    }
  }

  if (visitors.length > 0) {
    isVisit.push(...visitors.filter((x) => !set.includes(x)));
  }

  return answer;
}

module.exports = problem7;
