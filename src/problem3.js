function problem3(number) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    let strNumber = String(i);

    answer = checkNum(strNumber, answer);
  }

  return answer;
}

function checkNum(strNum, clapCount) {
  for (let j of strNum) { 
    if (j === '3' || j === '6' || j === '9') clapCount++;
  }

  return clapCount;
}

module.exports = problem3;
