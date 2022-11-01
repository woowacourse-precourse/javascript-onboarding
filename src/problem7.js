function problem7(user, friends, visitors) {
  var answer = [];
  var fmap = {};
  var score = {};
  for (let i = 0; i < friends.length; i++) {
    src = friends[i][0];
    dst = friends[i][1];
    if (src in friends) fmap[src].add(dst);
    else fmap[src] = new Set([dst]);
    if (dst in friends) fmap[dst].add(src);
    else fmap[dst] = new Set([src]);
  }

  for (let u in fmap) {
    if (u != user) {
      let common_friends = new Set([...fmap[user]].filter(x => fmap[u].has(x))).size;
      score[u] = (common_friends * 10);
    }
  }

  for (let i = 0; i < visitors.length; i++) {
    if (visitors[i] in score) score[visitors[i]] += 1;
    else score[visitors[i]] = 1;
  }
  answer = Object.entries(score).sort(function (a, b) {
    if (a[1] > b[1]) return -1;
    else if (b[1] > a[1]) return 1;
    else return a[0] < b[0] ? -1 : 1;
  });
  return answer.map(x => x[0]).slice(0, 5);
}

module.exports = problem7;
