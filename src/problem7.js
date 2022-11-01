function getFriendsWithUser(user, friends) {
  let friendsWithUser = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].includes(user)) friendsWithUser.push(...friends[i]);
  }
  return friendsWithUser;
}

function makeNewFriends(friends, friendsWithUser) {
  let newFriends = [];
  friends.forEach((f) => {
    if (f.filter((x) => !friendsWithUser.includes(x)).length === 1) {
      newFriends.push(f.filter((x) => !friendsWithUser.includes(x)));
    }
  });
  return newFriends;
}

function doCount(arr, count, score) {
  arr.forEach((elem) => {
    count[elem] = (count[elem] || 0) + parseInt(score);
  });
}

function problem7(user, friends, visitors) {
  let visitArr = [];
  let count = [];

  friendsWithUser = [...new Set(getFriendsWithUser(user, friends))];
  newFriends = makeNewFriends(friends, friendsWithUser);

  if (visitors.length > 0) {
    visitArr.push(...visitors.filter((x) => !friendsWithUser.includes(x)));
  }

  newFriends.sort();
  visitArr.sort();

  doCount(newFriends, count, 10);
  doCount(visitArr, count, 1);

  let sortedCount = Object.fromEntries(
    Object.entries(count).sort(([, a], [, b]) => b - a)
  );

  const answer = [];
  for (let i = 0; i < 5; i++) {
    if (!Object.keys(sortedCount)[i] !== true) {
      answer.push(Object.keys(sortedCount)[i]);
    }
  }

  return answer;
}

module.exports = problem7;
