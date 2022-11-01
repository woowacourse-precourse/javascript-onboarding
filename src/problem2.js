function problem2(cryptogram) {
  const splitArr = cryptogram.split("");
  let check = false;
  var tmp;
  for (let i = 0; i < splitArr.length - 1; i++) {
    if (splitArr[i] === splitArr[i + 1]) {
      check = true;
      tmp = splitArr[i];
      splitArr[i] = 0;
      splitArr[i + 1] = 0;
      i++;
    } else if (tmp === splitArr[i]) {
      check = true;
      splitArr[i] = 0;
    }
  }
  if (!check) return cryptogram;
  else return problem2(splitArr.join("").split(0).join(""));
}

module.exports = problem2;

// 기능 구현
// 1. 받은 문자열을 배열로 변환 (종복체크를 위해)
// 2. 전체 문자열을 순회하며 i와 i+1을 비교 후 중복이면 i, i+1을 0으로 표시,
//    i를 tmp에 저장, check를 true로 바꿔 중복이 있음을 표시
// 3. i와 i+1이 같거나 tmp와 i가 같은 경우 i를 0으로 표시 (2개 이상 중복의 경우)
// 4. 반복문 종료 후 0으로표시된 부분 제거 후 재귀 실행
// 5. 반복문을 돌아도 check가 false인 경우 중복이 없으므로 재귀 종료
