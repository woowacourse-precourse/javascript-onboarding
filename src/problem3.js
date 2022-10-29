function problem3(number) {
  let answer = [];
  // 손뼉 치는 횟수 👏
  let count = 0;

  // 주어진 number만큼 자연수를 만들어서 answer배열에 추가
  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].. 이런식으루
  for (let i = 1; i <= number; i++) {
    answer.push(i)
  }

  return count;
}

module.exports = problem3;
