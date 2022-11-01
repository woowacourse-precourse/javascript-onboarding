function problem7(user, friends, visitors) {
  let friendsArr = makeAllFriendsArr(friends);
  let map = new Map();
  for (let i = 0; i < friendsArr.length; i++) {
    map.set(friendsArr[i], 0);
  }
  let alreadyFriendsArr = findAlreadyFriends(user, friends);
  let willBeFriendsArr = findWillBeFriends(friends, alreadyFriendsArr);
  for (let i = 0; i < willBeFriendsArr.length; i++) {
    let score = map.get(willBeFriendsArr[i]) + 10;
    map.set(willBeFriendsArr[i], score);
  }
  for (let i = 0; i < visitors.length; i++) {
    if (!map.has(visitors[i])) map.set(visitors[i], 0);
    let score = map.get(visitor현s[i]) + 1;
    map.set(visitors[i], score);
  }
  let beforeSortFriendsMap = removeSelfAndAlreadyFriends(
      user,
      alreadyFriendsArr,
      map
  );
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
function findWillBeFriends(friends, alreadyFriendsArr) {
  let willBeFriendsArr = [];
  for (let i = 0; i < friends.length; i++) {
    if (alreadyFriendsArr.includes(friends[i][0]))
      willBeFriendsArr.push(friends[i][1]);
    if (alreadyFriendsArr.includes(friends[i][1]))
      willBeFriendsArr.push(friends[i][0]);
  }
  return willBeFriendsArr;
}
function removeSelfAndAlreadyFriends(user, alreadyFriendsArr, map) {
  for (let i = 0; i < alreadyFriendsArr.length; i++) {
    map.delete(alreadyFriendsArr[i]);
  }
  map.delete(user);
  return map;
}
module.exports = problem7;
