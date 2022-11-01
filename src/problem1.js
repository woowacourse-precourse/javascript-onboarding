function calcScore(pageArr) {
  let score = 0;

  for (let i = 0; i < pageArr.length; i++) {
    const nums = pageArr[i].toString().split("");
    let sum = 0;
    let multi = 1;
    for (let j = 0; j < nums.length; j++) {
      sum += parseInt(nums[j]);
      multi *= parseInt(nums[j]);
    }
    score = Math.max(score, sum, multi);
  }

  return score;
}

function problem1(pobi, crong) {
  let answer = -1;

  if (pobi[1] - pobi[0] === 1 && crong[1] - crong[0] === 1) {
    const pobiScore = calcScore(pobi);
    const crongScore = calcScore(crong);

    if (pobiScore > crongScore) answer = 1;
    else if (pobiScore < crongScore) answer = 2;
    else answer = 0;
  }

  return answer;
}

module.exports = problem1;
