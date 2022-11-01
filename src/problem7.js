function problem7(user, friends, visitors) {
  var answer = [];
  let graph = {};
  let candidate = {};

  for (const [a, b] of friends) {
    const has = Object.prototype.hasOwnProperty;
    has.call(graph, a)
      ? (graph[`${a}`] = [...graph[`${a}`], `${b}`])
      : (graph[`${a}`] = [`${b}`]);
    has.call(graph, b)
      ? (graph[`${b}`] = [...graph[`${b}`], `${a}`])
      : (graph[`${b}`] = [`${a}`]);
  }

  for (const friendOfUser of graph[user]) {
    for (const friendOfFriend of graph[friendOfUser]) {
      if (graph[user].includes(friendOfFriend)) continue;
      if (friendOfFriend === user) continue;
      const has = Object.prototype.hasOwnProperty;
      has.call(candidate, friendOfFriend)
        ? (candidate[`${friendOfFriend}`] += 10)
        : (candidate[`${friendOfFriend}`] = 10);
    }
  }

  for (const visitor of visitors) {
    if (graph[user].includes(visitor)) continue;
    const has = Object.prototype.hasOwnProperty;
    has.call(candidate, visitor)
      ? (candidate[`${visitor}`] += 1)
      : (candidate[`${visitor}`] = 1);
  }

  const sorted = Object.entries(candidate)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
  for (const [userName] of sorted) {
    answer.push(userName);
  }

  return answer;
}

module.exports = problem7;
