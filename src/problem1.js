function problem1(pobi, crong) {
  var answer;

  function except(user) {
    user.forEach((page) => {
      if (page === 1 || page === 2 || page === 399 || page === 400) return -1;
    });
    if (user[0] % 2 === 0 || user[1] % 2 !== 0) return -1;
    if (user[1] !== user[0] + 1) return -1;
    return 0;
  }
  let exception = except(pobi) || except(crong);
  if (exception === -1) return -1;

  function getScore(user) {
    let leftScore = String(user[0]).split("");
    let rightScore = String(user[1]).split("");

    let leftSum = leftScore.reduce((acc, cur) => acc + Number(cur), 0);
    let leftMul = leftScore.reduce((acc, cur) => acc * Number(cur), 1);
    let rightSum = rightScore.reduce((acc, cur) => acc + Number(cur), 0);
    let rightMul = rightScore.reduce((acc, cur) => acc * Number(cur), 1);

    let userScore = Math.max(leftSum, leftMul, rightSum, rightMul);
    return userScore;
  }

  let pobiScore = getScore(pobi);
  let crongScore = getScore(crong);

  function getResult(pobiScore, crongScore) {
    if (pobiScore > crongScore) answer = 1;
    else if (pobiScore < crongScore) answer = 2;
    else if (pobiScore === crongScore) answer = 0;
  }

  getResult(pobiScore, crongScore);

  return answer;
}

module.exports = problem1;
