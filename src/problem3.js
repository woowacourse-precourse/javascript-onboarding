function problem3(number) {
  let answer = 0;
  // 1부터 number 까지 1개씩 숫자를 말한다.
  for (let i = 1; i <= number; i++) {
    // 숫자에서 3,6,9 의 갯수를 센다. (33 일경우 2)
    const filteredNumberArr = [...i.toString()].filter(
      (val) => val === '3' || val === '6' || val === '9'
    );
    answer += filteredNumberArr.length;
  }
  return answer;
}

module.exports = problem3;
