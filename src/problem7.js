function problem7(user, friends, visitors) {
  function getFriendsScore(friends) {
    let score = 0;
    friends.forEach(f => {
      if (data[user]?.friends.includes(f))
        score += 10;
    });
    return score;
  }

  function compareScore(a, b) {
    if (a[1] > b[1])
      return -1;
    if (a[1] < b[1])
      return 1;
    if (a[0] < b[0])
      return -1;
    if (a[0] > b[0])
      return 1;
    return 0;
  }

  let answer = [], data = {};

  friends.forEach(fr => {
    data[fr[0]] === undefined
      ? data[fr[0]] = { score: 0, friends: [fr[1]] }
      : data[fr[0]].friends.push(fr[1]);
    data[fr[1]] === undefined
      ? data[fr[1]] = { score: 0, friends: [fr[0]] }
      : data[fr[1]].friends.push(fr[0]);
  });
  visitors.forEach(v => {
    data[v] === undefined
      ? data[v] = { score: 1, friends: [] }
      : data[v].score++;
  });
  for (let u in data) {
    if (u === user || data[user]?.friends.includes(u))
      continue;
    data[u].score += getFriendsScore(data[u].friends);
    if (data[u].score > 0) {
      answer.push([u, data[u].score]);
    }
  }
  answer.sort(compareScore);
  answer = answer.map(x => x[0]).slice(0, 5);
  return answer;
}

module.exports = problem7;
