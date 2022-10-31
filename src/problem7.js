function problem7(user, friends, visitors) {
  var dumiArr = [];
  for (var i = 0; i < friends.length; i++) {
    for (var j = 0; j < friends[i].length; j++) {
      dumiArr.push(friends[i][j]);
    }
  }

  for (var i = 0; i < visitors.length; i++) {
    dumiArr.push(visitors[i]);
  }
  var set = new Set(dumiArr);
  dumiArr = [...set];

  dumiArr = dumiArr.filter((item) => item !== user);

  // 유저리스트 = friendMap
  var friendMap = new Map();
  for (var i = 0; i < dumiArr.length; i++) {
    friendMap.set(dumiArr[i], 0);
  }

  // 친구리스트 = userFriends
  var userFriends = [];

  for (var i = 0; i < friends.length; i++) {
    if (friends[i][0] == user) {
      userFriends.push(friends[i][1]);
    }
    if (friends[i][1] == user) {
      userFriends.push(friends[i][0]);
    }
  }

  // 점수 계산 ["donut", "shakevan"] 얘네랑 친구인 애들한테 +10
  for (var i = 0; i < friends.length; i++) {
    for (var j = 0; j < userFriends.length; j++) {
      if (friends[i][0] == userFriends[j]) {
        var beforeScore = friendMap.get(friends[i][1]); // 점수
        friendMap.delete(friends[i][1]);
        friendMap.set(friends[i][1], beforeScore + 10);
      }
      if (friends[i][1] == userFriends[j]) {
        var beforeScore = friendMap.get(friends[i][0]);
        friendMap.delete(friends[i][0]);
        friendMap.set(friends[i][0], beforeScore + 10);
      }
    }
  }
  friendMap.delete("mrko");

  for (var i = 0; i < visitors.length; i++) {
    var beforeScore = friendMap.get(visitors[i]); // 점수
    friendMap.delete(visitors[i]);
    friendMap.set(visitors[i], beforeScore + 1);
  }

  for (var i = 0; i < userFriends.length; i++) {
    friendMap.delete(userFriends[i]);
  }
  // let sortedByValueAsc = new Map([...friendMap].sort((a, b) => a[1] - b[1]).reverse());

  // let keyAscArray = [...friendMap];
  // keyAscArray.sort();
  // let keyAscMap = new Map(keyAscArray);

  let sortedDecsArray = [...friendMap];
  sortedDecsArray.sort((a, b) => b[1] - a[1]);
  let keyDescMap = new Map(sortedDecsArray);

  let answer = [];
  keyDescMap.forEach((value, key) => {
    answer.push(key);
  });

  return answer;
}

module.exports = problem7;
