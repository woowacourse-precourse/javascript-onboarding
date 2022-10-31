function problem3(number) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    // 숫자에서 3,6,9 의 갯수를 센다. (33 일경우 2)
    const filteredNumberArray = [...i.toString()].filter(
      (digit) => digit === '3' || digit === '6' || digit === '9',
    );
    answer += filteredNumberArray.length;
  }
  return answer;
}

module.exports = problem3;
