function checkPage(nums) {
  if (nums[0] > 2 && nums[1] < 399) return true;
  else return false;
}

function checkOddEven(nums) {
  if (nums[0] % 2 === 1 && nums[1] % 2 === 0) return true;
  else return false;
}

function checkSequence(nums) {
  if (nums[0] < nums[1] && nums[1] - nums[0] === 1) return true;
  else return false;
}

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
  let answer;

  const check =
    checkPage(pobi) &&
    checkPage(crong) &&
    checkOddEven(pobi) &&
    checkOddEven(crong) &&
    checkSequence(pobi) &&
    checkSequence(crong);

  if (check) {
    const pobiScore = calcScore(pobi);
    const crongScore = calcScore(crong);

    if (pobiScore > crongScore) answer = 1;
    else if (pobiScore < crongScore) answer = 2;
    else answer = 0;
  } else answer = -1;

  return answer;
}

module.exports = problem1;
