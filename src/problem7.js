function problem7(user, friends, visitors) {
  var friendsDict = new Proxy(
    {},
    {
      get: (target, name) => (name in target ? target[name] : 0),
    }
  );
  var answer = new Array(0);
  let userFriends = new Array(0);
  for (var info of friends) {
    if (info[0] != user) {
      friendsDict[info[0]] = 0;
    }
    if (info[1] != user) {
      friendsDict[info[1]] = 0;
    }
    if (info[0] == user) {
      userFriends.push(info[1]);
      friendsDict[info[1]] = -110000;
    }
    if (info[1] == user) {
      userFriends.push(info[0]);
      friendsDict[info[0]] = -110000;
    }
  }
  for (var info of friends) {
    if (userFriends.indexOf(info[0]) >= 0) {
      if (info[1] != user) {
        friendsDict[info[1]] += 10;
      }
    }
    if (userFriends.indexOf(info[1]) >= 0) {
      if (info[0] != user) {
        friendsDict[info[0]] += 10;
      }
    }
  }
  for (var info of visitors) {
    friendsDict[info] += 1;
  }
  var sortedFriends = [];
  for (var friend in friendsDict) {
    sortedFriends.push([friend, friendsDict[friend]]);
  }
  // console.log(sortedFriends);
  sortedFriends.sort(function (a, b) {
    if (a[1] > b[1]) return -1;
    else if (a[1] < b[1]) return 1;
    else {
      if (a[1] > b[1]) return 1;
      else if (a[1] < b[1]) return -1;
    }
  });
  let cnt = 0;
  for (var friend of sortedFriends) {
    if (friend[1] > 0) {
      answer.push(friend[0]);
      cnt += 1;
      if (cnt == 5) break;
    }
  }
  return answer;
}

module.exports = problem7;
