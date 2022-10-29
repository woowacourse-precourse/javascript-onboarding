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

  // 여기서부터 문자열에 3, 6, 9가 몇개인지 확인하는 코드

  // 3을 찾게하는 명령문 초깃값 0을 가짐
  let findOf3 = result.indexOf('3');
  // 6을 찾게하는 명령문 초깃값 0을 가짐
  let findOf6 = result.indexOf('6');
  // 9을 찾게하는 명령문 초깃값 0을 가짐
  let findOf9 = result.indexOf('9');

  // 3이 몇개인지 구하는 반복문
  while (findOf3 !== -1) {
    count++;
    findOf3 = result.indexOf('3', findOf3 + 1);
  }

  // 6이 몇개인지 구하는 반복문
  while (findOf6 !== -1) {
    count++;
    findOf6 = result.indexOf('6', findOf6 + 1);
  }

  // 9가 몇개인지 구하는 반복문
  while (findOf9 !== -1) {
    count++;
    findOf9 = result.indexOf('9', findOf9 + 1);
  }

  return count;
}

module.exports = problem3;
