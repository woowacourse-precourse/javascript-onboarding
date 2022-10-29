function problem7(user, friends, visitors) {
  const USER_FRIENDS = getUserFriendesArray(user, friends);
  const NOT_USER_FRIENDS = getNotUserFriendsArray(
    user,
    friends,
    visitors,
    USER_FRIENDS
  );
  const recommendUserMap = initObj(NOT_USER_FRIENDS);
  for (let i = 0; i < visitors.length; i++) {
    if (recommendUserMap[visitors[i]] !== undefined)
      recommendUserMap[visitors[i]] += 1;
  }
function getNotUserFriendsArray(user, friends, visitors, USER_FRIENDS) {
  const notUserFriends = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i][0] !== user && !USER_FRIENDS.includes(friends[i][0]))
      notUserFriends.push(friends[i][0]);
    if (friends[i][1] !== user && !USER_FRIENDS.includes(friends[i][1]))
      notUserFriends.push(friends[i][1]);
  }
  for (let i = 0; i < visitors.length; i++)
    if (
      !notUserFriends.includes(visitors[i]) &&
      !USER_FRIENDS.includes(visitors[i])
    )
      notUserFriends.push(visitors[i]);
  return deleteDuplication(notUserFriends);
}

function getUserFriendesArray(user, friends) {
  let userFriendsArray = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i][0] === user) userFriendsArray.push(friends[i][1]);
    else if (friends[i][1] === user) userFriendsArray.push(friends[i][0]);
  }

  return deleteDuplication(userFriendsArray);
}

function deleteDuplication(array) {
  return Array.from(new Set(array));
}

function initObj(array) {
  let obj = {};

  array.map((el) => (obj[el] = 0));

  return obj;
}

module.exports = problem7;
