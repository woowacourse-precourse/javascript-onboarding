function problem7(user, friends, visitors) {
  var answer;
  let userScoreList = {};

  visitors.forEach((visitor) => {
    if (userScoreList[visitor] === undefined) userScoreList[visitor] = 0;
    userScoreList[visitor] += 1;
  });

  return answer;
}

module.exports = problem7;
