function problem7(user, friends, visitors) {
  var answer = [];
  let result = [];
  let temp = new Map();

  for (let friend of friends) {

    if (!friend.includes(user)) {
      for (let name of friend) {
        temp.set(name, 10);
      }
    } else {
      for (let name of friend) {
        temp.set(name, 0);
      }
    }
  }

  for (let visitor of visitors) {

    if (!temp.has(visitor)) {
      temp.set(visitor, 1);
    } else if (temp.get(visitor) !== 0) {
      temp.set(visitor, temp.get(visitor) + 1);
    }
  }

  result = [...temp].sort((x, y) => y[1] - x[1]);

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