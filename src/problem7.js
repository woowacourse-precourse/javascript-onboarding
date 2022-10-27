function problem7(user, friends, visitors) {
  const relation = getRelation(friends);

  let score = {};
  const userFriends = [...relation[user]];
  for (let i = 0; i < userFriends.length; i++) {
    const userFriend = userFriends[i];
    const friendFriends = [...relation[userFriend]];
    for (let j = 0; j < friendFriends.length; j++) {
      const friendFriend = friendFriends[j];
      if (friendFriend === user) {
        continue;
      }
      if (!score[friendFriend]) {
        score[friendFriend] = 0;
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

function getRelation(friends) {
  let relation = {};
  for (let i = 0; i < friends.length; i++) {
    const [a, b] = friends[i];
    if (!relation[a]) {
      relation[a] = [];
    }
    if (!relation[b]) {
      relation[b] = [];
    }
    relation[a].push(b);
    relation[b].push(a);
  }
  return relation;
}

module.exports = problem7;
