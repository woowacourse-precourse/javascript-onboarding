function problem7(user, friends, visitors) {
  var answer;
  const score = {};

  const graph = {};
  friends.forEach((friend) => {
    const [user1, user2] = friend;

    if (!graph[user1]) {
      graph[user1] = [];
    }
    if (!graph[user2]) {
      graph[user2] = [];
    }

    graph[user1].push(user2);
    graph[user2].push(user1);
  });

  const userFriends = Object.values(graph[user]);
  for (let key in graph) {
    if (key === user || userFriends.includes(key)) {
      continue;
    }

    for (let value of graph[key]) {
      if (userFriends.includes(value)) {
        score[key] = score[key] + 10 || 10;
      }
    }
  }

  for (let i = 0; i < visitors.length; i++) {
    const visitor = visitors[i];
    if (userFriends.includes(visitor)) {
      continue;
    }
    score[visitor] = score[visitor] + 1 || 1;
  }

  answer = Object.entries(score)
    .sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] - b[0];
      } else {
        return b[1] - a[1];
      }
    })
    .map((el) => el[0])
    .slice(0, 5);

  return answer;
}

module.exports = problem7;
