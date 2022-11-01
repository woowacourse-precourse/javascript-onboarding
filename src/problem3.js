function problem3(number) {
  const answer = numberOf369(number);

  function numberOf369(n) {
    let cnt = 0;
    for (let i = 1; i <= n; i++) {
      const numberArr = i.toString().split("");
      for (let j = 0; j < numberArr.length; j++) {
        if (
          numberArr[j] === "3" ||
          numberArr[j] === "6" ||
          numberArr[j] === "9"
        ) {
          cnt += 1;
        }
      }
    }
    return cnt;
  }
  return answer;
}

module.exports = problem3;
