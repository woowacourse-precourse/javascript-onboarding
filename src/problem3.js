function problem3(number) {
  var answer;

  const cntOfClap = (num) => {
    // 포함되는 개수 더해주기
  };

  for (let num = 1; num <= number; num++) {
    num = num.toString();
    if (num.includes("3" || "6" || "9")) {
      answer += cntOfClap(num);
    }
  }
  return answer;
}

module.exports = problem3;
