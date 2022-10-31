// 기능 목록
// 1. 수를 순회하는 기능
// 2. 수를 한 자 씩 나누는 기능
// 3. 3, 6, 9를 카운트하는 기능

// 3, 6, 9를 카운트 하는 함수
function countNumber(list){
  // 카운트를 저장할 변수
  let temp_count = 0;
  // 3, 6, 9, 즉 3의 배수라면 카운트
  list.map(x=>{
    if(x % 3 === 0 && x !== 0) temp_count++;
  })
  return temp_count;
}

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
    // 수를 한 자 씩 나누어 카운트
    const listing_number = listing(i);
    // 3, 6, 9를 카운트
    count += countNumber(listing_number);
  }
  return count;
}

function problem3(number) {
  // 순회하여 결과값을 반환 받아 할당
  const answer = circuit(number);
  return answer;
}

module.exports = problem3;
