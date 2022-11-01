function problem7(user, friends, visitors) {
  var answer;
  let scoreObj = {};

  for (const [a, b] of friends) {
    scoreObj[a] = 0;
    scoreObj[b] = 0;
  }

  console.log(scoreObj);
  
  return answer;
}

module.exports = problem7;
