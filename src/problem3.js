// 1. 입력값을 문자열로 변환
// 2. 자릿수별로 분리해서 배열에 추가
// 3. 전체 배열에서 3, 6, 9 찾기
// 4. 3, 6, 9 찾았다면 count 개수 증가

function problem3(number) {
  let count = 0;
  const arr = [];

  for (let i = 1; i <= number; i++) {
    let num = i.toString().split('');
    for (let j of num) {
      arr.push(j);
      if (j === '3' || j === '6' || j === '9') {
        count++;
      }
    }
  }
  return count;
}

module.exports = problem3;
