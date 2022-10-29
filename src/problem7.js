function problem7(user, friends, visitors) {
  var answer;
  let score = new Map();

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
  return answer;
}

module.exports = problem7;
