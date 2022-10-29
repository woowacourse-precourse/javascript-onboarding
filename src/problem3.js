function problem3(number) {
  let answer = [];
  // 손뼉 치는 횟수 👏
  let count = 0;

  // 주어진 number만큼 자연수를 만들어서 answer배열에 추가
  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].. 이런식으루
  for (let i = 1; i <= number; i++) {
    answer.push(i)
  }

  // replace를 사용하기 위해 배열을 문자열로 변경
  let result = String(answer);

  // 변경된 문자열에서 ,를 모두 제거
  // 현재 값 : 12345678910111213.. 이런식으루
  for (let i = 0; i <= number; i++) {
    result = result.replace(",", "");
  }

  return count;
}

module.exports = problem3;
