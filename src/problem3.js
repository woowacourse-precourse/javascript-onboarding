function problem3(number) {
  let answer = 0;
  const clapCount = (num) => {
    let count = 0;
    let splitNum = String(num).split("");

    count +=
      splitNum.filter((item) => item == "3").length +
      splitNum.filter((item) => item == "6").length +
      splitNum.filter((item) => item == "9").length;
    return count;
  };

  for (let i = 1; i <= number; i++) {
    answer += clapCount(i);
  }

  return answer;
}

module.exports = problem3;
