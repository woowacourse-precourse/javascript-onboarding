function problem3(number) {
  // if(exception) return false;
  console.log(countClap(number));
  return countClap(number);
}

// 1의 자리수 분리하기
function divideNum(number) {
  const countNum = number.toString().split("").map(x => parseInt(x));
  if (countNum.includes(3) || countNum.includes(6) || countNum.includes(9)) return true;
  return false;
}


problem3(33);

module.exports = problem3;

// 기능들
// 1. 1부터 number까지 세기.
// 2. 1의 자리수 분리하기
// 3. 뒷자리 3, 6, 9에 손뼉치기.
// 4. 손뼉치는 수의 합계