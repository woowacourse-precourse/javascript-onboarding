function problem3(number) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    const strNum = String(i);
    for (let j = 0; j < strNum.length; j++) {
      if (strNum[j] === "3" || strNum[j] === "6" || strNum[j] === "9") answer++;
    }
  }

  return answer;
}

module.exports = problem3;
