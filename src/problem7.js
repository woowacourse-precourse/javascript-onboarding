function problem7(user, friends, visitors) {
  var answer;
  let score = new Map();
  let ranking = [];
  let result = [];

  for (let i = 0; i < friends.length; i++) {
    if (friends[i].includes(user)) {
      friends[i].map((ele) => {
        return score.set(ele, 0);
      });
    } else {
      friends[i].map((ele) => {
        if (score.has(ele)) {
          return score.set(ele, score.get(ele) + 10);
        } else {
          return score.set(ele, 10);
        }
      });
    }
  }

  for (let i = 0; i < visitors.length; i++) {
    if (score.has(visitors[i]) && score.get(visitors[i]) !== 0) {
      score.set(visitors[i], score.get(visitors[i]) + 1);
    } else if (!score.has(visitors[i])) {
      score.set(visitors[i], 1);
    }
  }

  ranking = [...score].sort(function (a, b) {
    return b[1] - a[1];
  });

  for (let i = 0; i < ranking.length; i++) {
    if (ranking[i][1] !== 0) {
      result.push(ranking[i][0]);
    }
  }
  return result;

  return answer;
}

module.exports = problem7;
