function problem7(user, friends, visitors) {
  var answer = [];
  let user_friend = [];
  var map = new Map();
  for (var i = 0; i < friends.length; i++) {
    if (friends[i][0] == user) {
      user_friend.push(friends[i][1]);
      continue;
    } else if (friends[i][1] == user) {
      user_friend.push(friends[i][0]);
      continue;
    }
  }
  for (var i = 0; i < user_friend.length; i++) {
    for (var j = 0; j < friends.length; j++) {
      if (friends[j][0] == user_friend[i]) {
        if (map.has(friends[j][1])) {
          map.set(friends[j][1], map.get(friends[j][1]) + 10);
          continue;
        }
        map.set(friends[j][1], 10);
      } else if (friends[j][1] == user_friend[i]) {
        if (map.has(friends[j][0])) {
          map.set(friends[j][0], map.get(friends[j][0]) + 10);
          continue;
        }
        map.set(friends[j][0], 10);
      }
    }
  }
  for (var i = 0; i < visitors.length; i++) {
    if (map.has(visitors[i])) {
      map.set(visitors[i], map.get(visitors[i]) + 1);
    } else {
      map.set(visitors[i], 1);
    }
  }
  map.delete(user);
  for (var i = 0; i < user_friend.length; i++) {
    map.delete(user_friend[i]);
  }
  const arraymap = [...map];
  arraymap.sort();
  arraymap.sort((a, b) => b[1] - a[1]);
  for (var i = 0; i < arraymap.length; i++) {
    answer.push(arraymap[i][0]);
  }

  return answer;
}

module.exports = problem7;
