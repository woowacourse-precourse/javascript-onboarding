function problem7(user, friends, visitors) {
  let answer = [];
  let result = [];
  let add = new Map();

  for (let friend of friends) {
    if (!friend.includes(user)) {
      for (let a of friend) {
        add.set(a, 10);
      }
    } else {
      for (let a of friend) {
        add.set(a, 0);
      }
    }
  }

  for (let visitor of visitors) {
    if (!add.has(visitor)) {
      add.set(visitor, 1);
    } else if (add.get(visitor) !== 0) {
      add.set(visitor, add.get(visitor) + 1);
    }
  }

  result = [...add].sort((r1, r2) => r2[1] - r1[1]);

  for (let i = 0; i < result.length; i++) {
    if (result[i][1] === 0) {
      continue;
    } else {
      answer.push(result[i][0]);
    }
  }

  return answer;
}

module.exports = problem7;
