function problem1(pobi, crong) {
  var answer = checkWinner(pobi, crong);
  return answer;
}

// 포비와 크롱이 점수 비교하여 게임의 승자 선정 
function checkWinner(pobi, crong){
  let resultPobi = calculationNum(pobi[0], pobi[1]);
  let resultCrong = calculationNum(crong[0], crong[1]);

  if (resultPobi === -1 || resultCrong === -1) {
    answer = -1;
    return answer;
  }
  if (resultPobi === resultCrong) answer = 0;
  else if (resultPobi > resultCrong) answer = 1;
  else if (resultPobi < resultCrong) answer = 2;

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
