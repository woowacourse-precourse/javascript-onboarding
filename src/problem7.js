function problem7(user, friends, visitors) {
  let friendsArr = makeAllFriendsArr(friends);
}
function makeAllFriendsArr(friends) {
  let friendsArr = friends.reduce((acc, cur) => [...acc, ...cur]);
  return Array.from(new Set(friendsArr));
}

module.exports = problem7;
