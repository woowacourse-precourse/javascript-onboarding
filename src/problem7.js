function getNewMembers(followFriends, list) {
  let result = [];
  list.map((member) => {
    if (!followFriends.includes(member)) {
      result.push(member);
    }
  });
  return result;
}
const recommendScore = (list, score) => {
  let result = {};
  list.map((member) => (result[member] = (result[member] || 0) + score));
  return result;
};
function problem7(user, friends, visitors) {
  const followFriends = [
    ...new Set(friends.filter((list) => list.includes(user)).flat()),
  ];
  const newFriends = getNewMembers(followFriends, friends.flat());
  const newVisitors = getNewMembers(followFriends, visitors);
  const friendScore = recommendScore(newFriends, 10);
  const visitorScore = recommendScore(newVisitors, 1);
}

module.exports = problem7;
