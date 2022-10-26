// 예외사항 함수 생성
const isValidInput = (leftPage, rightPage) => {
  if (leftPage[0] <= 1 || leftPage[1] >= 400 || rightPage[0] <= 1 || rightPage[1] >= 400)
    return false;
  else if (leftPage[1] - leftPage[0] !== 1) return false;
  else if (rightPage[1] - rightPage[0] !== 1) return false;
  else return true;
};

// 페이지의 각 자리 숫자를 더한 값 함수 생성
const sum = (number) => {
  const numberToString = number.toString().split("");
  let sumNum = numberToString.reduce((acc, cur) => acc + Number(cur), 0);
  return sumNum
}

// 페이지의 각 자리 숫자를 곱한 값 함수 생성
const mul = (number) => {
  const numberToString = number.toString().split("");
  let mulNum = numberToString.reduce((acc, cur) => acc * Number(cur), 1);
  return mulNum
}

// function problem1(pobi, crong) {
//   var answer;
//   return answer;
// }

// module.exports = problem1;
