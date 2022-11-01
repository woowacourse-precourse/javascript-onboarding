function problem3(number) {
  let answer = 0;
  let threeSixNine = ['3', '6', '9'];
  for (i = 0; i < number + 1; i++) {
    const num = [...String(i).split('')];
    answer += getClapNum(num, threeSixNine);
  }
  return answer;
}

const getClapNum = (arr, el) => arr.reduce((acc, v) => acc + (v == el[0] || v == el[1] || v == el[2]), 0);

module.exports = problem3;
