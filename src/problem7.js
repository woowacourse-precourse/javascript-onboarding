function problem7(user, friends, visitors) {
  var answer = [];
  let isFriends = [];
  let newFriends = [];
  let isVisit = [];
  let count = [];

  for (let i = 0; i < friends.length; i++) {
    if (friends[i].includes(user)) {
      isFriends.push(...friends[i]);
    }
  }

  isFriends = new Set(isFriends);
  isFriends = [...isFriends];

  for (let i = 0; i < friends.length; i++) {
    if (friends[i].filter((x) => !isFriends.includes(x)).length === 1) {
      newFriends.push(...friends[i].filter((x) => !isFriends.includes(x)));
    }
  }

  if (visitors.length > 0) {
    isVisit.push(...visitors.filter((x) => !isFriends.includes(x)));
  }

  newFriends.sort();
  isVisit.sort();

  for (let el of newFriends) {
    count[el] = (count[el] || 0) + 10;
  }

  for (let el of isVisit) {
    count[el] = (count[el] || 0) + 1;
  }

  let sorted = Object.fromEntries(
    Object.entries(count).sort(([, a], [, b]) => b - a)
  );

  for (let i = 0; i < 5; i++) {
    if (!Object.keys(sorted)[i] !== true) {
      answer.push(Object.keys(sorted)[i]);
    }
  }

  return answer;
}

module.exports = problem7;
