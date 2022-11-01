function problem7(user, friends, visitors) {
  let map = new Map();
  let answer = [];

  let directFriend = findDirectFriend(user, friends);

  scoreToIndirectFriend(user, directFriend, friends, map);

  scoreToVisitors(user, directFriend, visitors, map);

  let sorted = sorting(map);

  for (let [k, _] of sorted) {
    if (answer.length >= 5) break;
    answer.push(k);
  }
  return answer;
}
module.exports = problem7;

function findDirectFriend(user, friends) {
  let set = new Set();
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].includes(user)) {
      if (friends[i][0] === user) set.add(friends[i][1]);
      else set.add(friends[i][0]);
    }
  }
  return Array.from(set);
}

function scoreToIndirectFriend(user, directFriend, friends, map) {
  for (let friend of friends) {
    const [A, B] = friend;
    if (directFriend.includes(A) && B !== user && !directFriend.includes(B))
      map.set(B, map.get(B) + 10 || 10);
    else if (
      directFriend.includes(B) &&
      A !== user &&
      !directFriend.includes(A)
    )
      map.set(A, map.get(A) + 10 || 10);
  }
  return map;
}

function scoreToVisitors(user, directFriend, visitors, map) {
  visitors.forEach((v) => {
    if (!directFriend.includes(v) && v !== user)
      map.set(v, map.get(v) + 1 || 1);
  });
  return map;
}

function sorting(map) {
  let list = [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .sort((a, b) => {
      if (a[1] == b[1]) return a[0].localeCompare(b[0]);
    });
  return list;
}
