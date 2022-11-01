/*
  기능 목록
  1. 입력으로 들어온 숫자가 문제의 조건에 해당하는 지 점검한다. 예외사항에 해당될 시 -1을 반환한다.
    문제 조건 ) 1. 입력값은 1 ~ 400 사이의 숫자이다.
              2. 왼쪽 페이지는 홀수, 오른쪽 페이지는 짝수이다.
              3. 입력값은 연속된 숫자여야한다.(왼쪽과 오른쪽페이지이므로)
              4. 첫 면과 마지막 면이 나오도록 책을 펼치지 않는다. (1페이지, 400페이지)
  2. 포비, 크롱의 입력값이 문제에 조건에 해당된다면, 포비와 크롱의 점수를 각각 계산한다.
    2-1. 입력값으로 왼쪽 페이지 구한다.
    2-2. 왼쪽 페이지의 각 자리수를 더한다.
    2-3. 왼쪽 페이지의 각 자리수를 곱한다.
    2-4. 2-2, 2-3의 결과 중 큰 값을 반환한다.
    2-5. 마찬가지 방법으로 오른쪽 페이지의 점수를 구하여 큰 값을 반환하여 포비와 크롱의 점수를 구한다.
  3. 두 점수를 비교하여 더 높은 점수를 반환한다.
*/

function problem1(pobi, crong) {
  var answer;
  return answer;
}

function validateInput(input){
  // 입력값을 검증하는 함수
  if (input[0] < 1 || input[0] > 400 || input[1] < 1 || input[1] > 400) {
    return false; // 입력값이 1~400 사이의 값이 아닌 경우
  } else if (input[0] % 2 === 0 || input[1] % 2 === 1) {
    return false; // 입력값이 홀수, 짝수가 아닌 경우
  } else if (input[0] + 1 !== input[1]) {
    return false; // 입력값이 연속된 값이 아닌 경우
  } else if (input[0] === 1 || input[1] === 400 ) {
    return false; // 입력값이 1, 400인 경우
  } else {
    return true; // 입력값이 유효한 경우
  }
}

function getScore(input){
  // 각 플레이어의 점수를 계산하여 더 큰 값을 반환하는 함수
  const [leftPage, rightPage] = input;
  const [leftSum, leftProduct] = [getSum(leftPage), getProduct(leftPage)]
  const leftScore = Math.max(leftSum, leftProduct);
  const [rightSum, rightProduct] = [getSum(rightPage), getProduct(rightPage)]
  const rightScore = Math.max(rightSum, rightProduct);
  return leftScore > rightScore ? leftScore : rightScore;
}

function getSum(num){
  // 각 자리수의 합을 구하는 함수
  var sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
};

function getProduct(num){
  // 각 자리수의 곱을 구하는 함수
  var product = 1;
  while (num > 0) {
    product *= num % 10;
    num = Math.floor(num / 10);
  }
  return product;
};

module.exports = problem1;
