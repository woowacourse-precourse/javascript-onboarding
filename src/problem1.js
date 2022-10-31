function problem1(pobi, crong) {
  var answer;
  return answer;
}

// 페이지별 합/곱셈 구한 후 가장 큰 값 찾기
function calculationNum(leftPage, rightPage) {
  // 예외처리
  if (leftPage + 1 !== rightPage) return -1;

  let leftDigits = makeNumDigits(leftPage);
  let rightDigits = makeNumDigits(rightPage);

  let sumLeftDigits = leftDigits.reduce((sum, currValue) => sum + currValue);
  let sumRightDigits = rightDigits.reduce((sum, currValue) => sum + currValue);

  let mulLeftDigits = leftDigits.reduce((mul, currValue) => mul * currValue);
  let mulRightDigits = rightDigits.reduce((mul, currValue) => mul * currValue);

  let results = [sumLeftDigits, sumRightDigits, mulLeftDigits, mulRightDigits];

  let isMaxNum = results.reduce((total, val) => (total > val ? total : val));
  
  return isMaxNum;
}

// number를 각 자리 수로 나누어 array배열에 삽입
function makeNumDigits(num) {
  num = num.toString();
  let array = [];
  for (let i = 0; i < num.length; i++) {
    array.push(Number(num[i]));
  }
  return array;
}

module.exports = problem1;
