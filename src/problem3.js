// 기능 목록
// 1. 수를 순회하는 기능
// 2. 수를 한 자 씩 나누는 기능
// 3. 3, 6, 9를 카운트하는 기능

// 수를 한 자 씩 나누는 함수
function listing(number){
  // 문자열로 변환 하고 나누어 다시 정수로 변환한 리스트 반환
  return String(number).split('').map(Number);
}

// 수를 순회하는 함수
function circuit(number) {
  // 3, 6, 9의 총 개수
  let count = 0;
  // 1부터 number까지 순회
  for(let i = 1; i <= number; i++){
    // 수를 한 자 씩 나누어 카운트 하는 부분
    const listing_number = listing(i);
    // 3, 6, 9를 카운트 할 부분
  }
  return count;
}

function problem3(number) {
  // 순회하여 결과값을 반환 받아 할당
  const answer = circuit(number);
  return answer;
}

module.exports = problem3;
