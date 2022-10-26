function problem1(pobi, crong) {
  var answer;

  return answer;
}

function digitSum(...Arr) {
  let firstArr = Arr[0][0].toString().split("").map(x => parseInt(x));
  const firstNum = firstArr.reduce((a,b) => (a+b));

  let secondArr = Arr[0][1].toString().split("").map(x => parseInt(x));
  const secondNum = secondArr.reduce((a,b) => (a+b));

  return Math.max(firstNum, secondNum);
}


problem1([97, 98], [111, 112]);

module.exports = problem1;

// 기능들
// 1. 예외상황(첫장 끝장, 페이지수가 이상할때)
// 2. 각 자리수 나눠서 더하기
// 3. 각 자리수 나눠서 곱하기