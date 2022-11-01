function problem7(user, friends, visitors) {
  const USER_FRIENDS = getUserFriendesArray(user, friends);
  let recommendUser = getRecommendUser(user, friends, visitors, USER_FRIENDS);

  recommendUser = scoreByFriend(recommendUser, friends, user, USER_FRIENDS);
  recommendUser = scoreByVisitor(recommendUser, visitors);

  const recommendUserArray = sortRecommendUser(recommendUser);

  return recommendUserArray.map((user) => user[0]).slice(0, 5);
}

function getUserFriendesArray(user, friends) {
  let userFriendsArray = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i][0] === user) userFriendsArray.push(friends[i][1]);
    else if (friends[i][1] === user) userFriendsArray.push(friends[i][0]);
  }

  return deleteDuplication(userFriendsArray);
}

function getRecommendUser(user, friends, visitors, USER_FRIENDS) {
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

  return initObj(deleteDuplication(notUserFriends));
}

function scoreByFriend(recommendUser, friends, user, USER_FRIENDS) {
  for (let i = 0; i < friends.length; i++) {
    if (
      recommendUser[friends[i][0]] !== undefined &&
      friends[i][1] !== user &&
      USER_FRIENDS.includes(friends[i][1])
    )
      recommendUser[friends[i][0]] += 10;

    if (
      recommendUser[friends[i][1]] !== undefined &&
      friends[i][0] !== user &&
      USER_FRIENDS.includes(friends[i][0])
    )
      recommendUser[friends[i][1]] += 10;
  }
  return recommendUser;
}

function scoreByVisitor(recommendUser, visitors) {
  for (let i = 0; i < visitors.length; i++) {
    if (recommendUser[visitors[i]] !== undefined)
      recommendUser[visitors[i]] += 1;
  }

  return recommendUser;
}

function sortRecommendUser(recommendUser) {
  const recommendUserArray = objectToArray(recommendUser);

  recommendUserArray.sort((a, b) => sortMorePoint(a, b));
  recommendUserArray.sort((a, b) => sortNamePoint(a, b));

  return recommendUserArray;
}

function initObj(array) {
  let obj = {};
  array.map((el) => (obj[el] = 0));
  return obj;
}

function deleteDuplication(array) {
  return Array.from(new Set(array));
}

function objectToArray(object) {
  const array = [];
  for (key in object) {
    if (object[key] > 0) array.push([key, object[key]]);
  }
  return array;
}

function sortMorePoint(A, B) {
  return A[1] > B[1] ? -1 : 1;
}

function sortNamePoint(A, B) {
  if (A[1] === B[1]) return A[0] > B[0] ? 1 : -1;
  return 0;
}

module.exports = problem7;
