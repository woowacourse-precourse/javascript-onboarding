function problem3(number) {
  let clapCount = 0;
  const regex369 = /3|6|9/g;
  for (let i = 0; i <= number; i++) {
    clapCount += (String(i).match(regex369) || []).length;
  }
  var answer = clapCount;
  return answer;
}

module.exports = problem3;
