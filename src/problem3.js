function problem3(number) {
  var answer = 0;

  const cntOfClap = (num) => {
    let cnt = 0;
    for (let i = 0; i < num.length; i++) {
      if (num[i] == "3" || num[i] == "6" || num[i] == "9") {
        cnt += 1;
      }
    }
    return cnt;
  };

  for (let num = 1; num <= number; num++) {
    changedNum = num.toString();
    answer += cntOfClap(changedNum);
  }
  return answer;
}

module.exports = problem3;
