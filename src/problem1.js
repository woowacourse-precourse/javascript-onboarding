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

function isNotNormal(arr) {
  if (arr.length !== 2) return true;
  if (arr[0] % 2 !== 1 || arr[1] % 2 !== 0) return true;
  if (arr[0] <= 1 || arr[1] >= 400) return true;
  if (arr[1] - arr[0] !== 1) return true;
  return false;
}

function problem1(pobi, crong) {
  var answer = -1;

  if (isNotNormal(pobi) || isNotNormal(crong)) return answer;

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
