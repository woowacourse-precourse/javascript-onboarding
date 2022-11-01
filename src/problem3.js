function problem3(number) {
  var answer;
  accNum = 0;

  for (let i = 1; i <= number; i++) {
    const changeArr = [...String(i)];
    for (const j of changeArr) {
      const num = parseInt(j);
      if (num === 3 || num === 6 || num === 9) accNum++;
    }
  }

  answer = accNum;
  return answer;
}

module.exports = problem3;
