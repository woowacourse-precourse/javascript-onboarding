function getFriendSets(user, friends) {
  let friendMap = {};
  let friendScore = {};
  let userFriend = [];

  for (let [a, b] of friends) {
    if (a === user || b === user) {
      userFriend.push(a === user ? b : a);
      continue;
    }

    if (!friendMap[a]) friendMap[a] = [b];
    else friendMap[a].push(b);

    if (!friendMap[b]) friendMap[b] = [a];
    else friendMap[b].push(b);

    friendScore[a] = 0;
    friendScore[b] = 0;
  }

  return { friendMap, userFriend, friendScore };
}

function problem7(user, friends, visitors) {
  let answer = [];
  let { friendMap, userFriend, friendScore } = getFriendSets(user, friends);

  for (let u in friendMap) {
    for (let f of friendMap[u]) {
      if (!userFriend.includes(f) && f !== user) {
        friendScore[f] += 10;
      }
    }
  }

  visitors.forEach(
    (v) => (friendScore[v] = friendScore[v] ? friendScore[v] + 1 : 1)
  );

  for (let name in friendScore) {
    if (!userFriend.includes(name)) {
      answer.push([name, friendScore[name]]);
    }
  }
  answer.sort((a, b) => {
    if (a[1] < b[1]) return 1;
    if (a[1] > b[1]) return -1;
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
  });

  return answer.slice(0, 5).map((a) => a[0]);
}

module.exports = problem7;
