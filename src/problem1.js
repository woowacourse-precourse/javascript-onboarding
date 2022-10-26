function scoreCalculator(score) {
  score = score.toString();

  let ans;

  let sumS = 0,
    mulS = 1;

  for (let i = 0; i < score.length; i++) {
    let number = Number(score[i]);
    sumS += number;
    mulS *= number;
  }

  ans = Math.max(sumS, mulS);

  return ans;
}

function problem1(pobi, crong) {
  var answer;

  pobi.sort();
  crong.sort();

  if (pobi[0] <= 1 || crong[0] <= 1 || pobi[1] >= 400 || crong[1] >= 400)
    return -1;
  if (pobi[1] - pobi[0] != 1 || crong[1] - crong[0] != 1) return -1;

  let pLeftScore, pRightScore, cLeftScore, cRightScore;

  let pobiScore, crongScore;

  pLeftScore = scoreCalculator(pobi[0]);
  pRightScore = scoreCalculator(pobi[1]);
  cLeftScore = scoreCalculator(crong[0]);
  cRightScore = scoreCalculator(crong[1]);

  pobiScore = Math.max(pLeftScore, pRightScore);
  crongScore = Math.max(cLeftScore, cRightScore);

  if (pobiScore > crongScore) answer = 1;
  else if (pobiScore < crongScore) answer = 2;
  else if (pobiScore === crongScore) answer = 0;

  return answer;
}

module.exports = problem1;
