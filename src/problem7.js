function problem7(user, friends, visitors) {
  let answer = [];
  let point = {};

  for (const relation of friends) {
    if (!relation.includes(user)) {
      for (const friend of relation) {
        point[friend] = 10;
      }
    } else {
      for (const friend of relation) {
        point[friend] = -1;
      }
    }
  }

  for (const visitor of visitors) {
    if (!point[visitor]) point[visitor] = 1;
    else if (point[visitor] > 0) {
      point[visitor]++;
    }
  }

  let res = [];
  for (const [name, score] of Object.entries(point)) {
    if (score > 0) res.push([name, score]);
  }
  res = res.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] < b[0] ? -1 : 1;
    }
    return a[1] < b[1] ? 1 : -1;
  });
  for (let i = 0; i < 5; i++) {
    if (res[i]) {
      answer.push(res[i][0]);
    }
  }

  return answer;
}

module.exports = problem7;
