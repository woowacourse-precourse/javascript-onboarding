function problem7(user, friends, visitors) {
  var answer;

  const friendList = {};

  for (const [a, b] of friends) {
    if (friendList[a]) friendList[a].push(b);
    else friendList[a] = [b];
    if (friendList[b]) friendList[b].push(a);
    else friendList[b] = [a];
  }

  return answer;
}

module.exports = problem7;
