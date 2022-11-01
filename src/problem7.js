function problem7(user, friends, visitors) {
  const answer = [];
  const map = new Map();
  let result = [];
  let i;
  let j;
  let score;

  for (i = 0; i < friends.length; i += 1) {
    score = friends[i].includes(user) ? 0 : 10;
    for (j = 0; j < friends[i].length; j += 1) map.set(friends[i][j], score);
  }

  for (i = 0; i < visitors.length; i += 1) {
    if (!map.has(visitors[i])) map.set(visitors[i], 1);
    else if (map.get(visitors[i])) map.set(visitors[i], map.get(visitors[i]) + 1);
  }

  result = [...map].sort((r1, r2) => r2[1] - r1[1]);

  for (i = 0; i < result.length; i += 1) {
    if (result[i][1]) answer.push(result[i][0]);
  }

  return answer;
}

module.exports = problem7;
