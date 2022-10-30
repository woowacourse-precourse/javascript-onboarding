function problem7(user, friends, visitors) {
  var answer = [];
  const friendNames = {};
  const indirectFriends = [];
  const scores = {};
  friends.forEach((friend, i) => {
    if (friend[0] === user) {
      friendNames[friend[1]] = friend[1];
    } else if (friend[1] === user) {
      friendNames[friend[0]] = friend[0];
    } else {
      indirectFriends.push(friend);
    }
  });
  indirectFriends.forEach((f) => {
    if (friendNames[f[0]]) {
      if (scores[f[1]]) scores[f[1]] = scores[f[1]] + 10;
      else scores[f[1]] = 10;
    } else if (friendNames[f[1]]) {
      if (scores[f[0]]) scores[f[0]] = scores[f[0]] + 10;
      else scores[f[0]] = 10;
    }
  });
  visitors.forEach((visitor) => {
    if (!friendNames[visitor]) {
      if (scores[visitor]) {
        scores[visitor]++;
      } else {
        scores[visitor] = 1;
      }
    }
  });
  const sortedScores = Object.fromEntries(
    Object.entries(scores).sort(([, a], [, b]) => b - a)
  );
  for (const score in sortedScores) {
    if (answer.length < 5) answer.push(score);
    else return;
  }

  return answer;
}

module.exports = problem7;
