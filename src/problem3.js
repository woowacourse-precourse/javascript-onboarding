function countClap(strNum) {
  return (strNum.match(/[369]/g) || []).length;
}

function problem3(number) {
  let totalClapCount = 0;
  for (let n = 3; n < number + 1; n++) {
    totalClapCount += countClap(String(n));
  }
  return totalClapCount;
}

module.exports = problem3;
