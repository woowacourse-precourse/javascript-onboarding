function problem7(user, friends, visitors) {
  let result = [];
  let overlapFriends = [];
  let friendsObj = {};

  // 사용자와 함께 아는 친구의 점수를 객체에 넣음
  for (let i = 0; i < friends.length; i++) {
    let friendsName = friends[i][1];
    if (friendsName !== user) {
      friendsObj[friendsName] === 10
        ? (friendsObj[friendsName] += 10)
        : (friendsObj[friendsName] = 10);
    }
  }
  // 중복되는 친구들을 배열에 넣음
  for (let i = 0; i < friends.length; i++) {
    overlapFriends.push(friends[i][0]);
  }

  // 중복되는 친구들의 중복을 제거
  let set = new Set(overlapFriends);
  let friendsArr = [...set];

  // 방문자의 점수를 객체에 넣음
  for (let i = 0; i < visitors.length; i++) {
    for (let j = 0; j < friendsArr.length; j++) {
      if (visitors[i] !== friends[i][0]) {
        friendsObj[visitors[i]] === 1
          ? (friendsObj[visitors[i]] += 1)
          : (friendsObj[visitors[i]] = 1);
      }
    }
  }

  // 객체를 배열로 반환
  for (key in friendsObj) {
    result.push(key);
  }

  return result;
}

module.exports = problem7;
