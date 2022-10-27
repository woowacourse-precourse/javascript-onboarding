function problem7(user, friends, visitors) {
  let relation = {};
  let score = {};
  for (let i = 0; i < friends.length; i++) {
    const [a, b] = friends[i];
    if (!relation[a]) {
      relation[a] = [];
      score[a] = 0;
    }
    if (!relation[b]) {
      relation[b] = [];
      score[b] = 0;
    }
    relation[a].push(b);
    relation[b].push(a);
  }

  const userFriends = [...relation[user]];
  for (let i = 0; i < userFriends.length; i++) {
    const userFriend = userFriends[i];
    const friendFriends = [...relation[userFriend]];
    for (let j = 0; j < friendFriends.length; j++) {
      const friendFriend = friendFriends[j];
      if (friendFriend === user) {
        continue;
      }
      score[friendFriend] += 10;
    }
  }

  for (let i = 0; i < visitors.length; i++) {
    const visitor = visitors[i];
    if (!score[visitor]){
      score[visitor] = 0;
    }
    score[visitor] += 1;
  }

  let result = [];
  for (const id in score) {
    if (userFriends.includes(id) || id === user) {
      continue;
    }
    result.push([score[id], id]);
  }

  return result.sort().map(([,id]) => id);
}

module.exports = problem7;
