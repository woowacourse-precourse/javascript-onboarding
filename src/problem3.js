function problem3(number) {
  var answer = 0;
  for (let i = 1; i <= number; i++) {
    answer += clapCount(i);
  }
  return answer;
}

function clapCount(num) {
  const clapNumber = String(num).match(/[369]/g);
  if (clapNumber) return clapNumber.length;
  return 0;
}

module.exports = problem3;
