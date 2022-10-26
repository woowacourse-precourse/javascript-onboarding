// 기능 목록
// 1. 예외 처리
// 2. 더하기 점수 확인
// 3. 곱하기 점수 확인
// 4. 결과값을 결정

// 정수를 한 자 기준으로 리스트화 시키는 함수
function listing(page) {
  // 정수를 문자열로 변경후 ''기준으로 리스트로 변환, 변환된 문자열을 다시 정수형으로 변환
  return String(page).split('').map(Number);
}

// 곱하기 함수 구현
function checkMultiply(page) {
  // 정수를 리스트로 변환
  const num_list = listing(page);
  // 값을 곱할 변수
  let multiply_result = 1;
  // 리스트를 순회하며 값을 곱하기
  num_list.map((x) => {
    multiply_result *= x;
  })
  return multiply_result;
}

// 더하기 점수 확인
function checkSum(page) {
  // 정수를 리스트로 변환
  const num_list = listing(page);
  // 합계를 전환
  return num_list.reduce((a, b) => a + b);
}

// 점수를 확인하는 함수
function checkScore([page_left, page_right]) {
  // 왼쪽, 오른쪽 페이지 각각의 더하기 점수와 곱하기 점수를 저장할 리스트 리스트
  const socre_list = [checkSum(page_left), checkSum(page_right), checkMultiply(page_left), checkMultiply(page_right)];
  // 점수 리스트 중 가장 큰 값을 반환
  return Math.max(...socre_list);
}

// 예외 처리
function exception([page_left, page_right]) {
  // 왼쪽, 오른쪽 페이지가 1 ~ 400 의 범위가 아닐 경우, 이어지는 페이지가 아닐 경우 예외처리
  if (page_left < 1 || page_right > 400 || page_right < page_left || page_right - 1 !== page_left) {
    return false;
  }
  return true;
}

// problem1
function problem1(pobi, crong) {
  // 결과 초기 값을 -1로 선언
  // 재할당이 없다면 예외인 것으로 판단
  let answer = -1;
  // 예외처리에 문제 없을 경우 answer 재할당을 위한 if문
  if (exception(pobi) && exception(crong)) {
    // pobi 점수와 crong 점수를 결정
    const pobi_score = checkScore(pobi);
    const crong_score = checkScore(crong);
  }
  return answer;
}

module.exports = problem1;