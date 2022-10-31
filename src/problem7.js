function problem7(user, friends, visitors) {
  let user_friends = [];
  let map = new Map();
  let answer = [];
  user_friends = getUserFriends(user, friends);

  // 건너서 아는 친구 점수 map에 set
  for (uf of user_friends) {
    for (friend of friends) {
      if (friend.includes(uf)) {
        const f = friend[0] === uf ? friend[1] : friend[0];
        if (f !== user) {
          map.set(f, 10);
        }
      } else {
        map.set(friend[0], 0);
        map.set(friend[1], 0);
      }
    }
  }
  // 방문자 점수 map에 set
  for (v of visitors) {
    if (!map.has(v)) {
      map.set(v, 1);
    } else {
      if (map.get(v) !== 0) map.set(v, map.get(v) + 1);
    }
  }
}

function getUserFriends(user, friends) {
  let u_friends = [];
  for (friend of friends) {
    if (friend.includes(user)) {
      u_friends.push(friend[0] === user ? friend[1] : friend[0]);
    }
  }
  return u_friends;
}

module.exports = problem7;
