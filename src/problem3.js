function digitsCheck(num) {
  let count = 0;
  let units = 0;

  while (num > 0) {
    units = num % 10;
    if (units == 3 || units == 6 || units == 9)
      count++;
    num = Math.floor(num / 10);
  }
  return count;
}

function countClaps(num) {
  let clapCount = 0;
  for (;num > 2; num--) {
    clapCount += digitsCheck(num);
  }
  return clapCount;
}

function problem3(number) {
  let answer = countClaps(number);
  return answer;
}

module.exports = problem3;