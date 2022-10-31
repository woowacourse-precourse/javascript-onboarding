function problem7(user, friends, visitors) {
  const scoreSet = new Map();
  const excepts = new Set();
  let score = new Set();
  let firstscore = 0,
    secondscore = 0,
    thirdscore = 0;

  excepts.add(user);

  for (let x of friends) {
    if (x[0] === undefined || x[1] === undefined) continue;
    if (x.includes(user)) {
      excepts.add(x[0] === user ? x[1] : x[0]);
    }
  }

  for (let x of friends) {
    if (x[0] === undefined || x[1] === undefined) continue;
    if (!excepts.has(x[0])) {
      firstscore = scoreSet.has(x[0]) ? scoreSet.get(x[0]) + 10 : 10;
      scoreSet.set(x[0], firstscore);
      score.add(firstscore);
    }
    if (!excepts.has(x[1])) {
      secondscore = scoreSet.has(x[1]) ? scoreSet.get(x[1]) + 10 : 10;
      scoreSet.set(x[1], secondscore);
      score.add(secondscore);
    }
  }
  for (let x of visitors) {
    if (x === undefined) continue;
    if (!excepts.has(x)) {
      thirdscore = scoreSet.has(x) ? scoreSet.get(x) + 1 : 1;
      scoreSet.set(x, thirdscore);
      score.add(thirdscore);
    }
  }
}

module.exports = problem7;
