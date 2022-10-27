function problem3(number) {
  let answer = 0;
  let numString = "";
  for (let i = 1; i <= number; i++) {
    numString += i;
  }

  [...numString].forEach((x) => {
    if (+x == 3 || +x == 6 || +x == 9) {
      return answer++;
    }
  });

  console.log(answer);

  return answer;
}

module.exports = problem3;
