function problem7(user, friends, visitors) {
  const usersFriends = [...new Set(friends.filter((list) => list.includes(user)).flat())];

  const newFriends = getNewMembers(usersFriends, friends.flat());
  const newVisitors = getNewMembers(usersFriends, visitors);

  const newFriendScore = calcScore(newFriends, 10);
  const newVisitorScore = calcScore(newVisitors, 1);

  const totalScore = Object.assign({}, newFriendScore, newVisitorScore);

  let answer = Object.entries(totalScore)
    .sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] < b[0] ? -1 : 1;
      }
      return b[1] - a[1];
    })
    .map((member) => member[0]);

  return answer;
}

const calcScore = (list, score) => {
  let result = {};
  list.map((member) => (result[member] = (result[member] || 0) + score));

  return result;
};

const getNewMembers = (usersFriends, list) => {
  let result = [];
  list.map((member) => {
    if (!usersFriends.includes(member)) {
      result.push(member);
    }
  });
  return result;
};

module.exports = problem7;
