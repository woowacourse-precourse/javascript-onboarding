/* 
1. 숫자을 배열로 변환
2. 숫자 크기 만큼 반복문을 돌면서 3, 6, 9 여부 확인
*/
function problem3(number) {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    const numArr = [...String(i)];
  }
  return count;
}

module.exports = problem3;
