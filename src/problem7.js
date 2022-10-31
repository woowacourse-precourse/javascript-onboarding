function problem7(user, friends, visitors) {
  let answer = [];
  let myFriends = [];
  let friendsFriends = [];
  let friendsFriendsVisit = [];
  let score = [];

  for (let i = 0; i < friends.length; i++) {
    if (friends[i].includes(user)) {
      myFriends.push(...friends[i]);
    }
  }

  for (let i = 0; i < friends.length; i++) {
    if (friends[i].filter((x) => !myFriends.includes(x)).length === 1) {
      friendsFriends.push(...friends[i].filter((x) => !myFriends.includes(x)));
    }
  }
  friendsFriends.sort();

  if (visitors) {
    friendsFriendsVisit.push(...visitors.filter((x) => !myFriends.includes(x)));
  }
  friendsFriendsVisit.sort();

  for (let name of friendsFriends) {
    score[name] = (score[name] || 0) + 10;
  }

  for (let name of friendsFriendsVisit) {
    score[name] = (score[name] || 0) + 1;
  }

  let sorted = Object.fromEntries(
    Object.entries(score).sort(([, a], [, b]) => b - a)
  );

  for (let i = 0; i < 5; i++) {
    if (!Object.keys(sorted)[i] !== true) {
      answer.push(Object.keys(sorted)[i]);
    }
  }

  return answer;
}

module.exports = problem7;
