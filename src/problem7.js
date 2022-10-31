function getFriendList(friends) {
  let friendDict = {};
  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (!friendDict[friends[i][j]]) {
        friendDict[friends[i][j]] = [friends[i][1 - j]];
      } else {
        friendDict[friends[i][j]].push(friends[i][1 - j]);
      }
    }
  }
  return friendDict;
}

function sortDict(dict, user) {
  let result = [];
  let sorted = Object.entries(dict).sort((a, b) => {
    if (b[1] - a[1] !== 0) {
      return b[1] - a[1];
    } else {
      return b[0] - a[0];
    }
  });

  for (let element of sorted) {
    if (element[0] === user) {
      continue;
    }
    result.push(element[0]);
  }

  return result;
}

function problem7(user, friends, visitors) {
  var answer;
  let userFriend = [];
  let friendDict = getFriendList(friends);
  let scoreDict = {};
  userFriend = friendDict[user];
  let notUserFriend = [];
  let allPeople = Object.keys(friendDict);
  for (let i = 0; i < allPeople.length; i++) {
    if (!userFriend.includes(allPeople[i])) {
      notUserFriend.push(allPeople[i]);
      scoreDict[allPeople[i]] = 0;
    }
  }
  for (let i = 0; i < notUserFriend.length; i++) {
    for (let j = 0; j < friendDict[notUserFriend[i]].length; j++) {
      if (userFriend.includes(friendDict[notUserFriend[i]][j])) {
        scoreDict[notUserFriend[i]] += 10;
      }
    }
  }

  for (let i = 0; i < visitors.length; i++) {
    if (!userFriend.includes(visitors[i])) {
      if (scoreDict[visitors[i]]) {
        scoreDict[visitors[i]]++;
      } else {
        scoreDict[visitors[i]] = 1;
      }
    }
  }
  answer = sortDict(scoreDict, user);

  return answer;
}

module.exports = problem7;
