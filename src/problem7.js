function problem7(user, friends, visitors) {
  var answer;
  const FRIEND_SCORE = 10;
  const VISTOR_SCORE = 1;
  const userFriends = getUserFriend(user, friends);
  const friendOfFriends = friendOfFriend({ userFriends, friends, user });
  const friendScore = getScore(friendOfFriends, FRIEND_SCORE);
  const vistorScore = getScore(visitors, VISTOR_SCORE);
  const friendAndVistor = combineFriendVistor(friendScore, vistorScore);
  const sortedName = sortingName(friendAndVistor);
  const sortedScore = sortingScore(sortedName);
  const recommendations = recommendationList(sortedScore);
  answer = checkUserFriendsInList(userFriends, recommendations);
  return answer;
}

function getUserFriend(user, friends) {
  const results = [];
  friends.forEach((_, i) => {
    if (friends[i][0] === user) results.push(friends[i][1]);
    if (friends[i][1] === user) results.push(friends[i][0]);
  });
  return results;
}

function friendOfFriend({ userFriends, friends, user }) {
  const results = [];
  friends.forEach((_, i) => {
    finding({ userFriends, friends, user, results, i });
  });
  return results;
}

function finding({ userFriends, friends, user, results, i }) {
  userFriends.forEach((_, j) => {
    if (friends[i][0] === userFriends[j] && friends[i][1] !== user)
      results.push(friends[i][1]);
    if (friends[i][1] === userFriends[j] && friends[i][0] !== user)
      results.push(friends[i][0]);
  });
}

function getScore(lists, score) {
  const onlyLists = Array.from(new Set(lists));
  const result = {};
  makeOnlyList(onlyLists, result);
  onlyLists.forEach((_, i) => {
    scoring({ onlyLists, lists, result, score, i });
  });
  return result;
}

function makeOnlyList(onlyLists, result) {
  onlyLists.forEach((_, i) => {
    result[onlyLists[i]] = 0;
  });
}

function scoring({ onlyLists, lists, result, score, i }) {
  lists.forEach((_, j) => {
    if (onlyLists[i] === lists[j]) result[onlyLists[i]] += score;
  });
}

function combineFriendVistor(friend, visitor) {
  const result = { ...friend, ...visitor };
  return result;
}

function sortingName(list) {
  const result = Object.entries(list).sort((a, b) => {
    return a[0].charCodeAt(0) - b[0].charCodeAt(0);
  });
  return Object.fromEntries(result);
}

function sortingScore(list) {
  const result = Object.entries(list).sort((a, b) => b[1] - a[1]);
  return Object.fromEntries(result);
}

function recommendationList(list) {
  const results = Object.keys(list);
  return results;
}

function checkUserFriendsInList(userFriends, results) {
  userFriends.forEach((_, i) => {
    results.splice(results.indexOf(userFriends[i]), 1);
  });
  return results;
}

module.exports = problem7;
