const problem3 = (number) => {
  const answerArr = [3, 6, 9];
  let answer = 0;
  for (let i = 1; i < number + 1; i += 1) {
    const currentDigit = [...String(i)].map((num) => Number(num));
    let cnt = 0;
    currentDigit.forEach((cur) => {
      if (answerArr.includes(cur)) {
        cnt += 1;
      }
    })
    answer += cnt;
  }
  return answer;
}

module.exports = problem3;
