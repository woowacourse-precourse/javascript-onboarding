function problem7(user, friends, visitors) {
  let friendsArr = makeAllFriendsArr(friends);
}
function makeAllFriendsArr(friends) {
  let friendsArr = friends.reduce((acc, cur) => [...acc, ...cur]);
  return Array.from(new Set(friendsArr));
}
function findAlreadyFriends(user, friends) {
  let alreadyFriendsArr = [];
  for (let i = 0; i < friends.length; i++) {
    if (user === friends[i][0]) alreadyFriendsArr.push(friends[i][1]);
    if (user === friends[i][1]) alreadyFriendsArr.push(friends[i][0]);
  }
  return alreadyFriendsArr;
}
module.exports = problem7;
