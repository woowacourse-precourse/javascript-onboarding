function problem7(user, friends, visitors) {
  let answer = [];
  let filterMap = new Map();

  for (let i = 0; i < friends.length; i++) {
    if (friends[i].includes(user)) {
      for (let j = 0; j < friends[i].length; j++) {
        filterMap.set(friends[i][j], 0);
      }
    } else {
      for (let j = 0; j < friends[i].length; j++) {
        filterMap.set(friends[i][j], 10);
      }
    }
  }

  for (let i = 0; i < visitors.length; i++) {
    if (!filterMap.has(visitors[i])) {
      filterMap.set(visitors[i], 1);
    } else if (filterMap.get(visitors[i]) !== 0) {
      filterMap.set(visitors[i], filterMap.get(visitors[i]) + 1);
    }
  }

  let answerMap = new Map([...filterMap].sort((x, y) => y[1] - x[1]));

  answerMap.forEach((x, y) => {
    if (x > 0 && answer.length < 5) {
      answer.push(y);
    }
  });

  return answer;
}

module.exports = problem7;
