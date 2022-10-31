function problem1(pobi, crong) {
  if (errorCase(pobi) || errorCase(crong)) return -1;

  let answer;
  const pobi_max_num = findMaxNum(pobi);
  let crong_max_num = findMaxNum(crong);

  if (pobi_max_num === crong_max_num) answer = 0;
  else if (pobi_max_num > crong_max_num) answer = 1;
  else answer = 2;

  return answer;
}

function findMaxNum(character) {
  // 각 페이지 숫자 별 최대값 구하기.
  let addNum = 0;
  let mulNum = 1;
  let characterMaxArr = [];

  for (let i = 0; i < character.length; i++) {
    // character의 가장 큰 수 구하기.
    n = character[i];
    while (n > 0) {
      temp = n % 10;
      addNum += temp;
      mulNum *= temp;
      n = Math.floor(n / 10);
    }
    maxNum = Math.max(addNum, mulNum);
    characterMaxArr.push(maxNum);
    addNum = 0;
    mulNum = 1;
  }

  return Math.max(...characterMaxArr);
}

function errorCase(character) {
  // 에러 케이스 핸들링하는 함수.
  const num1 = character[0];
  const num2 = character[1];
  if (num2 - num1 !== 1) return true;
  if (num1 === 1 || num2 === 400) return true;

  return false;
}

module.exports = problem1;
