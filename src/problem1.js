function problem1(pobi, crong) {
  // 예외사항
  if (!isValidInput(pobi, crong)) return -1;

  // 포비와 크롱에 대해 점수 계산
  const pobiScore = getScore(pobi);
  const crongScore = getScore(crong);

  // 점수를 바탕으로 결과 반환
  if (pobiScore > crongScore) return 1;
  if (pobiScore < crongScore) return 2;
  return 0; // 무승부
}

module.exports = problem1;

// pobi와 crong이 올바른 입력인지 판단하는 함수
function isValidInput(pobi, crong) {
  // 1. 두 페이지의 차이가 1이 맞는지 확인
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return false;

  // 2. 페이지가 홀수, 짝수 순서인지 확인(앞에서 차이가 1인건 확인함)
  if (pobi[1] % 2 !== 0 || crong[1] % 2 !== 0) return false;

  // 3. 페이지가 범위를 벗어나지 않는지 확인
  return (pobi[0] >= 1 && pobi[1] <= 400 && crong[0] >= 0 && crong[1] <= 400);
}

// 주어진 숫자의 각 번호를 반환하는 함수
function getDigits(number) {
  // 문자로 만들고, 각 문자로 쪼갠다
  let digits = number.toString().split("");

  // 문자를 숫자로 변환하고 반환
  return digits.map((element) => (parseInt(element)));
}

// 주어진 페이지의 각 번호를 더한 값을 반환하는 함수
function pageAddResult(number) {
  const digits = getDigits(number);
  // 각 번호를 더한 값 반환
  return digits.reduce((acc, cur) => (acc + cur), 0);
}

// 주어진 페이지의 각 번호를 곱한 값을 반환하는 함수
function pageMultResult(number) {
  const digits = getDigits(number);
  // 각 번호를 곱한 값 반환
  return digits.reduce((acc, cur) => (acc * cur), 1);
}

// pobi와 crong에 대해 점수를 반환하는 함수
function getScore([left, right]) {
  // 각 페이지 번호로 계산
  const leftMax = Math.max(pageAddResult(left), pageMultResult(left));
  const rightMax = Math.max(pageAddResult(right), pageMultResult(right));

  // 둘 중 가장 큰 수
  return Math.max(leftMax, rightMax);
}