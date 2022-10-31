function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

function getUsersFriend(user, friends) {
  const userFriend = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i][0] === user) userFriend.push(friends[i][1]);
    if (friends[i][1] === user) userFriend.push(friends[i][0]);
  }
  return userFriend;
}

function FriendsOfFriends(userFriends, friends, user) {
  const scores = [];
  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < userFriends.length; j++) {
      if (friends[i][0] === userFriends[j] && friends[i][1] !== user)
        scores.push(friends[i][1]);
      if (friends[i][1] === userFriends[j] && friends[i][0] !== user)
        scores.push(friends[i][0]);
    }
  }
  return scores;
}

function getScores(array, score) {
  const Lists = Array.from(new Set(array));
  const results = [];
  for (let i = 0; i < Lists.length; i++) {
    results.push([Lists[i], 0]);
  }
  for (let i = 0; i < Lists.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (Lists[i] === array[j]) {
        results[i][1] += score;
      }
    }
  }
  return results;
}

module.exports = problem7;
