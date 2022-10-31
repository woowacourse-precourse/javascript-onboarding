function getNewMembers(followFriends, list) {
  let result = [];
  list.map((member) => {
    if (!followFriends.includes(member)) {
      result.push(member);
    }
  });
  return result;
}
function problem7(user, friends, visitors) {
  const followFriends = [
    ...new Set(friends.filter((list) => list.includes(user)).flat()),
  ];
  const newFriends = getNewMembers(followFriends, friends.flat());
  const newVisitors = getNewMembers(followFriends, visitors);
}

module.exports = problem7;
