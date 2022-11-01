function problem7(user, friends, visitors) {
  var answer;
  const FRIEND_SCORE = 10;
  const VISTOR_SCORE = 1;
  const userFriends = getUserFriend(user, friends);
  const friendOfFriends = friendOfFriend(userFriends, friends, user);
  const friendScores = getScore(friendOfFriends, FRIEND_SCORE);
  const vistorScores = getScore(visitors, VISTOR_SCORE);
  const friendAndVistors = combineFriendVistor(friendScores, vistorScores);
  const sortedName = sortingName(friendAndVistors);
  const sortedScore = sortingScore(sortedName);
  const recommendations = recommendationList(sortedScore);
  answer = checkUserFriendsInList(userFriends, recommendations);
  return answer;
}

function getUserFriend(user, friends) {
  const results = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i][0] === user) results.push(friends[i][1]);
    if (friends[i][1] === user) results.push(friends[i][0]);
  }
  return results;
}

function friendOfFriend(userFriends, friends, user) {
  const results = [];
  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < userFriends.length; j++) {
      if (friends[i][0] === userFriends[j] && friends[i][1] !== user)
        results.push(friends[i][1]);
      if (friends[i][1] === userFriends[j] && friends[i][0] !== user)
        results.push(friends[i][0]);
    }
  }
  return results;
}

function getScore(lists, score) {
  const onlyLists = Array.from(new Set(lists));
  const results = {};
  for (let i = 0; i < onlyLists.length; i++) {
    results[onlyLists[i]] = 0;
  }
  for (let i = 0; i < onlyLists.length; i++) {
    for (let j = 0; j < lists.length; j++) {
      if (onlyLists[i] === lists[j]) {
        results[onlyLists[i]] += score;
      }
    }
  }
  return results;
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
  const result = Object.entries(list).sort(([, a], [, b]) => b - a);
  return Object.fromEntries(result);
}

function recommendationList(list) {
  const results = Object.keys(list);
  return results;
}

function checkUserFriendsInList(userFriends, results) {
  for (let i = 0; i < userFriends.length; i++) {
    results.splice(results.indexOf(userFriends[i]), 1);
  }
  return results;
}

module.exports = problem7;
