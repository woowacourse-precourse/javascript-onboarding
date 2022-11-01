function getUserFriend(user, friends) {
  let userFriend = [];
  for (let i = 0; i < friends.length; i++) {
    let isFriend = friends[i].indexOf(user);
    if (isFriend !== -1) {
      userFriend.push(friends[i][1 - isFriend]);
    }
  }
  return userFriend;
}

function problem7(user, friends, visitors) {
  var answer = [];
  let recommendScore = {};
  let userFriends = getUserFriend(user, friends);
  let scoreKey = Object.keys(recommendScore);
  for (let i = 0; i < userFriends.length; i++) {
    let acquaintance = getUserFriend(userFriends[i], friends);
    for (let j = 0; j < acquaintance.length; j++) {
      if (acquaintance[j] === user) continue;
      if (userFriends.includes(acquaintance[j])) continue;
      if (scoreKey.includes(acquaintance[j])) {
        recommendScore[acquaintance[j]] += 10;
      } else {
        recommendScore[acquaintance[j]] = 10;
      }
    }
  }

  scoreKey = Object.keys(recommendScore);
  for (let i = 0; i < visitors.length; i++) {
    if (userFriends.includes(visitors[i])) continue;
    if (scoreKey.includes(visitors[i])) {
      recommendScore[visitors[i]] += 1;
    } else {
      recommendScore[visitors[i]] = 1;
    }
  }

  for (var name in recommendScore) {
    answer.push([name, recommendScore[name]]);
  }
  answer.sort((a, b) => {
    if (a[1] === b[1]) {
      if (a[0] > b[0]) return 1;
      else if (a[0] < b[0]) return -1;
      else return 0;
    } else {
      return b[1] - a[1];
    }
  });

  answer = answer.map((v, i) => {
    if (i < 5) return v[0];
  });
  return answer;
}

module.exports = problem7;
