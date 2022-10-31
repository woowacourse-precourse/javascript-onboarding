function getNewMembers(followFriends, list) {
  let result = [];
  list.map((member) => {
    if (!followFriends.includes(member)) {
      result.push(member);
    }
  });
  return result;
}
function recommendScore(list, score) {
  let result = {};
  list.map((member) => (result[member] = (result[member] || 0) + score));
  return result;
}
function recommentFriends(friendScore, visitorScore) {
  let result = [];
  const totalScore = Object.assign({}, friendScore, visitorScore);
  let totalResult = Object.entries(totalScore)
    .sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] < b[0] ? -1 : 1;
      }
      return b[1] - a[1];
    })
    .map((member) => member[0]);
  for (i = 0; i < totalResult.length; i++) {
    if (i === 5) break;
    result.push(totalResult[i]);
  }
  return result;
}
function problem7(user, friends, visitors) {
  const followFriends = [
    ...new Set(friends.filter((list) => list.includes(user)).flat()),
  ];
  const newFriends = getNewMembers(followFriends, friends.flat());
  const newVisitors = getNewMembers(followFriends, visitors);
  const friendScore = recommendScore(newFriends, 10);
  const visitorScore = recommendScore(newVisitors, 1);
  return recommentFriends(friendScore, visitorScore);
}

module.exports = problem7;
