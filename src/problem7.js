function problem7(user, friends, visitors) {
  var answer;
  const FRIEND_SCORE = 10;
  const VISTOR_SCORE = 1;
  const userFriends = getUserFriend(user, friends);
  const friendOfFriends = friendOfFriend(userFriends, friends, user);
  const friendScores = getScore(friendOfFriends, FRIEND_SCORE);
  const vistorScores = getScore(visitors, VISTOR_SCORE);
  const friendAndVistors = combineFriendVistor(friendScores, vistorScores);
  const recommendations = recommendationList(friendAndVistors);
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
  const results = [];
  for (let i = 0; i < onlyLists.length; i++) {
    results.push([onlyLists[i], 0]);
  }
  for (let i = 0; i < onlyLists.length; i++) {
    for (let j = 0; j < lists.length; j++) {
      if (onlyLists[i] === lists[j]) {
        results[i][1] += score;
      }
    }
  }
  return results;
}

function combineFriendVistor(friends, visitors) {
  const results = [];
  results.push(...friends, ...visitors);
  return sortingScores(results);
}

function sortingScores(lists) {
  for (let i = 1; i < lists.length; i++) {
    for (let j = i; j > 0; j--) {
      if (lists[j][1] === lists[j - 1][1]) {
        const sorted = sortingNames([lists[j - 1][0], lists[j][0]]);
        lists[j - 1][0] = sorted[0];
        lists[j][0] = sorted[1];
      }
      if (lists[j][1] > lists[j - 1][1]) {
        let temp = lists[j];
        lists[j] = lists[j - 1];
        lists[j - 1] = temp;
      } else {
        break;
      }
    }
  }
  return lists;
}

function sortingNames(lists) {
  return lists.sort();
}

function recommendationList(lists) {
  const results = [];
  for (let i = 0; i < lists.length; i++) {
    results.push(lists[i][0]);
  }
  return results;
}

function checkUserFriendsInList(userFriends, results) {
  for (let i = 0; i < userFriends.length; i++) {
    results.splice(results.indexOf(userFriends[i]), 1);
  }
  return results;
}

module.exports = problem7;
