function problem7(user, friends, visitors) {
  let list = new Map();
  //가까운 친구 찾기
  function findClosedFriends(user, friends) {
    let result = [];
    for (let i = 0; i < friends.length; i++) {
      if (friends[i].includes(user) == 1) {
        result.push(friends[i].filter((e) => e !== user));
      }
    }
    return result;
  }
  let closedFreind = findClosedFriends(user, friends);

  // 점수 메기기
  function scoreNumbering(friends, user, visitors, arr) {
    //점수
    let res = new Map();
    for (let friend of arr) {
      for (let i = 0; i < friends.length; i++) {
        if (friends[i].includes(friend[0]) && !friends[i].includes(user)) {
          let name = friends[i].filter((e) => e !== friend[0]);
          if (!res.has(name)) {
            res.set(name[0], 10);
          }
        }
      }
    }
    // 방문점수 더하기
    for (let visitor of visitors) {
      if (res.has(visitor)) {
        res.set(visitor, res.get(visitor) + 1);
      } else {
        res.set(visitor, 1);
      }
    }
    // 친구점수 더하기
    for (let friend of arr) {
      if (res.has(friend[0])) {
        res.delete(friend[0]);
      }
    }
    return res;
  }

  list = scoreNumbering(friends, user, visitors, closedFreind);
  list = [...list];
  list.sort((a, b) => b[0] - a[0]);
  let answer = [];
  for (let i = 0; i < list.length; i++) {
    answer.push(list[i][0]);
  }

  return answer;
}

module.exports = problem7;
